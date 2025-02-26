"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import CatalogItem from "../components/CatalogItem"
import { useSearchParams } from "next/navigation";


const searchResult = ({}) => {

    const router = useRouter();

    const params = useSearchParams();
    const keyword = params.get("keyword");

    //TODO: hämta search items som matchar keyword

    const returnClicked = () => {
        router.push("/discovery");
    }

    return (
        <div className="max-w-screen min-w-screen
            max-h-screen min-h-screen flex font-light">

            <div className="w-[7%] min-h-full"  style={{ background: "#3A5A40" }}>
                <Navbar/>
            </div>

            <div className="w-[93%] min-h-full bg-gray-100 text-lg p-14
            overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

                <div className="w-[95%] space-y-2 space-x-2">
                    
                    {/*return */}
                    

                    <table className="min-w-full">
                        <tbody>
                            <tr>
                                <td>
                                <button className="text-2xl hover:text-lime-800" onClick={returnClicked}> {"<< Return"} </button>
                                </td>
                                <td>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/*divider line*/}
                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    {/*search input box with icon*/}
                    <SearchBar/>

                    <br/>

                    {/*context text*/}
                    <p>Showing results for "{keyword}" </p>

                    <br/>

                    {/*the search result items*/}
                    

                </div>
            </div>
        </div>
    );
};

export default searchResult;