"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const SignUpBox = ({}) => {

    const [loginText, setLoginText] = useState("");
    const [passText, setPassText] = useState("");

    const router = useRouter;

    const signUpClicked = () => {

    }

    const loginPage = () => {
        router.push('/loginPage');
    }

    return (
        <div className="justify-center items-center flex"
        >
            <div className="space-y-5 justify-items-center items-center pt-8" >
                <h1 className="text-2xl font-light"  style={{ color: '#344E41' }}>Create account</h1>

                <div className="">
                    <p className="text-xl font-light pt-2"  style={{ color: '#344E41' }}>Username</p>
                    <input
                    type="text"
                    value={loginText}
                    onChange={(e) => setLoginText(e.target.value)}
                    className="rounded-md text-black border-2 outline-green-950 p-2 focus:outline-0"
                    placeholder="enter a username">
                    </input>
                </div>

                <div>
                <p className="text-xl font-light"  style={{ color: '#344E41' }}>Password</p>
                <input
                type="text"
                value={passText}
                onChange={(e) => setPassText(e.target.value)}
                className="rounded-md text-black border-2 outline-green-950 p-2 focus:outline-0"
                placeholder="enter a password">
                </input>
                <p className="text-sm font-light text-red-800">
                    *password must be min 8 chars,
                    <br /> 
                    have min one special char .,*/, 
                    <br />
                    and min one uppercase char
                    </p> 
                </div>

                <div className="align-middle justify-items-center">
                <button
                className="bg-lime-950 text-white hover:bg-lime-900 rounded-md p-2 min-w-[100px] "
                onClicked={signUpClicked}
                >
                    Sign up
                </button>
                </div>

                <br/>

                <p onClick={loginPage} className="underline text-l font-light"  style={{ color: '#344E41' }}>Back to login</p>
                
            </div>



        </div>
    );
};

export default SignUpBox;