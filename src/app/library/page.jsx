"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";
import LibraryItem from "../components/library/LibraryItem";
import Navbar from "../components/Navbar"
import FilterButton from "../components/library/FilterButton"

const LibraryPage = ({}) => {
    const router = useRouter();

    // placeholder - real data is an array of plant items
    let testObject = {
        imageLink : "https://images.pexels.com/photos/30727074/pexels-photo-30727074/free-photo-of-vibrant-philodendron-verrucosum-in-white-pots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        plantName : "Olof Palme",
        scientificName:"Monstera deliciosa",
        familyName:"Arceae",
        tags:"#swizz #fav"
    }

    const renderPlants = () => {
        return <LibraryItem
            imageLink={testObject.imageLink}
            plantName={testObject.plantName}
            scientificName={testObject.scientificName}
            familyName={testObject.familyName}
            tags={testObject.tags}
        />;
    }

    const renderFilters = () => {
        return <div className="space-x-4">
            <FilterButton
                tagName="favs"
                tagID="1"/>
            <FilterButton
                tagName="tropical"
                tagID="2"/>
            <FilterButton
                tagName="cactus"
                tagID="3"/>
            <FilterButton
                tagName="palm variant"
                tagID="4"/>            
        </div>;
    }

    
    return (
        <div className="max-w-screen min-w-screen
        max-h-screen min-h-screen flex font-light">

            <div className="w-[7%] min-h-full bg-lime-950">
                <Navbar/>
            </div>

            <div className="w-[63%] min-h-full bg-gray-100 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

                <p className="text-2xl">My Library</p>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                <div className="space-y-3 overflow-x-">
                    <div></div>
                    <div>{renderPlants()}</div>
                </div>

            </div>

            <div className="w-[30%] min-h-full bg-gray-200 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="space-x-5 h-full">
                    
                <table className="min-w-full">
                        <tbody>
                            <tr>
                                <td>
                                    <p className="text-2xl">Filters</p>
                                </td>
                                <td>
                                    <button
                                    className="text-white text-sm rounded-md p-2 float-right
                                    hover:bg-lime-900 bg-lime-950 "
                                    >
                                        CLEAR
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    <div>{renderFilters()}</div>

                </div>
            </div>

        </div>
    );
};

export default LibraryPage;