"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PlantViewPlantInfo = ({
  imageLink,
  plantName,
  commonName,
  scientificName,
  familyName,
  tags,
  lastWatered,
  toBeWatered,
  wateringPreference,
  sunlightPreference,
  moreInfo
}) => {
  const router = useRouter();

  const editClicked = () => {
    console.log("edit plant!!!");
  };

  const waterPlant = () => {
    console.log("plant got watered!!!");  };

  return (

    <div className="p-2 w-[80%] overflow-hidden rounded-3xl bg-gray-200 flex flex-col space-y-5 h-auto">
        <div className="flex w-full space-x-5">
            <img src={imageLink} alt="plant image"className="w-[25%] aspect-square object-cover rounded-2xl"/>

        <div className="flex-1 p-3 bg-gray-200">
            <div className="flex items-end p-3">
            <div>
                    <label for="plantName" class="block mb-2 text-sm font-medium " style={{ color: '#3A5A40' }}></label>
                    <input type="text" id="plantName" class=" text-xl text-white rounded-lg block w-[100%] p-2 placeholder-white" style={{ background: "#A3B18A" }} placeholder={plantName}/>
                </div>
                <div className="p-5 ml-8 mr--8 w-[25%] h-[3vh] space-y-3 rounded-xl flex items-center justify-center" style={{ background: "#3A5A40" }}>
                    <button className="text-center text-white" onClick={editClicked}>Edit</button>
                </div>
            </div>
            
            
            <p className="text-md p-2" style={{ color: '#3A5A40' }}>Common name: <span style={{ color: '#A3B18A' }}>{commonName}</span></p>
            <p className="text-md p-2" style={{ color: '#3A5A40' }}>Scientific name: <span style={{ color: '#A3B18A' }}>{scientificName}</span></p>
            <p className="text-md p-2" style={{ color: '#3A5A40' }}>Family name: <span style={{ color: '#A3B18A' }}>{familyName}</span></p>
            <div className="flex items-end p-3">
                <div>
                    <label for="tags" class="block mb-2 text-sm font-medium " style={{ color: '#3A5A40' }}></label>
                    <input type="text" id="tags" class=" text-xl text-white rounded-lg block w-[100%] p-2 placeholder-white" style={{ background: "#A3B18A" }} placeholder={tags}/>
                </div>
                <div className="p-5 ml-8 mr--8 w-[25%] h-[3vh] space-y-3 rounded-xl flex items-center justify-center" style={{ background: "#3A5A40" }}>
                    <button className="text-center text-white" onClick={editClicked}>Edit</button>
                </div>
                </div>
        </div>

        <div class="inline-block h-[400px] min-h-[1em] w-[1px] self-stretch bg-gray-700 mt-6"></div>

        <div className="flex flex-col justify-between p-3 w-1/2 space-y-5 bg-gray-200">

            <p className="text-md p-2" style={{ color: '#3A5A40' }}>Last Watered: <span style={{ color: '#A3B18A' }}>{lastWatered}</span></p>
            <p className="text-md p-2" style={{ color: '#3A5A40' }}>To be watered: <span style={{ color: '#A3B18A' }}>{toBeWatered}</span></p>

            <div className="flex items-end p-3">
            <div className="p-5 w-[32%] h-[3vh] space-y-3 rounded-xl flex items-center justify-center" style={{ background: "#3A5A40" }}>
                <button className="text-center text-white" onClick={editClicked}>&lt;&lt; date input &gt;&gt;</button>
            </div>

            <div className="p-5 w-[23%] h-[3vh] ml-8 space-y-3 rounded-xl flex items-center justify-center" style={{ background: "#3A5A40" }}>
                <button className="text-center text-white" onClick={waterPlant}>Water Plant</button>
            </div>
            </div>

            <p className="text-2xl p-2" style={{ color: '#3A5A40' }}>Preferences</p>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 mr-8 w-[500px]"></hr>

            <p className="text-md p-2" style={{ color: '#3A5A40' }}>Watering: <span style={{ color: '#A3B18A' }}>{wateringPreference}</span></p>
            <p className="text-md p-2" style={{ color: '#3A5A40' }}>Sunlight: <span style={{ color: '#A3B18A' }}>{sunlightPreference}</span></p>
        </div>
    </div>

        <div className="p-3 w-full">
            <p className="text-3xl p-2" style={{ color: '#3A5A40' }}>More information</p>
            <p className="text-md p-2" style={{ color: '#3A5A40' }}>{moreInfo}</p>
        </div>
    </div>
  );
};

export default PlantViewPlantInfo;