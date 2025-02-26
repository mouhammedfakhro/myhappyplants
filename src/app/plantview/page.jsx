"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar"
import PlantViewPlantInfo from "../components/PlantViewPlantInfo";
import PlantViewGallery from "../components/PlantViewPlantInfo";

const imgLink = "https://images.pexels.com/photos/4623043/pexels-photo-4623043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";


const PlantView = ({}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [thisname, setThisName] = useState("Pelle Pion");
    const [thiscommonName, setThisCommonName] = useState("Peony");
    const [thisscientificName, setThisScientificName] = useState("Paeonia Officinalis");
    const [thisfamilyName, setThisFamilyName] = useState("Paeoniaceae");
    const [thistags, setThisTags] = useState("#peony #fave");
    const [thislastWatered, setThisLastWatered] = useState("yyyy/mm/dd");
    const [thistoBeWatered, setThisToBeWatered] = useState("yyyy/mm/dd");
    const [thisWateringPrefence, setThisWateringPreference] = useState("Every 3 days");
    const [thisSunlightPreference, setThisSunlightPreference] = useState("Medium");
    const [thisMoreInfo, setThisMoreInfo] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque est, dapibus eu fermentum at, malesuada sit amet risus. Pellentesque quis massa quis purus cursus tempus dignissim non sem. Sed viverra pharetra sapien, id sollicitudin justo. Suspendisse potenti. Integer in suscipit mi, eget fringilla erat. Nulla facilisi. Nullam posuere, velit a iaculis mollis, orci eros bibendum orci, ut egestas turpis ipsum a urna. Morbi rutrum, ipsum quis finibus feugiat, quam eros tristique nisi, ac posuere quam diam ac lacus. In finibus ipsum in gravida pellentesque. Nulla malesuada aliquam enim at tincidunt. Quisque quam mauris, tincidunt vel rhoncus in, feugiat id arcu. Praesent at vulputate nibh. Ut tempor eu est id suscipit. In congue tellus nec nisi laoreet dapibus. Sed ut rutrum urna.");


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

    const deletePlant = () => {
        setDelete(true);
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

            <div className="flex items-center">
                <button className="text-2xl" onClick={returnClicked}>&lt;&lt; Return</button>
                <button className="p-5 ml-[55vw] w-[10%] h-[3vh] space-y-3 rounded-xl flex items-center justify-center text-white" onClick={deletePlant} style={{ background: "#3A5A40" }}>Water Plant
                </button>
            </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            
                <div>

                

                <PlantViewPlantInfo 
                    imageLink={imgLink}
                    plantName = {thisname}
                    commonName={thiscommonName}
                    scientificName={thisscientificName}
                    familyName={thisfamilyName}
                    tags={thistags}
                    lastWatered={thislastWatered}
                    toBeWatered={thistoBeWatered}
                    wateringPreference={thisWateringPrefence}
                    sunlightPreference={thisSunlightPreference}
                    moreInfo={thisMoreInfo}
                />
                </div>
                 
            </div>
        </div>
    );
};

export default PlantView;