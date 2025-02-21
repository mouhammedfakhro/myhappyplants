import prisma from "../../../../../lib/prisma";
import bcrypt from "bcrypt";
import { createServerResponse, validateRequestBody } from "../../../utils";

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password, email } = body;
    const { isValid, missingField } = validateRequestBody(body, [
      "username",
      "password",
      "email",
    ]);

    if (!isValid) {
      return createServerResponse(
        { error: `Missing or empty field: ${missingField}` },
        400
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return createServerResponse(
        { error: "This email has already been taken." },
        400
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: hashedPassword,
      },
    });

    return createServerResponse({ username, password, email }, 201);
  } catch (error) {
    return createServerResponse({ error: "Invalid request body" }, 400);
  }
}
