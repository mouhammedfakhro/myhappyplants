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
    const viewClicked = () => {
        
    }

    return (
        <button className="p-2 w-[100%] overflow-hidden rounded-3xl bg-gray-200 flex space-x-5
        hover:bg-gray-300" onClick={viewClicked}>
            
            <img src={imageLink}
            className="w-[25%] aspect-square object-cover rounded-2xl">
            </img>

            <div className="justify-items-start">
                <p className="text-xl">{plantName}</p>
                <p className="text-md">{scientificName}</p>
                <p className="text-sm">{familyName}</p>

                <div className="text-md text-purple-800 font-bold">{tags}</div>
            </div>

        </button>
    );
};

export default LibraryItem;