import createServer from "next/dist/server/next";
import prisma from "../../../../../lib/prisma";
import { createServerResponse, validateRequestBody } from "../../../utils";
import { NextResponse } from "next/server";

export async function POST(req) {
  // adding item to wishlist
}

export async function DELETE(req) {

    console.log("entered wishlist DELETE body")

    try {
        const body = await req.json();
        const {userName, catalogID} = body;
        
        
        const userVerified = await verifyUser(req, userName);
        if (!userVerified)
          return NextResponse.json({ error: "Unauthorized user" }, { status: 403 });
    
        const user = await getUser(userName);
        if (!user) createServerResponse({ error: "User not found" }, { status: 400 });
    
        if(!catalogID) {
          return NextResponse.json({ error: "Catalog ID is required" }, { status: 400 });
        }

        await prisma.user.wishlist.items.delete({
          where: { catalogID: catalogID, name: userName },
        });
    
        return NextResponse.json(
          { message: "Wishlist item successfully deleted" },
          { status: 200 }
        );
      } catch (error) {
        console.error("Wishlist item deletion error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
      }    
}