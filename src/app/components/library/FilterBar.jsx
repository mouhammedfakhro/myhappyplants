"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const FilterBar = ({}) => {

    const filterClicked = (filterID) => {
        
    }

    return (
        <div className="bg-gray-200 space-x-5">
            <p className="text-2xl justify-self-center">Filter</p>
            <hr className="h-px my-5 w-full bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
    );
};

export default FilterBar;