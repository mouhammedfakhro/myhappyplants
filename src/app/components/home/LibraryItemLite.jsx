"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const LibraryItemLite = ({
    imageLink,
    plantName,
    scientificName,
    familyName,
    plantID
    }) => {

    const plantClicked = (plantID) => {   

    }

    return (
        <button className="p-2 w-[100%] overflow-hidden rounded-3xl bg-gray-200 flex space-x-5
        hover:bg-gray-300"
        onClick={plantClicked}>
            
            <img src={imageLink}
            className="w-[25%] aspect-square object-cover rounded-2xl">
            </img>

            <div className="justify-items-start">
                <p className="text-xl">{plantName}</p>
                <p className="text-md">{scientificName}</p>
                <p className="text-sm">{familyName}</p>

            </div>

        </button>
    );
};

export default LibraryItemLite;