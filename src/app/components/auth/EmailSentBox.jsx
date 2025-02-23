"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const EmailSentbox = ({ email }) => {

    const [code, setCode] = useState("");
    const [pass, setPass] = useState("");
    const [confPass, setConfPass] = useState("");

    const router = useRouter();

    const changePassword = () => {
        if (!code || !pass || !confPass) {
            alert("Please fill in all of the fields.");
        } else {
            // API request for password reset
                // if successful:
                router.push(`/passwordReset?content=${"successReset"}`);
                // else: show error
        }
    }

    const loginPage = () => {
        router.push(`../`);
    }

    return (
        <div className="justify-center items-center flex">
            <div className="space-y-2 justify-items-center items-center" >

                <div className="space-y-1 justify-items-center items-center">
                    <h1 className="text-md font-light"  style={{ color: '#344E41' }}> If there is an account registered with that email, a password reset code has been sent to the inbox.</h1>
                </div>

                <div className="">
                    <p className="text-md font-light"  style={{ color: '#344E41' }}>Code</p>
                    <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="rounded-sm text-black border-2 outline-green-950 p-2 focus:outline-0"
                    placeholder="enter your code">
                    </input>
                </div>

                <div className="">
                    <p className="text-md font-light"  style={{ color: '#344E41' }}>New password</p>
                    <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className="rounded-sm text-black border-2 outline-green-950 p-2 focus:outline-0"
                    placeholder="enter new password">
                    </input>
                </div>

                <div className="pb-2">
                    <p className="text-md font-light"  style={{ color: '#344E41' }}>Confirm new password</p>
                    <input
                    type="password"
                    value={confPass}
                    onChange={(e) => setConfPass(e.target.value)}
                    className="rounded-sm text-black border-2 outline-green-950 p-2 focus:outline-0"
                    placeholder="confirm new password">
                    </input>
                </div>

                <button
                className="bg-lime-900 text-white text-sm hover:bg-lime-950 rounded-md p-3 min-w-[100px]"
                onClick={changePassword}
                >
                    Change Password
                </button>

                <div className="space-y-1 justify-items-center items-center">
                    <p className="text-sm font-light pt-2"  style={{ color: '#344E41' }} >Haven't received an email?</p>
                    
                    <p className="text-sm font-light text-red-800">
                        *please wait for 5 minutes, and check the spam folder
                    </p> 
                </div>

                <br/>

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