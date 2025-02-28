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

    // Delete all reminders related to this plant
    const plant = await prisma.plant.findUnique({
      where: { id: plantId },
    });
    await prisma.reminder.deleteMany({
      where: { plantId: plantId },
    });

    // Delete all reminders related to this plant
    /*await prisma.tag.deleteMany({
      where: { plantId: plantId },
    });*/

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

    console.log("Renaming plant of user: " + userName + ", plantId: " + plantId);

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
