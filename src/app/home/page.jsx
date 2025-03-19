// Authors: Rana Noorzadeh, Mouhammed Fakhro, Akmal Safi, Olivia Svensson
"use client";
import React, { useEffect, useState } from "react";
import LibraryItem from "../components/library/LibraryItem";
import ReminderBox from "../components/home/ReminderBox";
import Navbar from "../components/Navbar";
import auth from "../../services/auth";
import axios from "axios";

const LoggedinHome = ({}) => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const user = auth.getCurrentUser();
      if (!user) return;

      try {
        const token = user.token; 
  
        const response = await axios.get("/api/me/plants", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
          params: {
            userName: user.name,
          }
        });

        console.log("Fetched Data:", response.data.plants);

        if (response.data.plants) {
          setPlants(response.data.plants);
        } else {
          console.log("No plants in response.");
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchPlants();
  }, []);

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
        <p className="text-2xl">Home</p>
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p>Library Overview</p>

        <div className="space-y-3">
          <div>
            {plants.length > 0 ? (
              plants.map((plant) => (
                <ul key={plant.id}>
                  <LibraryItem
                    imageLink={plant.imageUrl}
                    plantName={plant.nickname}
                    scientificName={null}
                    familyName={null}
                    tags={
                      plant.tags && plant.tags.length > 0
                        ? plant.tags.map((tag) => `#${tag.tagName}`).join(" ")
                        : null
                    }
                    plantID={plant.id}
                    returnPage="home"
                  />
                </ul>
              ))
            ) : (
              <p>No plants found.</p>
            )}
          </div>
        </div>
      </div>

      <div
        className="w-[30%] min-h-full p-5 pt-[3%] overflow-y-scroll
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        style={{ background: "#3A5A40" }}
      >
        <div></div>
        <div className="space-y-2 space-x-2 text-white">
          <div></div>
          <p>Reminders</p>
          <div>
            {plants.length > 0 ? (
              plants.map((plant) => (
                <div key={plant.id}>
                  <ul>
                    {plant.reminders.map((reminder) => (
                      <li key={reminder.id}>
                        <ReminderBox
                          key={reminder.id}
                          date={reminder.createdAt}
                          message={reminder.label}
                          plantID={reminder.plantId}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>No reminders available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedinHome;