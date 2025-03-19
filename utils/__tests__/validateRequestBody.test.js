
jest.mock("next/server", () => ({
    NextResponse: {
        json: jest.fn((data, options) => ({ data, ...options })),
    },
}));

import { validateRequestBody } from "../../src/app/utils";

describe("validateRequestBody", () => {
  test("returns isValid true when all required fields are present", () => {
    const body = { name: "John", email: "john@example.com" };
    const requiredFields = ["name", "email"];

    expect(validateRequestBody(body, requiredFields)).toEqual({
      isValid: true,
    });
  });

});