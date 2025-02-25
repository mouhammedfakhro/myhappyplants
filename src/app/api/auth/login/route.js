import { SignJWT } from "jose";
import prisma from "../../../../../lib/prisma";
import { createServerResponse } from "../../../utils";
import bcrypt from "bcrypt";

const SECRET_KEY = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    
    const body = await req.json();

    const { username, password } = body;
    const user = await prisma.user.findUnique({
      where: { name: username },
    });

    if (!user) createServerResponse({ error: "User not found" }, 400);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return createServerResponse({ error: "Invalid password" }, 400);

    const userPayLoad = {
      id: user.id,
      name: user.email,
      name: user.name,
      plants: user.plants,
    };

    const token = await new SignJWT(userPayLoad)
      .setProtectedHeader({ alg: "HS256" })
      .sign(new TextEncoder().encode(SECRET_KEY));

    return createServerResponse({ token }, 200);
  } catch (e) {
    return createServerResponse({ error: "Invalid request body" }, 400);
  }
}
