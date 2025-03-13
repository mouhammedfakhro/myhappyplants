"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUpBox = ({}) => {
  const [usernameText, setUsernameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passText, setPassText] = useState("");

  const router = useRouter();

  const signUpClicked = async () => {
    if (!usernameText || !emailText || !passText) {
      alert("Please make sure username, email, and password are filled in.");
      return;
    }

    try {
      const response = await axios.post("/api/auth/register", {
        usernameText,
        emailText,
        passText,
      });

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
          ></input>
        </div>

        <p className="text-sm font-light text-red-800">
          *password must be min 8 chars, have min one special
          <br />
          char .,*/, and min one uppercase char
        </p>

        <div className="align-middle justify-items-center">
          <button
            className="text-white rounded-md p-2 min-w-[100px] "  style={{ background: "#3A5A40" }}
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
