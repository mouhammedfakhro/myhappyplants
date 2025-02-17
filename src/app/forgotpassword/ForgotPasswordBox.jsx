"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const LoginBox = ({}) => {

    const [loginText, setLoginText] = useState("");

    const router = useRouter;

    const emailClicked = () => {

    }

    const sendEmailClicked = () => {
        router.push('/emailSent');
    }

    const loginPage = () => {
        router.push('/loginPage');
    }


    return (
        <div className="justify-center items-center flex"
        >
            <div className="space-y-5 justify-items-center items-center pt-8" >
                <h1 className="text-2xl font-light">Send a link to restore password</h1>

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

                <div className="align-middle justify-items-center">
                <button
                className="bg-lime-950 text-white hover:bg-lime-900 rounded-md p-2 min-w-[100px] "
                onClicked={emailClicked}
                >
                    Send email
                </button>
                </div>

                <br/>


                <p onClick={loginPage} className="underline text-l font-light">Back to login</p>
            </div>



        </div>
    );
};

export default LoginBox;