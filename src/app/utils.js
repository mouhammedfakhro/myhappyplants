import { NextResponse } from "next/server";
import crypto from "crypto";

export function validateRequestBody(body, requiredFields) {
  for (const field of requiredFields) {
    if (
      body[field] === undefined ||
      body[field] === null ||
      body[field].toString().trim() === ""
    ) {
      return { isValid: false, missingField: field };
    }
  }
  return { isValid: true };
}

export function createServerResponse(data, statusCode = 200) {
  return NextResponse.json(data, { status: statusCode });
}

export function generateRandomVerificationCode() {
  return crypto.randomInt(10000, 99999).toString();
}
