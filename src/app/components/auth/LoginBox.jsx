"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import auth from '../../../services/auth';

const LoginBox = ({}) => {
  const [usernameText, setUsernameText] = useState("");
  const [passText, setPassText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  async function loginClicked() {
    if (!usernameText || !passText) {
      setErrorMessage("*Please fill in both username and password fields.");
    } else {
      try {
        await auth.login(usernameText, passText);
        router.push('/home');
      } catch (error) {
        console.log("Fel användarnamn eller lösenord.");
        setErrorMessage("Incorrect username and/or password. Please try again.");
      }
    }
  };

  const forgotPasswordClicked = () => {
    router.push("/passWordResetRequest");
  };

  const signupClicked = () => {
    console.log("asdfghjkl");
    router.push("/signup");
  };

  return (
    <div className="justify-center items-center flex pt-6 text-sm min-w-full min-h-full overflow-hidden">
      <div className="space-y-4 justify-items-center items-center min-w-full h-full ">
        <p className="text-base">Login to your account</p>

        <div className="space-y-2 w-[90%]">
          <div className="">
            <p>Username</p>
            <input
              type="text"
              value={usernameText}
              onChange={(e) => setUsernameText(e.target.value)}
              className="rounded-md text-black border-2 outline-green-950 p-2 focus:outline-0 w-full"
              placeholder=""
            ></input>
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              value={passText}
              onChange={(e) => setPassText(e.target.value)}
              className="rounded-md text-black border-2 outline-green-950 p-2 focus:outline-0 w-full"
              placeholder=""
            ></input>
          </div>
        </div>

        <div className="align-middle justify-items-center">
          <button
            className=" text-white text-base hover:bg-lime-950 rounded-md p-2 min-w-[100px]"  style={{ background: "#3A5A40" }}
            onClick={loginClicked}
          >
            Login
          </button>
        </div>

        <button
          onClick={forgotPasswordClicked}
          className="underline hover:text-lime-800 font-light"
        >
          Forgot Password?
        </button>

        <div className="flex bottom-0">
          Don't have an account? &nbsp;
          <button
            className="underline hover:text-lime-800 font-light"
            onClick={signupClicked}
          >
            {" "}
            Sign up now!
          </button>
        </div>

        <br />
        <div className="min-h-[10%]">
          <p className="text-red-600">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
