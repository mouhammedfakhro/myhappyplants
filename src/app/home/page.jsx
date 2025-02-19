"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";
import LibraryItemLite from "../components/LibraryItemLite";
import ReminderBox from "../components/ReminderBox"
import Navbar from "../components/Navbar"


const LoggedinHome = ({}) => {
    const router = useRouter();
    
    return (
        <div className="max-w-screen min-w-screen
        max-h-screen min-h-screen flex">

            <div className="w-[7%] min-h-full bg-lime-950">
                <Navbar/>
            </div>

            <div className="w-[63%] min-h-full bg-gray-100 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

                <p className="text-2xl">Home</p>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <p>Library Overview</p>

                <div className="space-y-3">
                    <div></div>
                    <LibraryItemLite
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        plantName="Olof Palme"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                        <LibraryItemLite
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        plantName="Olof Palme"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                        <LibraryItemLite
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        plantName="Olof Palme"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                        <LibraryItemLite
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        plantName="Olof Palme"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                        <LibraryItemLite
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        plantName="Olof Palme"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                        <LibraryItemLite
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        plantName="Olof Palme"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                        <LibraryItemLite
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        plantName="Olof Palme"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                        
                </div>

            </div>

            <div className="w-[30%] min-h-full bg-lime-950 p-5 pt-[3%] overflow-y-scroll
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

                <div></div>
                <div className="space-y-2 space-x-2 text-white">
                    <div></div>
                    <p>Reminders</p>
                    <ReminderBox
                        date="2025-02-19"
                        message="Water your Monstera."/>
                    <ReminderBox
                        date="2025-02-06"
                        message="Water your Cactus."/>
                        <ReminderBox
                        date="2025-02-19"
                        message="Water your Monstera."/>
                    <ReminderBox
                        date="2025-02-06"
                        message="Water your Cactus."/>
                    <ReminderBox
                        date="2025-02-19"
                        message="Water your Monstera."/>
                    <ReminderBox
                        date="2025-02-06"
                        message="Water your Cactus."/>
                        <ReminderBox
                        date="2025-02-19"
                        message="Water your Monstera."/>
                    <ReminderBox
                        date="2025-02-06"
                        message="Water your Cactus."/>
                    <ReminderBox
                        date="2025-02-19"
                        message="Water your Monstera."/>
                    <ReminderBox
                        date="2025-02-06"
                        message="Water your Cactus."/>
                        <ReminderBox
                        date="2025-02-19"
                        message="Water your Monstera."/>
                    <ReminderBox
                        date="2025-02-06"
                        message="Water your Cactus."/>
                </div>

            </div>

        </div>
    );
};

export default LoggedinHome;