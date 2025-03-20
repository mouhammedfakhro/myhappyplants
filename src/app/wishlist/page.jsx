// Authors: Rana Noorzadeh, Mouhammed Fakhro, Akmal Safi, Olivia Svensson
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "../components/Navbar";
import WishlistItem from "../components/WishlistItem";
import auth from "../../services/auth";

const WishlistPage = ({}) => {
  const router = useRouter();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const user = auth.getCurrentUser();
      if (!user) return;

      try {
        const token = user.token;
        const response = await axios.get("/api/me/wishlist", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            userName: user.name,
            userId: user.id,
          },
        });

        if (response.data.items) {
          const wishlistItems = response.data.items;

          const fetchAllDetails = async () => {
            const detailsPromises = wishlistItems.map((item) =>
              fetchPlantDetails(item.catalogID)
            );

            const details = await Promise.all(detailsPromises);

            const updatedPlants = wishlistItems.map((item, index) => ({
              ...item,
              ...details[index],
            }));

            setPlants(updatedPlants);
          };

          fetchAllDetails();
        } else {
          console.log("No plants in response.");
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, []);

  const fetchPlantDetails = async (catalogID) => {
    try {
      const response = await axios.get(
        `https://perenual.com/api/v2/species/details/${catalogID}?key=${process.env.NEXT_PUBLIC_PERENUAL_API_KEY}`
      );
      const data = response.data;
      console.log(data)
      return {
        imageLink: data.default_image?.original_url || null,
        scientificName: data.scientific_name || "Scientific Name",
        familyName: data.family || "Family Name",
      };
    } catch (error) {
      console.error("Error fetching plant details:", error);
      return {
        imageLink: null,
        scientificName: "Scientific Name",
        familyName: "Family Name",
      };
    }
  };

  const renderWishlistItems = () => {
    return plants.map((wishlistItem, wishlistItemIndex) => (
      <div key={wishlistItemIndex}>
        <WishlistItem
          imageLink={wishlistItem.imageLink}
          scientificName={wishlistItem.scientificName}
          familyName={wishlistItem.familyName}
          catalogID={wishlistItem.catalogID}
          itemID={wishlistItem.id}
          returnPage="wishlist"
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
        className="w-[93%] min-h-full bg-gray-100 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <p className="text-2xl">My Wishlist</p>
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className="space-y-3">
          <div></div>
          <div>{renderWishlistItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
