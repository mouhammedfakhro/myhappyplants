import { NextResponse } from "next/server";
export async function GET(req) {
    const headers = req.headers;
    const token = headers.get('token');

    handleFetchingTags(token);
    //Only for testing
    return NextResponse.json({ message: "list of " + token + "s tags in library" }, { status: 200 });
}
export async function POST(req) {
    const headers = req.headers;
    const token = headers.get('token');

    let { tagName, plantID } = await req.json();

    handleTagsPost(token, tagName, plantID);

}

function handleFetchingTags(token) { }
function handleTagsPost(token, tagName, plantID) { }