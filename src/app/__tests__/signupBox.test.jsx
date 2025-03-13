import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import SignUpBox from "../components/auth/SignUpBox";


describe("SignUpBox", () => {

  /* -----------------------------------------------------------------------------
        Email Tests
  -------------------------------------------------------------------------------- */

  test("empty string email", () => {
    // 1. create the component
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);

    // 2. access the fields
    // button
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    // input fields
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    // 3. input default value
    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    // 4. input email value
    fireEvent.change(emailField, { target: { value: "" } });

    // 5. press signup button
    fireEvent.click(signUpButton);

    // 6. get the error text
    const errorText = getByTestId("errorMessage").textContent;

    // 7. assert correct output
    expect(errorText).toBe("error: email cannot be null or empty.");
  });

  test("null email", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(emailField, { target: { value: null } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("error: email cannot be null or empty.");
  });

  test("invalid email format: not email expression", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(emailField, { target: { value: "example input" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("email input incorrect format: example input");
  });

  test("invalid email format: email expression but containing illegal symbols", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(emailField, { target: { value: "email!@yahoo.com" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("email input incorrect format: email!@yahoo.com");
  });

  test("BVA: max length (40)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(emailField, { target: { value: "example12345678912345678901234@email.com" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

  test("BVA: max length + 1 (41)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(emailField, { target: { value: "example123456789123456789012345@email.com" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("email input too large: 41");
  });

  test("BVA: max length - 1 (39)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(emailField, { target: { value: "example1234567891234567890123@email.com" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

  test("BVA: min length (5)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(emailField, { target: { value: "a@b.c" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

  test("BVA: min length + 1 (6)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(emailField, { target: { value: "aa@b.c" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

  test("BVA: min length - 1 (4)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(emailField, { target: { value: "a@bc" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("email input too small: 4");
  });


  /* -----------------------------------------------------------------------------
        Username Tests
  -------------------------------------------------------------------------------- */

  test("empty string username", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(usernameField, { target: { value: "" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("error: username cannot be null or empty.");
  });

  test("null username", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(usernameField, { target: { value: null } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("error: username cannot be null or empty.");
  });

  test("invalid username format: numbers", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(usernameField, { target: { value: "123456" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("username input incorrect format: 123456");
  });

  test("invalid username format: containing symbols", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(usernameField, { target: { value: "username!" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("username input incorrect format: username!");
  });

  test("BVA: max length (15)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(usernameField, { target: { value: "usernameExample" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

  test("BVA: max length +1 (16)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(usernameField, { target: { value: "usernameExamplee" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("username input too large: 16");
  });

  test("BVA: max length -1 (14)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(usernameField, { target: { value: "usernameExampl" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

  test("BVA: min length (1)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(usernameField, { target: { value: "a" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

  test("BVA: min length +1 (2)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(usernameField, { target: { value: "ab" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

  test("BVA: min length -1 (0)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });

    fireEvent.change(usernameField, { target: { value: "" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("error: username cannot be null or empty.");
  });

  /* -----------------------------------------------------------------------------
        Password Tests
  -------------------------------------------------------------------------------- */

  test("empty string password", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });

    fireEvent.change(passwordField, { target: { value: "" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("error: password cannot be null or empty.");
  });

  test("null password", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });

    fireEvent.change(passwordField, { target: { value: null } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("error: password cannot be null or empty.");
  });

  test("null password", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });

    fireEvent.change(passwordField, { target: { value: null } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("error: password cannot be null or empty.");
  });

  test("BVA: max length (30)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });

    fireEvent.change(passwordField, { target: { value: "ExampleLongPassword123456789!!" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

  test("BVA: max length +1 (31)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });

    fireEvent.change(passwordField, { target: { value: "ExampleLongPassword123456789!!!" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("password input too large: 31");
  });

  test("BVA: max length -1 (29)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });

    fireEvent.change(passwordField, { target: { value: "ExampleLongPassword123456789!" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

  test("BVA: min length (4)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });

    fireEvent.change(passwordField, { target: { value: "1234" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });
  
  test("BVA: min length +1 (5)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });

    fireEvent.change(passwordField, { target: { value: "12345" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

  test("BVA: min length -1 (3)", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });

    fireEvent.change(passwordField, { target: { value: "123" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("password input too small: 3");
  });



  /* -----------------------------------------------------------------------------
        All valid inputs
  -------------------------------------------------------------------------------- */

  test("all inputs in correct format and length", () => {
    const { getByTestId, getByRole } = render(<SignUpBox test={true} />);
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    const emailField = screen.getByPlaceholderText("enter an email");
    const usernameField = screen.getByPlaceholderText("enter a username");
    const passwordField = screen.getByPlaceholderText("password");
    expect(emailField).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    fireEvent.change(usernameField, { target: { value: "ValidUsername" } });
    fireEvent.change(passwordField, { target: { value: "Password1234!" } });
    fireEvent.change(emailField, { target: { value: "example@email.com" } });
    fireEvent.click(signUpButton);
    const errorText = getByTestId("errorMessage").textContent;
    expect(errorText).toBe("all input OK");
  });

});
