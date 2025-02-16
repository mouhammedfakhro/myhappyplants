import { NextResponse } from "next/server";

export async function GET(req) {
    const headers = req.headers;
    const token = headers.get('token');

    handleFetchingReminders(token);
    return NextResponse.json({ message: "list of " + token + "s reminders" }, { status: 200 });
}
export async function DELETE(req) {
    const headers = req.headers;
    const token = headers.get('token');
    let { reminderID } = await req.json();

    handleDeleteReminder(token, reminderID);
}

function handleFetchingReminders(token) {
    //todo add fetching of reminders from db 
    return true;
}
function handleDeleteReminder(token, reminderID) {
    //todo add logic for deleting reminder from db 
    return true;
}