"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const EmailSentbox = ({}) => {

    const [loginText, setLoginText] = useState("");
    const [passText, setPassText] = useState("");

    const router = useRouter;
    const email = "userEmail";

    const signUpClicked = () => {

    }

    const loginPage = () => {
        router.push('/loginPage');
    }

    return (
        <div className="justify-center items-center flex"
        >
            <div className="space-y-5 justify-items-center items-center pt-8" >
                <h1 className="text-2xl font-light"  style={{ color: '#344E41' }}>An email has been sent to <span style={{ color: '#A3B18A' }}>{email}</span></h1>

               
                <div className="">
                <p className="text-xl font-light pt-2"  style={{ color: '#344E41' }} >Haven't received an email?</p>
                </div>
                <p className="text-sm font-light text-red-800">
                    *please wait for 5 minutes, and check the spam folder
                    </p> 
               

                <div className="align-middle justify-items-center">
                <button
                className="bg-lime-950 text-white hover:bg-lime-900 rounded-md p-2 min-w-[100px] "
                onClicked={signUpClicked}
                >
                    Send link again
                </button>
                </div>

                <br/>

                <p onClick={loginPage} className="underline text-l font-light"  style={{ color: '#344E41' }}>Back to login</p>
                
            </div>



        </div>
    );
};

export default EmailSentbox;