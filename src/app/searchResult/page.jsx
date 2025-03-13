"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CatalogItem from "../components/CatalogItem";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const SearchResult = ({}) => {
  const router = useRouter();
  const params = useSearchParams();
  const keyword = params.get("keyword");

  // State to store search items
  const [searchItems, setSearchItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch search items based on the keyword
  useEffect(() => {
    if (keyword) {
      axios
        .get(`https://perenual.com/api/v2/species-list?key=sk-sUY267c5cf0decdc38938&q=${keyword}`)
        .then((response) => {
          setSearchItems(response.data.data || []);
        })
        .catch((err) => {
          setError("Failed to fetch results");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [keyword]);

  const returnClicked = () => {
    router.push("/discovery");
  };

  return (
    <div className="max-w-screen min-w-screen max-h-screen min-h-screen flex font-light">
      <div className="w-[7%] min-h-full" style={{ background: "#3A5A40" }}>
        <Navbar />
      </div>

      <div className="w-[93%] min-h-full bg-gray-100 text-lg p-14 overflow-y-auto">
        <div className="w-[95%] space-y-2 space-x-2">
          {/* Return Button */}
          <table className="min-w-full">
            <tbody>
              <tr>
                <td>
                  <button className="text-2xl hover:text-lime-800" onClick={returnClicked}>
                    {"<< Return"}
                  </button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>

          {/* Divider line */}
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />

          {/* Search Input Box with Icon */}
          <SearchBar />

          <br />

          {/* Context Text */}
          <p>Showing results for "{keyword}"</p>

          <br />

          {/* Display Loading, Error, or Search Results */}
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}

          <div className="grid grid-cols-3 gap-4">
            {searchItems.length > 0 ? (
              searchItems.map((item) => (
                <CatalogItem
                key={item.id}
                id={item.id}
                commonName={item.common_name}
                scientificName={item.scientific_name}
                imgLink={item.default_image?.original_url}
                catalogID={item.id}
                  returnPage="searchResult"
                />
              ))
            ) : (
              <p>No results found for "{keyword}"</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;