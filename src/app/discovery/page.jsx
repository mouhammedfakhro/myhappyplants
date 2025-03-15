"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CategoryItem from "../components/CategoryItem";
import CatalogItem from "../components/CatalogItem";
import axios from "axios";

const DiscoveryPage = () => {
  const router = useRouter();
  const [catalogItems, setCatalogItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCatalogItems() {
      try {
        const response = await axios.get(
          `https://perenual.com/api/v2/species-list?key=${process.env.NEXT_PUBLIC_PERENUAL_API_KEY2}`
        );

        setCatalogItems(response.data.data || []);
      } catch (error) {
        console.error("Error fetching catalog items:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCatalogItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
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
        className="w-[93%] min-h-full bg-gray-100 text-lg p-14
            overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <div className="w-[95%] space-y-2 space-x-2">
          {/*title + recommendation button */}
          <table className="min-w-full">
            <tbody>
              <tr>
                <td>
                  <p className="text-2xl">Discovery</p>
                </td>
                <td>
                  <button
                    className="text-white text-sm rounded-md p-3 pl-4 pr-4 float-right
                                    "
                    style={{ background: "#3A5A40" }}
                  >
                    Get Plant Recommendations
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/*divider line*/}
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          {/*search input box with icon*/}
          <SearchBar />

          <br />
          <p>Browse Categories</p>

          {/*the 10 pre-selected categories*/}
          <div className="flex space-x-2">
            <CategoryItem
              imageLink="https://images.pexels.com/photos/2778192/pexels-photo-2778192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              name="tree"
              displayName="Trees"
              categoryID="3"
            />
            <CategoryItem
              imageLink="https://images.pexels.com/photos/6913065/pexels-photo-6913065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              name="flower"
              displayName="Flowers"
              categoryID="3"
            />
          </div>
          <div className="flex space-x-2">
            <CategoryItem
              imageLink="https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              name="cacti"
              displayName="Cacti"
              categoryID="3"
            />
            <CategoryItem
              imageLink="https://images.pexels.com/photos/691043/pexels-photo-691043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              name="fern"
              displayName="Fern"
              categoryID="3"
            />
          </div>

          <br/>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <p>Plants </p>

          {/* Map through catalog items dynamically */}
          <div className="grid grid-cols-3 gap-4">
            {catalogItems.map((item) => (
              <CatalogItem
                key={item.id}
                id={item.id}
                commonName={item.common_name}
                scientificName={item.scientific_name}
                imgLink={item.default_image?.regular_url}
                returnPage="discovery"
                catalogID={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
          

export default DiscoveryPage;