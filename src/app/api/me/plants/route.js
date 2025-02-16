import { NextResponse } from "next/server";
export async function GET(req) {


    const headers = req.headers;
    const token = headers.get('token');

    //TODO add fetching of plants from db @Jansson
    return NextResponse.json({ message: "list of " + token + "s plants" }, { status: 200 });
}
export async function POST(req) {
    let { catalogID, name, date } = await req.json();
    const headers = req.headers;
    token = headers.get('token');
    handlePlantsPost(token, catalogID, name, date);
}

function handlePlantsPost(token, catalogID, name, date) {
    //TODO Add the logic for adding a plant to the db 

    return true;
}