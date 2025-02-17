"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const LoginBox = ({}) => {

    const [loginText, setLoginText] = useState("");
    const [passText, setPassText] = useState("");

    const router = useRouter;

    const loginClicked = () => {

    }

    const forgotPasswordClicked = () => {
        router.push('/forgotpassword');
    }

    return (
        <div className="justify-center items-center flex"
        >
            <div className="space-y-5 justify-items-center items-center pt-8" >
                <h1 className="text-2xl font-light">Login to your account</h1>

                <div className="">
                    <p className="text-xl font-light pt-2">Username</p>
                    <input
                    type="text"
                    value={loginText}
                    onChange={(e) => setLoginText(e.target.value)}
                    className="rounded-md text-black border-2 outline-green-950 p-2 focus:outline-0"
                    placeholder="enter your username">
                    </input>
                </div>

                <div>
                <p className="text-xl font-light">Password</p>
                <input
                type="text"
                value={passText}
                onChange={(e) => setPassText(e.target.value)}
                className="rounded-md text-black border-2 outline-green-950 p-2 focus:outline-0"
                placeholder="enter your password">
                </input>
                </div>

                <div className="align-middle justify-items-center">
                <button
                className="bg-lime-950 text-white hover:bg-lime-900 rounded-md p-2 min-w-[100px] "
                onClicked={loginClicked}
                >
                    Login
                </button>
                </div>

                <br/>

                <p onClick={forgotPasswordClicked} className="underline text-l font-light">Forgot Password?</p>
                
            </div>



        </div>
    );
};

export default LoginBox;