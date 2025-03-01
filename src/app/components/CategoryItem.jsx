"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const CategoryItem = ({
    imageLink,
    name,
    displayName,
    categoryID
}) => {

    const router = useRouter();

    const categoryClicked = () => {
        router.push(`../category?categoryName=${name}&displayName=${displayName}`);
    }

    return (
        <button className="p-2 w-[100%] overflow-hidden rounded-3xl bg-gray-200 flex space-x-5
        hover:bg-gray-300" onClick={categoryClicked}>
            
            <img src={imageLink}
            className="w-[30%] aspect-square object-cover rounded-2xl">
            </img>

            <div className="justify-items-start">
                <p className="text-2xl">{displayName}</p>
            </div>

        </button>
    );
};

export default CategoryItem;