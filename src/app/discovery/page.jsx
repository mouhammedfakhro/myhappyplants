"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar"
import CategoryItem from "../components/CategoryItem"

const DiscoveryPage = ({}) => {

    const [searchText, setSearchText] = useState("");

    const router = useRouter();

    return (
        <div className="max-w-screen min-w-screen
            max-h-screen min-h-screen flex">

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
                    
                    {/*title + recommendation button */}
                    <table className="min-w-full">
                        <tbody>
                            <tr>
                                <td>
                                    <p className="text-2xl">Discovery</p>
                                </td>
                                <td>
                                    <button
                                    className="text-white text-sm rounded-md p-3 pl-4 pr-4 float-right
                                    hover:bg-purple-950 bg-lime-950 "
                                    >
                                        Get Plant Recommendations
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/*divider line*/}
                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    {/*search input box with icon*/}
                    <div className="min-w-full flex rounded-2xl p-1 space-x-2" style={{ background: '#3A5A40' }}>

                        <img className="p-2 w-[4%]" src="https://i.ibb.co/PGs8RjF4/discovery.png"/>

                        <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="rounded-2xl text-white w-full focus:outline-0 pl-3"
                        style={{ background: '#43694a' }}
                        placeholder="search">
                        </input>

                    </div>

                    <br/>

                    {/*the 10 pre-selected categories*/}
                    <div className="flex space-x-2">
                        <CategoryItem
                            imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Category 1"
                            categoryID="3"                        
                        />
                        <CategoryItem
                            imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Category 2"
                            categoryID="3"                        
                        />
                    </div>
                    <div className="flex space-x-2">
                        <CategoryItem
                            imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Category 3"
                            categoryID="3"                        
                        />
                        <CategoryItem
                            imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Category 4"
                            categoryID="3"                        
                        />
                    </div>
                    <div className="flex space-x-2">
                        <CategoryItem
                            imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Category 5"
                            categoryID="3"                        
                        />
                        <CategoryItem
                            imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Category 6"
                            categoryID="3"                        
                        />
                    </div>
                    <div className="flex space-x-2">
                        <CategoryItem
                            imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Category 7"
                            categoryID="3"                        
                        />
                        <CategoryItem
                            imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Category 8"
                            categoryID="3"                        
                        />
                    </div>
                    <div className="flex space-x-2">
                        <CategoryItem
                            imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Category 9"
                            categoryID="3"                        
                        />
                        <CategoryItem
                            imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Category 10"
                            categoryID="3"                        
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DiscoveryPage;