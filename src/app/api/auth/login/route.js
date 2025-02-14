import { NextResponse } from "next/server";

export async function POST(req) {
    let { username, password } = await req.json();
    if (await handleLogin(username, password)) {
        return NextResponse.json({ message: "Login successful" }, { status: 200 });
    }
    else {
        return NextResponse.json({ message: "Login failed " + username }, { status: 401 });
    } 
}

async function handleLogin(username, password) {
    //TODO add validation logic from db @Jansson
    //The only valid login is admin/admin for now
    let validusername = username === "admin";
    let validpassword = password === "admin";
    if (validusername && validpassword) {
        return true;
    } else {
        return false;
    }
}