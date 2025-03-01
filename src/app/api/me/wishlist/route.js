import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { getUser, verifyUser } from "../../../../../lib/auth";

export async function POST(req) {
  // adding item to wishlist
}

// for deleting a wishlistItem
export async function DELETE(req) {
  try {
    const body = await req.json();
    const { userName, itemID } = body;

    console.log("deleting wishlist item - userName: " + userName + " and itemID: " + itemID);

    // Verify user
    const userVerified = await verifyUser(req, userName);
    if (!userVerified) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
    }

    // Delete wishItem with ID
    await prisma.wishItem.delete({
      where: { id: itemID }, 
    });

    return NextResponse.json(
      { message: "Wishlist Item successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Wishlist item deletion error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}