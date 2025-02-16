import { headers } from "next/headers";
import { NextResponse } from "next/server";
export async function PUT(req) {
    //todo needs validation for valid headers + body

    const headers = req.headers;
    const token = headers.get('token');

    let { name, date } = await req.json();
    handlePutPlant(token, name, date);

    //only for testing purposes
    return NextResponse.json({ message: "Plant " + name + " updated" }, { status: 200 });
}

function handlePutPlant(token, name, date) {
    //todo add logic for updating plant in db
    return true;
}
