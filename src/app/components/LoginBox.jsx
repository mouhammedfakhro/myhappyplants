"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const LoginBox = ({}) => {

    const [loginText, setLoginText] = useState("");
    const [passText, setPassText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter(); 

    const loginClicked = () => {
        router.push('/home'); 
    }

    const forgotPasswordClicked = () => {
        router.push('/forgotpassword'); 
    }

    const signupClicked = () => {
        router.push('/signup'); 
    }

    return (
        <div className="justify-center items-center flex pt-6 text-sm min-w-full min-h-full overflow-hidden">
            <div className="space-y-4 justify-items-center items-center min-w-full h-full ">
                <p className="text-base">Login to your account</p>

                <div className="space-y-2 w-[90%]">
                    <div className="">
                        <p>Username</p>
                        <input
                        type="text"
                        value={loginText}
                        onChange={(e) => setLoginText(e.target.value)}
                        className="rounded-md text-black border-2 outline-green-950 p-2 focus:outline-0 w-full"
                        placeholder="">
                        </input>
                    </div>
                    <div>
                        <p>Password</p>
                        <input
                        type="password"
                        value={passText}
                        onChange={(e) => setPassText(e.target.value)}
                        className="rounded-md text-black border-2 outline-green-950 p-2 focus:outline-0 w-full"
                        placeholder="">
                        </input>
                    </div>
                </div>

                <div className="align-middle justify-items-center">
                    <button
                    className="bg-lime-900 text-white text-base hover:bg-lime-950 rounded-md p-2 min-w-[100px]"
                    onClick={loginClicked}
                    >
                        Login
                    </button>
                    </div>

                <p onClick={forgotPasswordClicked} className="underline hover:text-lime-800">Forgot Password?</p>

                <div className="flex bottom-0">Don't have an account? &nbsp;
                    <p className="underline hover:text-lime-800" onClick={signupClicked}> Sign up now!</p>
                </div>


                <br/>
                <div className="min-h-[10%]">
                    <p className="text-red-700">{errorMessage}</p>
                </div>
                
            </div>

        </div>
    );
};

export default LoginBox;