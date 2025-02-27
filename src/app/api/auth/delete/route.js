import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { getUser, verifyUser } from "../../../../../lib/auth";

export async function DELETE(req) {
  try {
    const body = await req.json();
    const { userName } = body;
    
    const userVerified = await verifyUser(req, userName);
    if (!userVerified)
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });

    const user = await getUser(userName);
    if (!user) createServerResponse({ error: "User not found" }, 400);

    await prisma.user.delete({
      where: { name: userName },
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
