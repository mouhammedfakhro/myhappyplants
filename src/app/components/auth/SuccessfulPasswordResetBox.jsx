"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const SuccessfulPasswordResetBox = ({}) => {
    
    const router = useRouter();

    const loginPage = () => {
        router.push(`../?content=${"login"}`);
    }

    return (
        <div className="justify-center items-center flex"
        >
            <div className="space-y-6 justify-items-center items-center pt-8" >
                <h1 className="text-lg font-light">Your password has been reset successfully!</h1>

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

export default SuccessfulPasswordResetBox;