"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const VerifyAccount = ({}) => {

    const [emailText, setEmailText] = useState("");
    
    const router = useRouter();
    const verifyClicked = () => {
        router.push(`../?content=${"successVerify"}`);
    }
    const loginPage = () => {
        router.push(`../?content=${"login"}`);
    }

    return (
        <div className="justify-center items-center flex"
        >
            <div className="space-y-3 justify-items-center items-center pt-8" >
                <h1 className="text-lg font-light">A verification code has been sent to your email.</h1>
                <h1 className="text-md font-light">Please verify your account to be able to login.</h1>

                <div className="align-middle justify-items-center flex space-x-1">
                    <input
                    type="text"
                    value={emailText}
                    onChange={(e) => setEmailText(e.target.value)}
                    className="rounded-md text-black border-2 outline-green-950 p-2 focus:outline-0"
                    placeholder="Verification Code">
                    </input>

                    <button
                    className="bg-lime-900 text-white text-sm hover:bg-lime-950 rounded-md p-3 min-w-[100px] "
                    onClick={verifyClicked}
                    >
                        Verify
                    </button>

                </div>

                <br/>
                
                <button
                className="underline hover:text-lime-800 font-light"
                onClick={loginPage}
                >
                    {"<< back to login"}
                </button>
            </div>

        </div>
    );
};

export default VerifyAccount;