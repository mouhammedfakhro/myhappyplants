import { NextResponse } from "next/server";

export async function PUT(req) {

    return NextResponse.json({ message: "Email updated" }, { status: 200 });

} 