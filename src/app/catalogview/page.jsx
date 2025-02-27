"use client";
import React, { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";

const imgLink =
  "https://images.pexels.com/photos/4623043/pexels-photo-4623043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const CatalogView = ({}) => {

  const params = useSearchParams();
  const catalogID = params.get("catalogID");
  const returnPage = params.get("return");

  // temporary data - hämta från databasen
  const commonName = "Peony";
  const scientificName = "Paeonia Officinalis";
  const familyName = "Paeoniaceae";
  const wateringPrefence = "Every 3 days";
  const sunlightPreference = "Medium";
  const moreInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque est, dapibus eu fermentum at, malesuada sit amet risus. Pellentesque quis massa quis purus cursus tempus dignissim non sem. Sed viverra pharetra sapien, id sollicitudin justo. Suspendisse potenti. Integer in suscipit mi, eget fringilla erat. Nulla facilisi. Nullam posuere, velit a iaculis mollis, orci eros bibendum orci, ut egestas turpis ipsum a urna. Morbi rutrum, ipsum quis finibus feugiat, quam eros tristique nisi, ac posuere quam diam ac lacus. In finibus ipsum in gravida pellentesque. Nulla malesuada aliquam enim at tincidunt. Quisque quam mauris, tincidunt vel rhoncus in, feugiat id arcu. Praesent at vulputate nibh. Ut tempor eu est id suscipit. In congue tellus nec nisi laoreet dapibus. Sed ut rutrum urna.";

  const router = useRouter();

  const returnClicked = () => {
    router.push(`/${returnPage}`);
  };

  const deletePlant = () => {
    // skickar API delete request
  };

  const addToLibrary = () => {
    // lägg till växt med detta id i librray
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
                  onClick={addToLibrary}
                >
                  Add to My Library
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className="p-2 w-[100%] overflow-hidden rounded-3xl bg-gray-200 flex flex-col space-y-5 h-auto">
          {/*upper div - flexbox*/}
          <div className="flex w-full space-x-5">
            {/*plant image*/}
            <img
              src={imgLink}
              alt="plant image"
              className="w-[25%] aspect-square object-cover rounded-2xl"
            />

            {/*inner div containing plant info */}
            <div className="flex-1 p-3 bg-gray-200">
              {/*"different names of plant */}

              <p className="text-2xl p-2" style={{ color: "#3A5A40" }}>
                Information
              </p>
              <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 mr-8"></hr>

              <p className="text-md p-2" style={{ color: "#3A5A40" }}>
                Common name:{" "}
                <span style={{ color: "#A3B18A" }}>{commonName}</span>
              </p>
              <p className="text-md p-2" style={{ color: "#3A5A40" }}>
                Scientific name:{" "}
                <span style={{ color: "#A3B18A" }}>{scientificName}</span>
              </p>
              <p className="text-md p-2" style={{ color: "#3A5A40" }}>
                Family name:{" "}
                <span style={{ color: "#A3B18A" }}>{familyName}</span>
              </p>
            </div>

            <div className="inline-block h-[400px] min-h-[1em] w-[1px] self-stretch bg-gray-700 mt-6"></div>

            {/*water info box */}
            <div className="flex flex-col p-3 w-[40%] space-y-5 bg-gray-200">
              <p className="text-2xl p-2" style={{ color: "#3A5A40" }}>
                Preferences
              </p>
              <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 mr-8"></hr>

              <p className="text-md p-2" style={{ color: "#3A5A40" }}>
                Watering:{" "}
                <span style={{ color: "#A3B18A" }}>{wateringPrefence}</span>
              </p>
              <p className="text-md p-2" style={{ color: "#3A5A40" }}>
                Sunlight:{" "}
                <span style={{ color: "#A3B18A" }}>{sunlightPreference}</span>
              </p>
            </div>
          </div>

          <div className="p-3 w-full">
            <p className="text-3xl p-2" style={{ color: "#3A5A40" }}>
              More information
            </p>
            <p className="text-md p-2" style={{ color: "#3A5A40" }}>
              {moreInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogView;
