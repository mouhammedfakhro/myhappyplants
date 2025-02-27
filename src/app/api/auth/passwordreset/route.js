import prisma from "../../../../../lib/prisma";
import { createServerResponse } from "../../../utils";

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email, code, pass } = body;

    const user = await prisma.user.findFirst({
      where: {
        email: email,
        passwordResetCode: code,
      },
    });

    if (!user) createServerResponse({ error: "User not found or invalid code." }, 400);

    const hashedPassword = await bcrypt.hash(pass, 10);

    const updatedUser = await prisma.user.update({
      where: {
        email: email,
        passwordResetCode: code,
      },
      data: { password: hashedPassword },
    });

    if (!updatedUser)
      createServerResponse({ error: "Failed to reset password." }, 400);

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    const sentFrom = new Sender(
      "MS_ZIFGCM@innovatechab.se",
      "Your password has been reset."
    );
    const recipients = [new Recipient(email, "Password reset")];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject("Sucessfully reset your password.")
      .setText(`Your password has been reset. -MyHappyPlants.`);

    await mailerSend.email.send(emailParams);

    return createServerResponse(
      { message: "Successfully sent reset code." },
      200
    );
  } catch (e) {
    return createServerResponse({ error: "Invalid request body" }, 400);
  }
}
