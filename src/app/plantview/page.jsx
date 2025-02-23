"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar"
import PlantViewPlantInfo from "../components/PlantViewPlantInfo";
import PlantViewGallery from "../components/PlantViewPlantInfo";

const imgLink = "https://images.pexels.com/photos/4623043/pexels-photo-4623043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";


const PlantView = ({}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [thisname, setThisName] = useState("Pelle Pion");
    const [thiscommonName, setThisCommonName] = useState("Peony");
    const [thisscientificName, setThisScientificName] = useState("Paeonia Officinalis");
    const [thisfamilyName, setThisFamilyName] = useState("Paeoniaceae");
    const [thiswater, setThistWater] = useState("In 3 days");

    const router = useRouter();

    const returnClicked = () => {
        router.push('/library');
    }

    const editClicked = () => {
        setIsEditing(true);
    }

    const saveClicked = () => {
        setIsEditing(false);
    }

    const cancelClicked = () => {
        setIsEditing(false);
    }
    
    return (
        <div className="max-w-screen min-w-screen
        max-h-screen min-h-screen flex">

            <div className="w-[7%] min-h-full bg-lime-950">
                <Navbar/>
            </div>

            <div className="w-full min-h-full bg-gray-100 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

                <button className="text-2xl" onClick={returnClicked}>&lt;&lt;Return</button>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            
                <div>

                

                <PlantViewPlantInfo 
                    imageLink={imgLink}
                    plantName = {thisname}
                    commonName={thiscommonName}
                    scientificName={thisscientificName}
                    familyName={thisfamilyName}
                    water={thiswater}
                />
                </div>
                 
            </div>
        </div>
    );
};

export default PlantView;