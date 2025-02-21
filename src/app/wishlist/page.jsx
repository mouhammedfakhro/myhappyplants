"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";
import LibraryItem from "../components/WishlistItem";
import Navbar from "../components/Navbar"
import WishlistItem from "../components/WishlistItem";


const WishlistPage = ({}) => {
    const router = useRouter();

    
    return (
        <div className="max-w-screen min-w-screen
        max-h-screen min-h-screen flex font-light">

            <div className="w-[7%] min-h-full bg-lime-950">
                <Navbar/>
            </div>

            <div className="w-[93%] min-h-full bg-gray-100 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

                <p className="text-2xl">My Wishlist</p>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                <div className="space-y-3">
                    <div></div>
                    <WishlistItem
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                        <WishlistItem
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                        <WishlistItem
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                        <WishlistItem
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                        <WishlistItem
                        imageLink="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        scientificName="Monstera deliciosa"
                        familyName="Arceae"/>
                </div>

            </div>

        </div>
    );
};

export default WishlistPage;