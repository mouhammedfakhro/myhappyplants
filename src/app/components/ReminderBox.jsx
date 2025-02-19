"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const ReminderBox = ({}) => {

    const reminderClicked = () => {

    }

    const doneClicked = () => {

    }


    return (
        <div className="p-5 w-full rounded-2xl bg-gray-200 space-x-5 text-black flex"
        onClick={reminderClicked}>

            <div></div>
            <div className="w-[70%] justify-items-start">
                <p className="text-xs">2025-02-18</p>
                <p className="text-md">Water your Monstera.</p>
            </div>

            <button
            className="p-3 bg-lime-900 hover:bg-lime-950 rounded-md text-white text-xs w-[30%]"
            onClick={doneClicked}>
                Done
            </button>
        

        </div>
    );
};

export default ReminderBox;