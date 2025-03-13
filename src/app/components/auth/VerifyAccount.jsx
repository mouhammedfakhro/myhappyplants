"use client";
import React, { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const VerifyAccount = ({}) => {
  const [verCode, setVerCode] = useState("");
  const searchParams = useSearchParams();
  const emailText = searchParams.get("email");

  const router = useRouter();
  const verifyClicked = async () => {
    if (!emailText) {
      alert("No email found. Please try again.");
      return;
    }

    if (!verCode) {
      alert("Please enter the verification code.");
      return;
    }

    try {
      const response = await axios.post("/api/auth/verifyaccount", {
        emailText,
        verCode,
      });

      router.push(`/verifyEmail?content=successVerify`);
    } catch (error) {
      console.error(
        "Verification error:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.error || "Verification failed. Please try again."
      );
    }
  };

  const loginPage = () => {
    router.push(`../`);
  };

  return (
    <div className="justify-center items-center flex">
      <div className="space-y-3 justify-items-center items-center pt-8">
        <h1 className="text-lg font-light">
          A verification code has been sent to your email.
        </h1>
        <h1 className="text-md font-light">
          Please verify your account to be able to login.
        </h1>

        <div className="align-middle justify-items-center flex space-x-1">
          <input
            type="text"
            value={verCode}
            onChange={(e) => setVerCode(e.target.value)}
            className="rounded-md text-black border-2 outline-green-950 p-2 focus:outline-0"
            placeholder="Verification Code"
          ></input>

          <button
            className="bg-lime-900 text-white text-sm hover:bg-lime-950 rounded-md p-3 min-w-[100px] "
            onClick={verifyClicked}
          >
            Verify
          </button>
        </div>

        <br />

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

export default VerifyAccount;
