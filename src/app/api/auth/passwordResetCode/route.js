import prisma from "../../../../../lib/prisma";
import { createServerResponse, generateRandomVerificationCode } from "../../../utils";

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(req) {
  try {
    const body = await req.json();

    const { emailText } = body;

    const resetCode = generateRandomVerificationCode();

    console.log(resetCode);

    const user = await prisma.user.update({
      where: { email: emailText },
      data: { passwordResetCode: resetCode },
    });

    console.log(user);

    if (!user) createServerResponse({ error: "User not found" }, 400);

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    const sentFrom = new Sender(
      "MS_wLFXoq@trial-3vz9dlenvnnlkj50.mlsender.net",
      "Your verification code"
    );
    const recipients = [new Recipient(emailText, "Reset code")];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject("Your reset code")
      .setText(`Your reset code is: ${resetCode}`);

    await mailerSend.email.send(emailParams);

    return createServerResponse({ message: "Successfully sent reset code." }, 200);
  } catch (e) {
    return createServerResponse({ error: "Invalid request body" }, 400);
  }
}
