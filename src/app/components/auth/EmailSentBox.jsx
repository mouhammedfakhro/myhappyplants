"use client";
import React, { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const EmailSentbox = () => {
  const [code, setCode] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");

  const router = useRouter();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const changePassword = async () => {
    if (!code || !pass || !confPass) {
      alert("Please fill in all of the fields.");
      return;
    }

    if (pass !== confPass) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("/api/auth/passwordReset", {
        email,
        code,
        pass,
      });

      router.push(`/passwordReset?content=successReset`);
    } catch (error) {
      console.error(
        "Password reset error:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.error ||
          "Failed to reset password. Please try again."
      );
    }
  };

  const loginPage = () => {
    router.push(`../`);
  };

  return (
    <div className="justify-center items-center flex">
      <div className="space-y-2 justify-items-center items-center">
        <div className="space-y-1 justify-items-center items-center">
          <h1 className="text-md font-light" style={{ color: "#344E41" }}>
            {" "}
            If there is an account registered with that email, a password reset
            code has been sent to the inbox.
          </h1>
        </div>

        <div className="">
          <p className="text-md font-light" style={{ color: "#344E41" }}>
            Code
          </p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="rounded-sm text-black border-2 outline-green-950 p-2 focus:outline-0"
            placeholder="enter your code"
          ></input>
        </div>

        <div className="">
          <p className="text-md font-light" style={{ color: "#344E41" }}>
            New password
          </p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="rounded-sm text-black border-2 outline-green-950 p-2 focus:outline-0"
            placeholder="enter new password"
          ></input>
        </div>

        <div className="pb-2">
          <p className="text-md font-light" style={{ color: "#344E41" }}>
            Confirm new password
          </p>
          <input
            type="password"
            value={confPass}
            onChange={(e) => setConfPass(e.target.value)}
            className="rounded-sm text-black border-2 outline-green-950 p-2 focus:outline-0"
            placeholder="confirm new password"
          ></input>
        </div>

        <button
          className="text-white text-sm rounded-md p-3 min-w-[100px]"  style={{ background: "#3A5A40" }}
          onClick={changePassword}
        >
          Change Password
        </button>

        <div className="space-y-1 justify-items-center items-center">
          <p className="text-sm font-light pt-2" style={{ color: "#344E41" }}>
            Haven't received an email?
          </p>

          <p className="text-sm font-light text-red-800">
            *please wait for 5 minutes, and check the spam folder
          </p>
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

export default EmailSentbox;
