"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import auth from "../../services/auth";
import axios from "axios";
import { getCookie } from "cookies-next";
import { TOKEN_KEY } from "@/constants";

// when you search or browse a category in Discovery page - these are the components that
// show up as results, just like in library
const CatalogItem = ({
  imageLink,
  scientificName,
  familyName,
  catalogID,
  returnPage
}) => {
  const router = useRouter();
  const user = auth.getCurrentUser();
  const userName = user?.name;

  const itemClicked = () => {
    router.push(
      `../catalogView?&catalogID=${catalogID}&return=${returnPage}`
    );
  };

  return (
    <button 
      className="p-2 w-[100%] overflow-hidden rounded-3xl bg-gray-200 flex space-x-5
      hover:bg-gray-300 mb-2"
      onClick={itemClicked}
      style={{ display: "flex", alignItems: "center" }} // Add flex display for alignment
    >
      {/* Display image outside the content area */}
      <div className="flex-1 p-2 min-w-[100px] min-h-[100px]">
  <img
  src={imageLink ? imageLink : "https://images.pexels.com/photos/691043/pexels-photo-691043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
  className="w-32 h-32 object-cover rounded-2xl"
  />
  </div>

      <div className="flex-1 p-2">
        <p className="text-md" style={{ color: "#3A5A40" }}>{scientificName}</p>
        <p className="text-sm" style={{ color: "#3A5A40" }}>{familyName}</p>
      </div>
    </button>
  );
};

export default CatalogItem;
