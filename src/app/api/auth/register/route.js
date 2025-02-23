import prisma from "../../../../../lib/prisma";
import bcrypt from "bcrypt";
import {
  createServerResponse,
  generateRandomVerificationCode,
  validateRequestBody,
} from "../../../utils";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(req) {
  try {
    const body = await req.json();
    const { usernameText, emailText, passText } = body;
    console.log(usernameText, emailText, passText);

    const { isValid, missingField } = validateRequestBody(body, [
      "usernameText",
      "passText",
      "emailText",
    ]);
    if (!isValid) {
      return createServerResponse(
        { error: `Missing or empty field: ${missingField}` },
        400
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: emailText },
    });

    if (existingUser) {
      return createServerResponse(
        { error: "This email has already been taken." },
        400
      );
    }
    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    const hashedPassword = await bcrypt.hash(passText, 10);
    const verificationCode = generateRandomVerificationCode();

    const user = await prisma.user.create({
      data: {
        name: usernameText,
        email: emailText,
        password: hashedPassword,
        verificationCode: verificationCode,
      },
    });

    const sentFrom = new Sender(
      "MS_wLFXoq@trial-3vz9dlenvnnlkj50.mlsender.net",
      "Your verification code"
    );
    const recipients = [new Recipient(emailText, usernameText)];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject("Your verification code")
      .setText(`Your verification code is: ${verificationCode}`);

    await mailerSend.email.send(emailParams);

    return createServerResponse(
      {
        message: "User created successfully",
        user: { username: user.name, email: user.email },
      },
      201
    );
  } catch (error) {
    console.error("Server error:", error);
    return createServerResponse({ error: "Internal server error" }, 500);
  }
}
