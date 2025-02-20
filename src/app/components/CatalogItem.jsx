"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const CatalogItem = ({
    imageLink,
    commonName,
    scientificName,
    familyName,
    category,
    catalogID
}) => {
    const viewClicked = () => {
        
    }

    return (
        <button className="p-2 w-5/6 overflow-hidden rounded-3xl bg-gray-200 flex space-x-5 align-center
        hover:bg-gray-300" onClick={viewClicked}>
            
            <img src={imageLink}
            className="w-[25%] aspect-square object-cover rounded-2xl">
            </img>

            <div className="justify-items-start">
                <p className="text-xl">{commonName}</p>
                <p className="text-md">{scientificName}</p>
                <p className="text-sm">{familyName}</p>
                <p className="text-sm">{category}</p>

            </div>

        </button>
    );
};

export default CatalogItem;