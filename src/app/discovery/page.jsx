"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar"


const DiscoveryPage = ({}) => {
    const router = useRouter();

    return (
        <div className="max-w-screen min-w-screen
        max-h-screen min-h-screen flex">

            <div className="w-[7%] min-h-full bg-lime-950">
                <Navbar/>
            </div>

            <div className="w-[93%] min-h-full bg-gray-100 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

                <div className="w-[85%]">
                    <p className="text-2xl">Discovery</p>
                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>


                </div>
            </div>
        </div>
    );
};

export default DiscoveryPage;