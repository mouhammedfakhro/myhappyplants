"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUpBox = ({ test }) => {
  const [usernameText, setUsernameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passText, setPassText] = useState("");
  const [inputError, setInputError] = useState("");

  if (!test){
  const router = useRouter();
  }

  const signUpClicked = async () => {
    if (!usernameText) {
      setInputError("error: username cannot be null or empty.");
      return;
    }
    if (!emailText) {
      setInputError("error: email cannot be null or empty.");
      return;
    }
    if (!passText) {
      setInputError("error: password cannot be null or empty.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;

    if (emailText.length > 40) {
      setInputError("email input too large: " + emailText.length);
      return;
    } else if (emailText.length < 5) {
      setInputError("email input too small: " + emailText.length);
      return;
    } else if (!emailRegex.test(emailText)) {
      setInputError("email input incorrect format: " + emailText);
      return;
    }

    const usernameRegex = /^[a-zA-Z]+$/;

    if (usernameText.length > 15) {
      setInputError("username input too large: " + usernameText.length);
      return;
    } else if (usernameText.length < 1) {
      setInputError("username input too small: " + usernameText.length);
      return;
    } else if (!usernameRegex.test(usernameText)) {
      setInputError("username input incorrect format: " + usernameText);
      return;
    }

    if (passText.length > 30) {
      setInputError("password input too large: " + passText.length);
      return;
    } else if (passText.length < 4) {
      setInputError("password input too small: " + passText.length);
      return;
    }

    setInputError("all input OK");

    if (!test) {
      try {
        const response = await axios.post("/api/auth/register", {
          usernameText,
          emailText,
          passText,
        });

        console.log("User registered successfully:", response.data);

        // Redirect to email verification page
        const encodedEmail = encodeURIComponent(emailText);
        router.push(`/verifyEmail?email=${encodedEmail}`);
      } catch (error) {
        console.error(
          "Registration error:",
          error.response?.data || error.message
        );

        // Handle specific errors (e.g., username/email already taken)
        if (error.response?.data?.error) {
          alert(error.response.data.error);
        } else {
          alert("Failed to register. Please try again.");
        }
      }
    }
  };

  const loginPage = () => {
    router.push(`../`);
  };

  return (
    <div className="justify-center items-center flex">
      <div className="space-y-3 justify-items-center items-center">
        <h1 className="text-xl font-light" style={{ color: "#344E41" }}>
          Create a new account
        </h1>

        <div className="">
          <p className="text-md font-light" style={{ color: "#344E41" }}>
            Username
          </p>
          <input
            type="text"
            value={usernameText}
            onChange={(e) => setUsernameText(e.target.value)}
            className="rounded-sm text-black border-2 outline-green-950 p-2 focus:outline-0"
            placeholder="enter a username"
            maxLength={15}
          ></input>
        </div>

        <div className="">
          <p className="text-md font-light" style={{ color: "#344E41" }}>
            Email
          </p>
          <input
            type="text"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            className="rounded-sm text-black border-2 outline-green-950 p-2 focus:outline-0"
            placeholder="enter an email"
            maxLength={40}
          ></input>
        </div>

        <div className="">
          <p className="text-md font-light" style={{ color: "#344E41" }}>
            Password
          </p>
          <input
            type="password"
            value={passText}
            onChange={(e) => setPassText(e.target.value)}
            className="rounded-sm text-black border-2 outline-green-950 p-2 focus:outline-0"
            placeholder="password"
            maxLength={20}
          ></input>
        </div>

        <p
          className="text-sm font-light text-red-800"
          data-testid="errorMessage"
        >
          {inputError}
        </p>

        <div className="align-middle justify-items-center">
          <button
            className="text-white rounded-md p-2 min-w-[100px] "
            style={{ background: "#3A5A40" }}
            onClick={signUpClicked}
          >
            Sign up
          </button>
        </div>

        <button
          className="underline hover:text-lime-800 font-light text-sm"
          onClick={loginPage}
        >
          {"<< back to login"}
        </button>
      </div>
    </div>
  );
};

export default SignUpBox;
