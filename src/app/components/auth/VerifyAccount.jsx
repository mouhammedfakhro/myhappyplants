"use client";
import React, { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const VerifyAccount = ({}) => {
  const [verCode, setVerCode] = useState("");
  const searchParams = useSearchParams();
  const emailText = searchParams.get("email");

  const router = useRouter();
  const verifyClicked = () => {
    if (verCode) {
      // API CALL - verification code

      //router.push(`/verifyEmail?content=${"successVerify"}`);

      axios
        .post("api/auth/verifyaccount", { emailText, verCode })
        .then(() => {
          router.push(`/verifyEmail?content=${"successVerify"}`);
        })
        .catch((error) => {
          if (error.response) {
            console.error("Error response:", error.response.data);
          } else {
            console.error("Axios error:", error.message);
          }
        });

      // if sucessful:
      // else:
      //alert("Could not verify account.");
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
