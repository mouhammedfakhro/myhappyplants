import { NextResponse } from "next/server";

export async function POST(req) {
    let { mail } = await req.json();
    if (await handleResetRequest(mail)) {
        return NextResponse.json({ message: "Password reset request received" }, { status: 200 });
    } else {
        //can add fail handling here. According to the system diagram, the user shouldnt not be notified that the mail is invalid
        return NextResponse.json({ message: "Password reset request failed" }, { status: 401 });
    }

}

async function handleResetRequest(mail) {
    //TODO Add the logic for handling the password reset request
    let validmail = mail === "@"; //TODO add validation logic from db @Jansson
    console.log("Mail: ", mail);
    console.log("Valid mail: ", validmail);
    if (validmail) {
        return true;
    } else {
        return false;
    }
}