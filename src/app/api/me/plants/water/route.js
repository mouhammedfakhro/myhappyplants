import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";
import { getUser, verifyUser } from "../../../../../../lib/auth";

export async function PUT(req) {
  try {
    const body = await req.json();
    const { userName, plantId, selectedDate } = body;

    console.log("Watering plant of user: " + userName + ", plantId: " + plantId);


    // Verify user
    const userVerified = await verifyUser(req, userName);
    if (!userVerified) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
    }

    const lastWatered = new Date(selectedDate);
    const toBeWatered = new Date(lastWatered);
    // Calculate `toBeWatered` date (exempel så länge)
    toBeWatered.setDate(toBeWatered.getDate() + 7);

    // Delete all reminders related to this plant
    const plant = await prisma.plant.findUnique({
      where: { id: plantId },
    });
    await prisma.reminder.deleteMany({
      where: { plantId: plantId },
    });

    // Update plant water dates:
    await prisma.plant.update({
      where: { id: plantId },
      data: {
        lastWatered: lastWatered,
        toBeWatered: toBeWatered,
      },
    });

    return NextResponse.json(
      { message: "Plant successfully updated" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Plant update error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
