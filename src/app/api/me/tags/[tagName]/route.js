import { NextResponse } from "next/server";

export async function GET(req) {
    const headers = req.headers;
    const token = headers.get('token');

    handleFetchingTags(token);
    return NextResponse.json({ message: "list of " + token + "s tags in library" }, { status: 200 });
}
export async function DELETE(req) {
    const headers = req.headers;
    const token = headers.get('token');
    let { plantID } = await req.json();
    handleTagsDelete(token, plantID);

} 


function handleFetchingTags(token) { }
function handleTagsDelete(token, plantID) { }