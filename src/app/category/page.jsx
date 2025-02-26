"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import CatalogItem from "../components/CatalogItem"
import { useSearchParams } from "next/navigation";

const category = ({}) => {

    const router = useRouter();

    const params = useSearchParams();
    const categoryName = params.get("categoryName");

    //TODO: hämta category items som ligger i kategorin

    const returnClicked = () => {
        router.push("/discovery");
    }

    return (
        <div className="max-w-screen min-w-screen
            max-h-screen min-h-screen flex font-light">

            <div className="w-[7%] min-h-full bg-lime-950">
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

                    <br/>

                    {/*context text*/}
                    <p>Category: {categoryName} </p>

                    <br/>

                    {/*the search result items*/}
                    

                </div>
            </div>
        </div>
    );
};

export default category;