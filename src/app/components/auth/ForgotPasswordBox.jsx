"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const PasswordBox = ({}) => {
  const [emailText, setEmailText] = useState("");

  const router = useRouter();

  const sendCodeClicked = async () => {
    if (emailText) {
      try {
        axios
        .post("api/auth/passwordResetCode", { emailText })
        .then(() => {})
        .catch((error) => {
          if (error.response) {
            console.error("Error response:", error.response.data);
          } else {
            console.error("Axios error:", error.message);
          }
        });

        const encodedEmail = encodeURIComponent(emailText);
        router.push(`/passwordReset?email=${encodedEmail}`);
      } catch (error) {
        if (error.response) {
          console.error("Error response:", error.response.data);
        } else {
          console.error("Axios error:", error.message);
        }
      }
    }
  };

  const nextPage = () => {
    router.push(`/passwordReset`);
  };

  const loginPage = () => {
    router.push(`../`);
  };

  return (
    <div className="justify-center items-center flex">
      <div className="space-y-6 justify-items-center items-center pt-8">
        <h1 className="text-2xl font-light">Reset password request</h1>
        <h1 className="text-lg font-light">
          Please enter your registered email.
        </h1>

        <div className="align-middle justify-items-center flex space-x-1">
          <input
            type="text"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            className="rounded-md text-black border-2 outline-green-950 p-2 focus:outline-0"
            placeholder="example@email.com"
          ></input>

          <button
            className="bg-lime-900 text-white text-sm hover:bg-lime-950 rounded-md p-3 min-w-[100px] "
            onClick={sendCodeClicked}
          >
            Send code
          </button>
        </div>

        <button
          className="underline hover:text-lime-800 font-light text-sm"
          onClick={nextPage}
        >
          Already have a code? Click Here.
        </button>

        <br />

        <button
          className="underline hover:text-lime-800 font-light justify-center text-sm"
          onClick={loginPage}
        >
          {"<< back to login"}
        </button>
      </div>
    </div>
  );
};

export default PasswordBox;
