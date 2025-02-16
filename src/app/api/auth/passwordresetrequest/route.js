import { NextResponse } from "next/server";

export async function POST(req) {
    let mail;
    try {
        ({ mail } = await req.json());
    } catch (error) {
        //can add fail handling here. According to the system diagram, the user should not be notified that the mail is invalid
        //This was added for testing
        return NextResponse.json({ message: "Invalid JSON input" }, { status: 400 });
    }
    if (handleResetRequest(mail)) {
        return NextResponse.json({ message: "Password reset request received" }, { status: 200 });
    } else {
        //can add fail handling here. According to the system diagram, the user should not be notified that the mail is invalid
        //This was added for testing
        return NextResponse.json({ message: "Password reset request failed" }, { status: 401 });
    }

}

 function handleResetRequest(mail) {
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