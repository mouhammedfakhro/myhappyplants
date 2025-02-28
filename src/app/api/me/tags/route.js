import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { getUser, verifyUser } from "../../../../../lib/auth";

// for updating tags of a plant
export async function PUT(req) {
  try {
    const body = await req.json();
    const { userName, plantId, tags } = body;

    console.log(
      "Updatings tags of user: " +
        userName +
        ", for the plant with id: " +
        plantId
    );

    // Verify user
    const userVerified = await verifyUser(req, userName);
    if (!userVerified) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
    }

    // Ensure plant exists
    const plant = await prisma.plant.findUnique({
      where: { id: plantId },
    });

    if (!plant) {
      return NextResponse.json({ error: "Plant not found" }, { status: 404 });
    }

    // remove existing tags
    await prisma.tag.deleteMany({
        where: { plantId: plantId },
    });

    // insert new tags
    const newTags = tags.map(tagName => ({
        tagName,
        plantId: plantId,
    }));
    await prisma.tag.createMany({
        data: newTags,
    });

    return NextResponse.json(
      { message: "Tags successfully updated" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Tags update error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
