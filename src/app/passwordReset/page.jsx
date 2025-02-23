"use client";
import React, { Suspense } from "react";
import EmailSentbox from "../components/auth/EmailSentBox";
import SuccessfulPasswordResetBox from "../components/auth/SuccessfulPasswordResetBox"
import { useSearchParams } from "next/navigation";

function PageContent() {
    const params = useSearchParams();
    const content = params.get("content");

    const renderContent = () => {
        switch (content) {
            case "emailSent":
            case "newPass":
                return <EmailSentbox/>;
            case "successReset":
                return <SuccessfulPasswordResetBox/>;
            default:
                return <EmailSentbox/>;
        }
    };

    return renderContent();
}

function NewPasswordPage() {
    let sideImage = "https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    return (
        <div className="flex w-screen min-h-screen bg-zinc-300 font-light">
            <img className="min-w-[45%] min-h-screen max-h-screen flex overflow-hidden object-cover" 
            src={sideImage} alt="Background" />

            <div className="min-w-[55%] min-h-screen flex bg-zinc-300 items-center justify-center">
                <div id="contentCard"
                className="bg-white rounded-3xl
                min-h-[85%] max-h-[85%]
                min-w-[70%] max-w-[70%]
                shadow-md shadow-black/20 p-10 mt-[5%]">
                    
                    <Suspense fallback={<div>Loading...</div>}>
                        <PageContent />
                    </Suspense>

                </div>
            </div>
        </div>
    );
}

export default NewPasswordPage;
