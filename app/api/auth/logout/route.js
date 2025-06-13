import { NextResponse } from "next/server";

export async function POST(params) {
    try {
        const response = NextResponse.json({
            message: "Logged out successfully",
        });

        response.cookies.set("access-token", null, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 0,
            path: "/",
        });

        return response;
    } catch (err) {
        return NextResponse.json({ error: "logout failed" }, { status: 500 });
    }
}
