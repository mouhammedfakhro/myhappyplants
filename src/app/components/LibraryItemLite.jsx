"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const LibraryItemLite = ({}) => {

    const plantClicked = (plantID) => {   

    }

    return (
        <button className="p-2 w-[100%] overflow-hidden rounded-3xl bg-gray-200 flex space-x-5
        hover:bg-gray-300"
        onClick={plantClicked}>
            
            <img src="https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-[25%] aspect-square object-cover rounded-2xl">
            </img>

            <div className="justify-items-start">
                <p className="text-xl">Plant Name</p>
                <p className="text-md">Scientific Name</p>
                <p className="text-sm">Family Name</p>

            </div>

        </button>
    );
};

export default LibraryItemLite;