import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { getUser, verifyUser } from "../../../../../lib/auth";

export async function DELETE(req) {
  try {
    const body = await req.json();
    const { userName, plantId } = body;

    // Verify user
    const userVerified = await verifyUser(req, userName);
    if (!userVerified) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
    }

    // Get user from database
    const user = await getUser(userName);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    // Delete plant with ID
    await prisma.plant.delete({
      where: { id: plantId }, 
    });

    return NextResponse.json(
      { message: "Plant successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Plant deletion error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
