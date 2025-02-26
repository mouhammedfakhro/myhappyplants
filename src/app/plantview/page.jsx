"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import PlantViewPlantInfo from "../components/PlantViewPlantInfo";

const imgLink =
  "https://images.pexels.com/photos/4623043/pexels-photo-4623043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const PlantView = ({}) => {

  //const params = useSearchParams();
  //const plantID = params.get("plantID");

  // temporary data - hämta från databasen
  const thisname = "Pelle Pion";
  const thiscommonName = "Peony";
  const thisscientificName = "Paeonia Officinalis";
  const thisfamilyName = "Paeoniaceae";
  const thistags = "#peony #fave";
  const thislastWatered = "yyyy/mm/dd";
  const thistoBeWatered = "yyyy/mm/dd";
  const thisWateringPrefence = "Every 3 days";
  const thisSunlightPreference = "Medium";
  const thisMoreInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque est, dapibus eu fermentum at, malesuada sit amet risus. Pellentesque quis massa quis purus cursus tempus dignissim non sem. Sed viverra pharetra sapien, id sollicitudin justo. Suspendisse potenti. Integer in suscipit mi, eget fringilla erat. Nulla facilisi. Nullam posuere, velit a iaculis mollis, orci eros bibendum orci, ut egestas turpis ipsum a urna. Morbi rutrum, ipsum quis finibus feugiat, quam eros tristique nisi, ac posuere quam diam ac lacus. In finibus ipsum in gravida pellentesque. Nulla malesuada aliquam enim at tincidunt. Quisque quam mauris, tincidunt vel rhoncus in, feugiat id arcu. Praesent at vulputate nibh. Ut tempor eu est id suscipit. In congue tellus nec nisi laoreet dapibus. Sed ut rutrum urna.";

  const router = useRouter();

  const returnClicked = () => {
    router.push("/library");
  };

  const deletePlant = () => {
    // skickar API delete request
  };

  return (
    <div
      className="max-w-screen min-w-screen
        max-h-screen min-h-screen flex"
    >
      <div className="w-[7%] min-h-full" style={{ background: "#3A5A40" }}>
        <Navbar />
      </div>

      <div
        className="w-full min-h-full bg-gray-100 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <table className="min-w-full">
          <tbody>
            <tr>
              <td>
                <button
                  className="text-2xl hover:text-lime-800"
                  onClick={returnClicked}
                >
                  {" "}
                  {"<< Return"}{" "}
                </button>
              </td>
              <td>
                <button
                  className="text-white text-sm rounded-md p-3 pl-4 pr-4 float-right"
                  style={{ background: "#3A5A40" }}
                  onClick={deletePlant}
                >
                  Delete Plant
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div>
          <PlantViewPlantInfo
            imageLink={imgLink}
            plantName={thisname}
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
