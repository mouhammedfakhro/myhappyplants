import { NextResponse } from "next/server";
import { verifyUser } from "../../../../../lib/auth";
import prisma from "../../../../../lib/prisma";
import { createServerResponse, validateRequestBody } from "../../../utils";

export async function PUT(req) {
  try {
    const body = await req.json();
    const { newToggle, userName } = body;
    const { isValid, missingField } = validateRequestBody(body, ["newToggle"]);

    if (!isValid) {
      return createServerResponse(
        { error: `Missing or empty field: ${missingField}` },
        400
      );
    }

    const userVerified = await verifyUser(req, userName);
    if (!userVerified)
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });

    await prisma.user.update({
      where: { name: userName },
      data: {
        notificationEnabled: newToggle,
      },
    });

    return createServerResponse(
      { message: "Successfully changed notification preferences" },
      200
    );
  } catch (error) {
    return createServerResponse({ error: "Internal server error" }, 500);
  }
}

