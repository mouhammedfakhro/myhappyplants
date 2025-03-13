"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
//import { getCookie } from "cookies-next";
//import { TOKEN_KEY } from "@/constants";
//import auth from "../../services/auth";

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
  moreInfo,
  plantId,
  test
}) => {
  if (!test) {
    const user = auth.getCurrentUser();
    const userName = user?.name;
  }

  const [nameInput, setNameInput] = useState(plantName);
  const [tagInput, setTagInput] = useState(tags);
  const [selectedDate, setSelectedDate] = useState("");


  async function updateName() {
    if (!test) {
      if (nameInput != plantName && nameInput != "") {
        try {
          const token = getCookie(TOKEN_KEY);
          if (!token) {
            alert("You are not authenticated. Please log in again.");
            return;
          }
          const response = await axios.put(
            "/api/me/plants",
            { userName, plantId, nameInput },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 200) {
            alert("Plant renamed successfully.");
          }
        } catch (error) {
          console.error("Error renaming Plant:", error);
          alert("Failed to rename Plant. Please try again later.");
        }
      }
    }
  }

  async function updateTags() {

    let newTagInput = tagInput;
    if (tagInput === null) {
      newTagInput = "";
    }
    if (tagInput.length > 50){
      newTagInput = tagInput.slice(0,50);
    }

    //extract #tags from the input field, save all in an array
    const tagsText = newTagInput.match(/#\w+/g) || [];
    const tags = tagsText.map((tag) => tag.substring(1));

    // update tags text field with cleaned up text
    const tagsFormatted =
      tags && tags.length > 0 ? tags.map((tag) => `#${tag}`).join(" ") : "";

    setTagInput(tagsFormatted);

    if (!test) {
      try {
        const token = getCookie(TOKEN_KEY);
        if (!token) {
          alert("You are not authenticated. Please log in again.");
          return;
        }
        const response = await axios.put(
          "/api/me/tags",
          { userName, plantId, tags },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          alert("Tags updated successfully.");
        }
      } catch (error) {
        console.error("Error updating tags:", error);
        alert("Failed to update tags. Please try again later.");
      }
    }
  }

  async function waterPlant() {
    if (selectedDate === "") {
      alert("please select the watering date first.");
      return;
    }
    try {
      const token = getCookie(TOKEN_KEY);
      if (!token) {
        alert("You are not authenticated. Please log in again.");
        return;
      }
      const response = await axios.put(
        "/api/me/plants/water",
        { userName, plantId, selectedDate },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Plant watered successfully.");
      }
    } catch (error) {
      console.error("Error watering Plant:", error);
      alert("Failed to water Plant. Please try again later.");
    }
  }

  return (
    <div className="p-2 w-[100%] overflow-hidden rounded-3xl bg-gray-200 flex flex-col space-y-5 h-auto">
      {/*upper div - flexbox*/}
      <div className="flex w-full space-x-5">
        {/*plant image*/}
        <img
          src={imageLink}
          alt="plant image"
          className="w-[25%] aspect-square object-cover rounded-2xl"
        />

        {/*inner div containing plant info */}
        <div className="flex-1 p-3 bg-gray-200">
          {/*name edit field + button */}
          <div className="flex items-end p-3 space-x-2">
            {/*name input field */}
            <div>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                id="plantName"
                className=" text-xl text-white rounded-lg block w-[100%] p-2 placeholder-white"
                style={{ background: "#A3B18A" }}
                placeholder="enter a name..."
              />
            </div>

            {/*edit button */}
            <button
              className="p-3 text-sm rounded-xl text-center text-white"
              onClick={updateName}
              style={{ background: "#3A5A40" }}
            >
              Update Name
            </button>
          </div>

          {/*"different names of plant */}
          <p className="text-md p-2" style={{ color: "#3A5A40" }}>
            Common name: <span style={{ color: "#A3B18A" }}>{commonName}</span>
          </p>
          <p className="text-md p-2" style={{ color: "#3A5A40" }}>
            Scientific name:{" "}
            <span style={{ color: "#A3B18A" }}>{scientificName}</span>
          </p>
          <p className="text-md p-2" style={{ color: "#3A5A40" }}>
            Family name: <span style={{ color: "#A3B18A" }}>{familyName}</span>
          </p>

          <div className="flex items-end space-x-3">
            {/*tag input field */}
            <input
              type="text"
              name="tagsInputField"
              id="tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className=" text-xl text-white rounded-lg block p-2 placeholder-white "
              style={{ background: "#A3B18A" }}
              placeholder="enter tags..."
            />

            {/*edit button */}
            <button
              data-testid="tagsButton"
              className="p-3 text-sm rounded-xl text-center text-white"
              onClick={updateTags}
              style={{ background: "#3A5A40" }}
            >
              Update Tags
            </button>
          </div>
        </div>

        <div className="inline-block h-[400px] min-h-[1em] w-[1px] self-stretch bg-gray-700 mt-6"></div>

        {/*water info box */}
        <div className="flex flex-col justify-between p-3 w-[30%] space-y-5 bg-gray-200">
          <p className="text-md p-2" style={{ color: "#3A5A40" }}>
            Last Watered:{" "}
            <span style={{ color: "#A3B18A" }}>{lastWatered}</span>
          </p>
          <p className="text-md p-2" style={{ color: "#3A5A40" }}>
            To be watered:{" "}
            <span style={{ color: "#A3B18A" }}>{toBeWatered}</span>
          </p>

          <div className="flex items-end p-3 space-x-2">
            <input
              className="text-sm text-center text-white rounded-md p-2"
              style={{ background: "#3A5A40" }}
              type="date"
              onChange={(e) => setSelectedDate(e.target.value)}
            ></input>

            <button
              className="text-center text-white p-2 rounded-md text-sm"
              onClick={waterPlant}
              style={{ background: "#3A5A40" }}
            >
              Water Plant
            </button>
          </div>

          <p className="text-2xl p-2" style={{ color: "#3A5A40" }}>
            Preferences
          </p>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 mr-8 w-[500px]"></hr>

          <p className="text-md p-2" style={{ color: "#3A5A40" }}>
            Watering:{" "}
            <span style={{ color: "#A3B18A" }}>{wateringPreference}</span>
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
  );
};

export default PlantViewPlantInfo;