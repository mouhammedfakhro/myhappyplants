import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { getUser, verifyUser } from "../../../../../lib/auth";

// for deleting a wishlistItem
export async function DELETE(req) {
  try {
    const body = await req.json();
    const { userName, itemID } = body;

    console.log(
      "deleting wishlist item - userName: " +
        userName +
        " and itemID: " +
        itemID
    );

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

// for adding a catalogItem to wishlist
export async function POST(req) {
  try {
    const body = await req.json();
    const { userName, catalogID } = body;

    // Verify user
    const userVerified = await verifyUser(req, userName);
    if (!userVerified) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
    }

    // get user id
    const user = await prisma.user.findUnique({
      where: { name: userName },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    await prisma.wishItem.create({
      data: {
        wishlist: {
          connectOrCreate: {
            where: { userID: user.id },
            create: { userID: user.id },
          },
        },
        catalogID: catalogID,
      },
    });

    return NextResponse.json(
      { message: "Item successfully created and added to wishlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("adding item to wishlist error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url); 
    const userName = searchParams.get("userName");
    const userId = searchParams.get("userId");

    const userVerified = await verifyUser(req, userName);
    if (!userVerified) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
    }

    const user = await prisma.user.findUnique({
      where: { name: userName },
    });

    console.log(user);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    const wishlist = await prisma.wishlist.findFirst({
      where: { userID: userId },
      include: {
        items: true,
      },
    });

    if (!wishlist) {
      return NextResponse.json(
        { error: "Wishlist not found." },
        { status: 400 }
      );
    }

    return NextResponse.json(wishlist, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching wishlist." },
      { status: 404 }
    );
  }
}
