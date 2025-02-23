"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUpBox = ({}) => {
  const [usernameText, setUsernameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passText, setPassText] = useState("");

  const router = useRouter();

  const signUpClicked = () => {
    if (!usernameText || !emailText || !passText) {
      alert("Please make sure username, email and password are filled in");
    } else {
      // regex check
      // if false: show error
      // if true: API CALL signup request
      // if successful:
      //router.push(`../?content=${"verify"}`);

      router.push(`/verifyEmail?content=verify&email=${"encodedEmail"}`)

      axios
        .post("api/auth/register", { usernameText, emailText, passText })
        .then(() => {
          const encodedEmail = encodeURIComponent(emailText);
          //router.push(`../?content=verify&email=${encodedEmail}`);
          //router.push(`/verifyEmail?content=verify&email=${encodedEmail}`)
        })
        .catch((error) => {
          if (error.response) {
            console.error("Error response:", error.response.data);
          } else {
            console.error("Axios error:", error.message);
          }
        });

      // else: show error
      // taken username
      // taken email
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
            className="bg-lime-900 text-white hover:bg-lime-950 rounded-md p-2 min-w-[100px] "
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
