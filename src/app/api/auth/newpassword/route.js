import { NextResponse } from "next/server";
export async function POST(req) {
    //TODO Add the logic for handling the new password
    return NextResponse.json({ message: "New password received" }, { status: 200 });
}