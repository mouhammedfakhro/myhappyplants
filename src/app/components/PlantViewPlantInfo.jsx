"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";


const LibraryItem = ({
    imageLink,
    plantName,
    commonName,
    scientificName,
    familyName,
    tags,
    water
}) => {
    const router = useRouter();

    const viewClicked = () => {
        router.push('/plantview'); 
    }

    return (
        <div className="p-2 w-[80%] overflow-hidden rounded-3xl bg-gray-200 flex space-x-5 h-[70%]">
            
            <img src={imageLink}
            className="w-[25%] aspect-square object-cover rounded-2xl">
            </img>

            <div className="justify-items-start p-3 w-1/2">
                <p className="text-3xl p-2"  style={{ color: '#3A5A40' }}>{plantName}</p>
                <p className="text-md p-2" style={{ color: '#3A5A40' }}>Common name: <span style={{ color: '#A3B18A' }}>{commonName}</span></p>
                <p className="text-md p-2" style={{ color: '#3A5A40' }}>Scientific name: <span style={{ color: '#A3B18A' }}>{scientificName}</span></p>
                <p className="text-md p-2" style={{ color: '#3A5A40' }}>Family name: <span style={{ color: '#A3B18A' }}>{familyName}</span></p>
                <p className="text-md p-2" style={{ color: '#3A5A40' }}>Water: <span style={{ color: '#A3B18A' }}>{water}</span></p>
            </div>
            <div className="justify-items-end p-3 w-1/2">
                <div className="p-5 w-[18%] h-[3vh] space-y-3 rounded-xl flex items-center justify-center" style={{ background: '#3A5A40' }}>
                    <button className="text-center" style={{ color: '#FFFFFF' }}>Edit</button> 
                </div>
                <div className="h-[30vh]"></div>
                <div className="p-5 w-[55%] h-[3vh] space-y-3 rounded-xl flex items-center justify-center" style={{ background: '#3A5A40' }}>
                    <button className="text-center" style={{ color: '#FFFFFF' }}>More Information</button> 
                </div>
            </div>

        </div>
    );
};

export default LibraryItem;