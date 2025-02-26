"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";


const LibraryItem = ({
    imageLink,
    plantName,
    scientificName,
    familyName,
    tags,
    plantID
}) => {
    const router = useRouter();

    const viewClicked = () => {
        router.push('/plantview'); 
    }

    return (
        <button className="p-2 w-[100%] overflow-hidden rounded-3xl bg-gray-200 flex space-x-5
        hover:bg-gray-300" onClick={viewClicked}>
            
            <img src={imageLink}
            className="w-[25%] aspect-square object-cover rounded-2xl">
            </img>

            <div className="justify-items-start">
                <p className="text-xl"  style={{ color: "#3A5A40" }}>{plantName}</p>
                <p className="text-md"  style={{ color: "#3A5A40" }}>{scientificName}</p>
                <p className="text-sm"  style={{ color: "#3A5A40" }}>{familyName}</p>

                <div className="text-md text-purple-800 font-bold">{tags}</div>
            </div>

        </button>
    );
};

export default LibraryItem;