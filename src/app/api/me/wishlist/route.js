import createServer from "next/dist/server/next";
import prisma from "../../../../../lib/prisma";
import { createServerResponse, validateRequestBody } from "../../../utils";

const uName = "momme";
export async function GET(req) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                name: {uName}
            },
            include: {
                wishlist: true
            },
        });

        if(!user) {
            return createServerResponse({error: "User not found"}, 404);
        }

        if(!user.wishlist) {
            return createServerResponse({error: "Wishlist not found"}, 404);
        }

        return createServerResponse({wishlist: user.wishlist}, 200);

    } catch(error) {
        return createServerResponse({error: "Internal server error"}, 500);
    }
}