"use client";
import "./globals.css";
import React from "react";
import LoginBox from "./components/LoginBox";
import ForgotPasswordBox from "./components/ForgotPasswordBox";
import SignUpBox from "./components/SignUpBox";
import EmailSentbox from "./components/EmailSentBox";
import { useSearchParams } from "next/navigation";


function LandingPage({}) {

    let sideImage = "https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    const params = useSearchParams();
    const content = params.get("content");

    const renderContent = () => {
        switch (content) {
            case "login":
                return <LoginBox/>;
            case "signup":
                return <SignUpBox/>;
            case "emailSent":
                return <EmailSentbox/>;
            case "forgotPassword":
                return <ForgotPasswordBox/>;
            default:
                return <LoginBox/>;
        }
    }

    return (
        <div className="flex w-screen min-h-screen bg-zinc-300">

            <img className="min-w-[45%] min-h-screen max-h-screen flex overflow-hidden object-cover" 
            src={sideImage}>
            </img>

            <div className="min-w-[55%] min-h-screen flex bg-zinc-300
            items-center justify-center">

                <div id="contentCard"
                className="bg-white rounded-3xl
                min-h-[80%] max-h-[80%]
                min-w-[70%] max-w-[70%]
                shadow-md shadow-black/20 p-10
                mt-[5%]">
                    {renderContent()}
                </div>

            </div>

        </div>
    );

}

export default LandingPage; 