"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const WishlistItem = ({
    imageLink,
    scientificName,
    familyName,
    catalogID
}) => {

    const plantClicked = () => {
        alert('plant clicked!');
    }

    const removeClicked = () => {
        alert('remove clicked!');
    }

    return (
        <div className="p-2 w-[80%] overflow-hidden rounded-3xl bg-gray-200 flex space-x-5">
            
            <img src={imageLink}
            className="w-[20%] aspect-square object-cover rounded-2xl">
            </img>

            <div className="justify-items-start space-y-1">
                <p className="text-md"  style={{ color: "#3A5A40" }}>{scientificName}</p>
                <p className="text-md"  style={{ color: "#3A5A40" }}>{familyName}</p>

                <button
                className="p-2 rounded-md text-white text-sm w-[100%]"  style={{ background: "#3A5A40" }}
                onClick={removeClicked}>
                    Remove item
                </button>

                <button
                className="p-2 rounded-md text-white text-sm w-[100%]"  style={{ background: "#3A5A40" }}
                onClick={plantClicked}>
                    Details
                </button>

            </div>

        </div>
    );
};

export default WishlistItem;