import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { jwtDecode } from "jwt-decode";

const JWT_SECRET = process.env.JWT_SECRET;

export async function DELETE(req) {
  try {
    const authHeader = req.headers.get("Authorization");
    const token = authHeader.split(" ")[1];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let decoded;
    try {
      decoded = jwtDecode(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }

    const { email } = await req.json();

    if (decoded.email !== email) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.user.delete({
      where: { email },
    });

    return NextResponse.json(
      { message: "Account successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Account deletion error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
