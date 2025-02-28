"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";
import auth from "../../services/auth";
import axios from "axios";
import { getCookie } from "cookies-next";
import { TOKEN_KEY } from "@/constants";

const WishlistItem = ({
    imageLink,
    scientificName,
    familyName,
    catalogID,
    itemID,
    returnPage
}) => {

  const router = useRouter();

    const plantClicked = () => {
        router.push(`../catalogview?catalogID=${catalogID}&return=${returnPage}`);
    }

    async function removeClicked() {
        
        try {
            const token = getCookie(TOKEN_KEY);
            if (!token) {
              alert("You are not authenticated. Please log in again.");
              return;
            }
            const response = await axios.delete("/api/me/wishlist", {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              data: { catalogID },
            });
      
            if (response.status === 200) {
              alert("Item deleted successfully.");
            }
          }
          catch (error) {
            console.error("Error deleting wishlist item:", error);
            alert("Failed to delete wishlist item. Please try again later.");
          }
            
    }

    return (
        <div className="p-2 w-[80%] overflow-hidden rounded-3xl bg-gray-200 flex space-x-5">
            
            <img src={imageLink}
            className="w-[20%] aspect-square object-cover rounded-2xl">
            </img>

            <div className="justify-items-start space-y-1">
                <p className="text-md"  style={{ color: "#3A5A40" }}>{scientificName}</p>
                <p className="text-md"  style={{ color: "#3A5A40" }}>{familyName}</p>

                <button
                className="p-2 rounded-md text-white text-sm w-[100%]"  style={{ background: "#3A5A40" }}
                onClick={removeClicked}>
                    Remove item
                </button>

                <button
                className="p-2 rounded-md text-white text-sm w-[100%]"  style={{ background: "#3A5A40" }}
                onClick={plantClicked}>
                    Details
                </button>

            </div>

        </div>
    );
};

export default WishlistItem;