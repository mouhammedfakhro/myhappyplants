import { SignJWT } from "jose";
import { createServerResponse } from "../../../utils";
import { getUser, verifyUser } from "../../../../../lib/auth";

const SECRET_KEY = process.env.JWT_SECRET;

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    const userVerified = await verifyUser(req, username);
    if (!userVerified)
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });

    const user = await getUser(username);
    if (!user) createServerResponse({ error: "User not found" }, 400);
  
    const userPayLoad = {
      id: user.id,
      email: user.email,
      name: user.name,
      plants: user.plants,
      notificationEnabled: user.notificationEnabled,
      wishlist: user.wishlist,
    };

    const token = await new SignJWT(userPayLoad)
      .setProtectedHeader({ alg: "HS256" })
      .sign(new TextEncoder().encode(SECRET_KEY));

    return createServerResponse({ token }, 200);
  } catch (e) {
    return createServerResponse({ error: "Invalid request body" }, 400);
  }
}
