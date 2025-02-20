"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const EmailSentbox = ({ email }) => {

    const router = useRouter();

    const sendLinkAgain = () => {
        alert("send link again clicked!");
    }

    const loginPage = () => {
        router.push(`../?content=${"login"}`);
    }

    return (
        <div className="justify-center items-center flex">
            <div className="space-y-6 justify-items-center items-center pt-8" >

                <div className="space-y-1 justify-items-center items-center">

                    <h1 className="text-xl font-light"  style={{ color: '#344E41' }}> A code has been sent to your email.</h1>
                    <h1 className="text-xl font-light" style={{ color: '#879472' }}> {email} </h1>

                </div>
               
                <div className="space-y-1 justify-items-center items-center">
                    <p className="text-md font-light pt-2"  style={{ color: '#344E41' }} >Haven't received an email?</p>
                    
                    <p className="text-md font-light text-red-800">
                        *please wait for 5 minutes, and check the spam folder
                    </p> 
                </div>
               
                <button
                className="bg-lime-950 text-white text-sm hover:bg-lime-900 rounded-md p-3 min-w-[100px] "
                onClick={sendLinkAgain}
                >
                    Send link again
                </button>

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

export default EmailSentbox;