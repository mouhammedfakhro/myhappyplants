
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

  test("returns isValid false when a required field is missing", () => {
    const body = {name: "John"};
    const requiredFields = ["name", "email"];

    expect(validateRequestBody(body, requiredFields)).toEqual({
        isValid: false,
        missingField: "email",
    })
  })
});