import prisma from "../../../../../lib/prisma";
import { createServerResponse } from "../../../utils";
import { NextResponse } from "next/server";
import { verifyUser } from "../../../../../lib/auth";


export async function POST(req) {
  try {
    const reminder = await prisma.reminder.create({
      data: {
        plantId: "a9e5fa6e-0a6c-45f8-89d7-fc27e1d77877",
        label: "Reminder!",
      },
    });
    if (!reminder) {
      return NextResponse.json("Failed to create reminder.", { status: 200 });
    }
    return NextResponse.json("Successfully created a reminder.", {
      status: 200,
    });
  } catch (e) {
    return createServerResponse({ error: "Invalid request body" }, 400);
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

    const user = await prisma.user.findUnique({
      where: { name: userName },
      include: { plants: { include: { reminders: true } } },
    });

    return NextResponse.json(plants, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to fetch reminders" },
      { status: 404 }
    );
  }
}
