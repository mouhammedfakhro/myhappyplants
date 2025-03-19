// Authors: Akmal Safi, Olivia Svensson, Rana Noorzadeh, Mouhammed Fakhro

"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import PlantViewPlantInfo from "../components/PlantViewPlantInfo";
import auth from "../../services/auth";
import axios from "axios";
import { getCookie } from "cookies-next";
import { TOKEN_KEY } from "@/constants";

const PlantView = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PlantViewContent />
    </Suspense>
  );
};

const PlantViewContent = () => {
  const router = useRouter();
  const params = useSearchParams();
  const plantId = params.get("plantID");
  const returnPage = params.get("return");

  const user = auth.getCurrentUser();
  const plant = user?.plants?.find((p) => p.id === plantId) || {};

  const [plantDetails, setPlantDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlantDetails() {
      try {
        const response = await axios.get(
          `https://perenual.com/api/v2/species/details/${plant.catalogID}?key=${process.env.NEXT_PUBLIC_PERENUAL_API_KEY}`
        );
        const data = response.data;
        setPlantDetails({
          commonName: data.common_name,
          scientificName: data.scientific_name,
          familyName: data.family,
          wateringPreference: data.watering || "Not specified",
          sunlightPreference: data.sunlight || "Not specified",
          moreInfo: data.description || "No additional information available",
        });
      } catch (error) {
        console.error("Error fetching plant details:", error);
      } finally {
        setLoading(false);
      }
    }

    if (plant.catalogID) {
      fetchPlantDetails();
    }
  }, [plant.catalogID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const thisname = plant.nickname || "Unknown Plant";
  const thiscommonName = plantDetails.commonName || "___";
  const thisscientificName = plantDetails.scientificName || "___";
  const thisfamilyName = plantDetails.familyName || "___";
  const thistags = plant.tags;
  const thislastWatered = plant.lastWatered;
  const thistoBeWatered = plant.toBeWatered;
  const thisWateringPreference = plantDetails.wateringPreference || 5;
  const thisSunlightPreference = plantDetails.sunlightPreference || "___";
  const thisMoreInfo = plantDetails.moreInfo || "___";
  const imgLink = plant.imageUrl;

  const tagsFormatted =
    plant.tags && plant.tags.length > 0
      ? plant.tags.map((tag) => `#${tag.tagName}`).join(" ")
      : "";

  const returnClicked = () => {
    router.push(`/${returnPage}`);
  };

  async function deletePlant() {
    const userName = user?.name;
    alert("Deleting plant of user: " + userName + ", plantId: " + plantId);

    try {
      const token = getCookie(TOKEN_KEY);
      if (!token) {
        alert("You are not authenticated. Please log in again.");
        return;
      }
      const response = await axios.delete("/api/me/plants", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: { userName, plantId },
      });

      if (response.status === 200) {
        alert("Plant deleted successfully.");
        returnClicked();
      }
    } catch (error) {
      console.error("Error deleting Plant:", error);
      alert("Failed to delete Plant. Please try again later.");
    }
  }

  return (
    <div className="max-w-screen min-w-screen max-h-screen min-h-screen flex">
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
            tags={tagsFormatted}
            lastWatered={thislastWatered}
            toBeWatered={thistoBeWatered}
            wateringPreference={thisWateringPreference}
            sunlightPreference={thisSunlightPreference}
            moreInfo={thisMoreInfo}
            plantId={plantId}
          />
        </div>
      </div>
    </div>
  );
};

export default PlantView;
