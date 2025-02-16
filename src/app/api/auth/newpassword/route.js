import { NextResponse } from "next/server";
export async function POST(req) {
    let { mail, newPasswordCode, newPassword } = await req.json();

    if (handleNewPassword(mail, newPasswordCode, newPassword)) {
        return NextResponse.json({ message: "New password received" }, { status: 200 });
    }
}

function handleNewPassword(mail, newPasswordCode, newPassword) {
    //TODO Add the logic for handling the new password + error handling for invalid json

    return true;
}