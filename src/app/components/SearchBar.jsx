"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import auth from "@/services/auth";

const SearchBar = ({}) => {
  const router = useRouter();

  const [searchText, setSearchText] = useState("");

  const searchClicked = () => {
    if (searchText) {
      router.push(`../searchResult?keyword=${searchText}`);
    }
  }

  return (
    <div
      className="min-w-full flex rounded-2xl p-1 space-x-2"
      style={{ background: "#3A5A40" }}
    >
      <img
        className="p-2 w-[5%] aspect-square"
        src="https://i.ibb.co/PGs8RjF4/discovery.png"
      />

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="rounded-2xl text-white w-[85%] focus:outline-0 pl-3"
        style={{ background: "#43694a" }}
        placeholder="search"
      ></input>

      <button className="p-2 rounded-2xl text-white hover:text-gray-300"
      onClick={searchClicked}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
