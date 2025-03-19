
jest.mock("next/server", () => ({
    NextResponse: {
        json: jest.fn((data, options) => ({ data, ...options })),
    },
}));

import { validateRequestBody } from "../../src/app/utils";

// Written by Mouhammed Fakhro
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
  });

  test("returns isValid false when a required field is null", () => {
    const body = { name: "John", email: null };
    const requiredFields = ["name", "email"];

    expect(validateRequestBody(body, requiredFields)).toEqual({
      isValid: false,
      missingField: "email",
    });
  });

  test("returns isValid false when a required field is an empty string", () => {
    const body = { name: "John", email: "" };
    const requiredFields = ["name", "email"];

    expect(validateRequestBody(body, requiredFields)).toEqual({
      isValid: false,
      missingField: "email",
    });
  });

  test("returns isValid false when multiple required fields are missing", () => {
    const body = {};
    const requiredFields = ["name", "email"];

    expect(validateRequestBody(body, requiredFields)).toEqual({
      isValid: false,
      missingField: "name", 
    });
  });

  test("returns isValid true when body has extra fields", () => {
    const body = { name: "John", email: "john@example.com", age: 30 };
    const requiredFields = ["name", "email"];

    expect(validateRequestBody(body, requiredFields)).toEqual({
      isValid: true,
    });
  });

  test("returns isValid false when requiredFields is an empty array", () => {
    const body = { name: "John", email: "john@example.com" };
    const requiredFields = [];

    expect(validateRequestBody(body, requiredFields)).toEqual({
      isValid: true,
    });
  });

  test("handles numbers and boolean values correctly", () => {
    const body = { name: "John", age: 30, subscribed: true };
    const requiredFields = ["name", "age", "subscribed"];

    expect(validateRequestBody(body, requiredFields)).toEqual({
      isValid: true,
    });
  });

  test("returns isValid false when a required field is only spaces", () => {
    const body = { name: "  ", email: "john@example.com" };
    const requiredFields = ["name", "email"];

    expect(validateRequestBody(body, requiredFields)).toEqual({
      isValid: false,
      missingField: "name",
    });
  });

});