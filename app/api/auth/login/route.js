import { NextResponse } from "next/server";
import { SignJWT } from "jose";

const users = [
    {
        id: 1,
        email: "user1@example.com",
        password: "password1",
    },
    {
        id: 2,
        email: "user2@example.com",
        password: "password2",
    },
];

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({
                error: "Email or password is missing",
                status: 400,
            });
        }

        const user = users.find((user) => user.email == email);

        if (!user) {
            return NextResponse.json(
                {
                    error: "Invalid credentials",
                },
                { status: 401 }
            );
        }

        const secret = new TextEncoder().encode(
            process.env.JWT_SECRET || "super-secret"
        );

        const token = await new SignJWT({ userId: user.id, email: user.email })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("7d")
            .sign(secret);

        const response = NextResponse.json({
            message: "Login successful",
            user: { id: user.id, email: user.email },
        });

        response.cookies.set("access-token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            { error: "someting went wrong" },
            { status: 400 }
        );
    }
}
