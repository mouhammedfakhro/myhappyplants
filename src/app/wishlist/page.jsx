"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import WishlistItem from "../components/WishlistItem";
import auth from "../../services/auth";

const WishlistPage = ({}) => {
  const router = useRouter();
  const user = auth.getCurrentUser();

  console.log(user.wishlist);

  const renderWishlistItems = () => {
    if (!user || !Array.isArray(user.wishlist.items)) return null;

    return user.wishlist.items.map((wishlistItem, wishlistItemIndex) => (

      <div key={wishlistItemIndex}>
        <WishlistItem
          imageLink={null}
          scientificName="im a plant"
          familyName={null}
          catalogID={wishlistItem.catalogID}
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
