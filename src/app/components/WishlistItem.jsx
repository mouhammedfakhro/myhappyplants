"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const WishlistItem = ({}) => {

    const plantClicked = () => {
        alert('plant clicked!');
    }

    const removeClicked = () => {
        alert('remove clicked!');
    }

    return (
        <button className="p-2 w-[80%] overflow-hidden rounded-3xl bg-gray-200 flex space-x-5
        hover:bg-gray-300" onClick={plantClicked}>
            
            <img src="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-[20%] aspect-square object-cover rounded-2xl">
            </img>

            <div className="justify-items-start space-y-2 ">
                <p className="text-md">Scientific Name</p>
                <p className="text-sm">Family Name</p>


                <div
                className="p-2 bg-lime-900 hover:bg-lime-950 rounded-md text-white text-xs w-[100%]"
                onClick={removeClicked}>
                    Remove item
                </div>

            </div>

        </button>
    );
};

export default WishlistItem;