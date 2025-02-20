"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar"
import DiscoveryItemLight from "../components/DiscoveryItemLight";
import DiscoverySearchBar from "../components/DiscoverySearchBar";
import DiscoveryPlantRecommendation from "../components/DiscoveryPlantRecommendation";

const DiscoveryPage = ({}) => {
    const router = useRouter();

    return (
        <div className="max-w-screen min-w-screen
        max-h-screen min-h-screen flex">

            <div className="w-[7%] min-h-full bg-lime-950">
                <Navbar/>
            </div>

            <div className="w-[93%] min-h-full bg-gray-100 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

                <div className="w-[85%]">
                
                <div className="w-full h-[4vh]  flex flex-row">
                        <p className="text-2xl">Discovery</p>
                        <div className="ml-auto">
                            <DiscoveryPlantRecommendation />
                        </div>
                    </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>


                    <div className="space-y-3 mb-3 h-[5vh]">
                    <DiscoverySearchBar/>
                    </div>   
                    <div className="flex mb-4 items-center">
            
                        <div className="w-1/2 h-lvh items-center space-y-3">
                       
                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>
                        
                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>
                       
                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>

                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>
                        
                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>
                        
                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>
                        
                        </div>

                        <div class="w-1/2 h-lvh space-y-3">
                        
                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>
                        
                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>
                        
                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>
                        
                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>
                        
                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>
                        
                        <DiscoveryItemLight className="self-center"
                        imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        commonName="Hortensia"
                        scientificName="Hydrangea"
                        familyName="Hydrangeaceae"
                        category="Indoor plant, Flower"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoveryPage;