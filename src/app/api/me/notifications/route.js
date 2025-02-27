import prisma from "../../../../../lib/prisma";
import { createServerResponse, validateRequestBody } from "../../../utils";

export async function POST(req) {
  try {
    const body = await req.json();
    const { newToggle } = body;
    const header = await req.headers.get("Authorization");
    const userName = header.split(" ")[1];

    console.log("new toggle value:" + newToggle);

    const { isValid, missingField } = validateRequestBody(body, ["newToggle"]);

    if (!isValid) {
      return createServerResponse(
        { error: `Missing or empty field: ${missingField}` },
        400
      );
    }

    await prisma.user.update({
      where: { name: userName },
      data: {
        notificationEnabled: newToggle,
      },
    });

    return createServerResponse(
      { message: "Successfully changed notification perefrences" },
      200
    );
  } catch (error) {
    return createServerResponse({ error: "Internal server error" }, 500);
  }
}
