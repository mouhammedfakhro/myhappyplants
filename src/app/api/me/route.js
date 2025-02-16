import { NextResponse } from "next/server";

export async function GET(req) {


    if (handleMe()) {
        return NextResponse.json({ message: "user info send" }, { status: 200 });
    }
}

function handleMe() {
    //Todo connect to db and get user info
    return true;
}