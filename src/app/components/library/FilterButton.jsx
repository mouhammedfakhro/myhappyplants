"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const FilterButton = ({
    tagName,
    tagID
}) => {
    const router = useRouter();

    const tagClicked = (filterID) => {
        router.push(`../library/tag?filter=${tagName}`);    }

    return (
        <button className="text-2xl font-bold text-purple-800 hover:text-purple-950 space-x-5"
        onClick={tagClicked}>
            #{tagName}
        </button>
    );
};

export default FilterButton;