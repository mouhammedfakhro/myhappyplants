import { NextResponse } from "next/server";

export function validateRequestBody(body, requiredFields) {
  for (const field of requiredFields) {
    if (!body[field] || body[field].toString().trim() === "") {
      return { isValid: false, missingField: field };
    }
  }
  return { isValid: true };
}

export function createServerResponse(data, errorCode) {
  return NextResponse.json({ data }, { status: errorCode });
}
