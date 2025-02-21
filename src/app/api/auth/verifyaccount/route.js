import prisma from "../../../../../lib/prisma";
import {
  createServerResponse,
  validateRequestBody,
} from "../../../utils";

export async function POST(req) {
  try {
    const body = await req.json();
    const { emailText, verCode } = body;

    const { isValid, missingField } = validateRequestBody(body, [
      "emailText",
      "verCode",
    ]);

    if (!isValid) {
      return createServerResponse(
        { error: `Missing or empty field: ${missingField}` },
        400
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        email: emailText,
        verificationCode: verCode,
      },
    });

    if (existingUser) {
      await prisma.user.update({
        where: { email: emailText },
        data: {
          isVerified: true,
          verificationCode: null,
          expiresAt: null,
        },
      });

      return createServerResponse(
        { message: "Successfully verified account." },
        200
      );
    }

    return createServerResponse({ error: "Incorrect verification code" }, 400);
  } catch (error) {
    return createServerResponse({ error: "Internal server error" }, 500);
  }
}
