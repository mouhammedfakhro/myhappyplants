"use client";
import React from "react";
import LibraryItem from "../components/library/LibraryItem";
import ReminderBox from "../components/home/ReminderBox";
import Navbar from "../components/Navbar";
import auth from "../../services/auth";

const LoggedinHome = ({}) => {

  const renderReminders = () => {
    const user = auth.getCurrentUser();
    if (!user || !Array.isArray(user.plants)) return null;

    return user.plants.map((plant, plantIndex) => (
      <div key={plantIndex}>
        {Array.isArray(plant.reminders) &&
          plant.reminders.map((reminder) => (
            <ReminderBox
              key={reminder.id}
              date={reminder.createdAt}
              message={reminder.label}
              plantID={plant.id}
            />
          ))}
      </div>
    ));
  };

  const renderPlantItems = () => {
    const user = auth.getCurrentUser();

    console.log(user.plants);

    if (!user || !Array.isArray(user.plants)) return null;
    return user.plants.map((plant, plantIndex) => (
      <div key={plantIndex}>
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
          returnPage="home"
        />
      </div>
    ));
  };

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
          <div></div>
          <div>{renderPlantItems()}</div>
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
          <div>{renderReminders()}</div>
        </div>
      </div>
    </div>
  );
};

export default LoggedinHome;
