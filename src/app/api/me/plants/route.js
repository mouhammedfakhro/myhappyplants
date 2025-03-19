import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { getUser, verifyUser } from "../../../../../lib/auth";

// for deleting a plant
export async function DELETE(req) {
  try {
    const body = await req.json();
    const { userName, plantId } = body;

    // Verify user
    const userVerified = await verifyUser(req, userName);
    if (!userVerified) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
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

// for renaming a plant
export async function PUT(req) {
  try {
    const body = await req.json();
    const { userName, plantId, nameInput } = body;

    // Verify user
    const userVerified = await verifyUser(req, userName);
    if (!userVerified) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
    }

    // Update plant name:
    await prisma.plant.update({
      where: { id: plantId },
      data: {
        nickname: nameInput,
      },
    });

    return NextResponse.json(
      { message: "Plant successfully renamed" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Plant rename error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// for adding a plant to library
export async function POST(req) {
  try {
    const body = await req.json();
    const { userName, catalogID, nickname, imageUrl } = body;

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

    // OBS detta ska egentligen hämtas från API med catalogID
    const waterFreq = 7;

    // add plant to library
    await prisma.plant.create({
      data: {
        user: {
          connect: { id: user.id },
        },
        catalogID: catalogID,
        nickname: nickname,
        imageUrl: imageUrl,
        lastWatered: new Date(),
        toBeWatered: new Date(
          new Date().setDate(new Date().getDate() + waterFreq)
        ),
      },
    });

    return NextResponse.json(
      { message: "Plant successfully added to library" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding plant to library:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userName = searchParams.get("userName");

    const userVerified = await verifyUser(req, userName);
    if (!userVerified) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
    }

    // get user id
    const user = await prisma.user.findUnique({
      where: { name: userName },
      include: { plants: { include: { reminders: true } } },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching plants." },
      { status: 404 }
    );
  }
}
