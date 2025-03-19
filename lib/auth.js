import { NextResponse } from "next/server";
import prisma from "./prisma";
import jwtDecode from "jwt-decode"; // Fix import

const JWT_SECRET = process.env.JWT_SECRET;

export async function getUser(username) {
  try {
    const user = await prisma.user.findUnique({
      where: { name: username },
      include: {
        plants: {
          include: {
            reminders: true,
            tags: true,
            /* rest of info retrieved from API using catalogID:
            commonName
            scientificName
            familyName
            wateringPrefence
            sunlightPreference
            moreInfo/longer descriptive text
            image link
            */
          },
        },

        wishlist: {
          include: { items: true },
        },
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user", error);
    throw new Error("Failed to fetch user");
  }
}

export async function verifyUser(req, username) {
  try {
    const authHeader = req.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
      decoded = jwtDecode(token);
    } catch (err) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }

    if (decoded.name !== username) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
    }

    return { success: true };
  } catch (error) {
    console.error("Authentication error:", error);
    return { error: "Internal server error", status: 500 };
  }
}
