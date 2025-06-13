import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("access-token")?.value;

        if (!token) {
            return NextResponse.json(
                { error: "unauthorized" },
                { status: 401 }
            );
        }

        const secret = new TextEncoder().encode(
            process.env.JWT_SECRET || "super-secret"
        );

        const { payload } = await jwtVerify(token, secret);

        return NextResponse.json({
            id: payload.userId,
            email: payload.email,
        });
    } catch (error) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
}
