"use client";
import React, { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LibraryItem from "../../components/library/LibraryItem";
import Navbar from "../../components/Navbar";
import FilterButton from "../../components/library/FilterButton";
import auth from "../../../services/auth";

const LibraryTagPage = ({}) => {
  const user = auth.getCurrentUser();

  const params = useSearchParams();
  const tagName = params.get("filter");

  const router = useRouter();


  const renderPlantItems = () => {

    // first filter an array of such plants
    const filteredPlants = user.plants.filter(plant => {
        return plant.tags.some(tag => tag.tagName === tagName);
      });

    // then render them
    return filteredPlants.map((plant, plantIndex) => (
      <div
      key={plantIndex}>
            <LibraryItem
              imageLink={null}
              plantName={plant.nickname}
              scientificName={null}
              familyName={null}
              tags={
                plant.tags && plant.tags.length > 0
                  ? plant.tags.map((tag) => `#${tag.tagName}`).join(" ")
                  : null
              }
              plantID={plant.id}
              returnPage="library"
            />
      </div>
    ));
  };

  const renderFilters = () => {
    // extract tags from each plant
    const plants = user.plants;
    // Create an array to hold all tags
    const allTags = [];
    // Loop through plants and collect tags
    plants.forEach((plant) => {
      plant.tags.forEach((tag) => {
        allTags.push(tag.tagName);
      });
    });
    // Get unique tags using Set
    const uniqueTags = [...new Set(allTags)];

    if (uniqueTags.length > 0) {
      return uniqueTags.map((tag, tagIndex) => (
        <div
        key={tagIndex}>
              <FilterButton
                tagName={tag}
              />
        </div>
      ));
    }
  };

  const clearClicked = () => {
    router.push("/library");
  }

  return (
    <div
      className="max-w-screen min-w-screen
        max-h-screen min-h-screen flex font-light"
    >
      <div className="w-[7%] min-h-full" style={{ background: "#3A5A40" }}>
        <Navbar />
      </div>

      <div
        className="w-[63%] min-h-full bg-gray-100 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <p className="text-2xl">My Library</p>
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className="space-y-3 overflow-x-">
          <div></div>
          <div>{renderPlantItems()}</div>
        </div>
      </div>

      <div
        className="w-[30%] min-h-full bg-gray-200 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <div className="space-x-5 h-full">
          <table className="min-w-full">
            <tbody>
              <tr>
                <td>
                  <p className="text-2xl">Filters</p>
                </td>
                <td>
                  <button
                    className="text-white text-sm rounded-md p-2 float-right
                                    "
                    style={{ background: "#3A5A40" }}
                    onClick={clearClicked}
                  >
                    CLEAR
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <div>{renderFilters()}</div>
        </div>
      </div>
    </div>
  );
};

export default LibraryTagPage;
