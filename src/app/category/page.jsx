"use client";

import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import { useSearchParams } from "next/navigation";

const Category = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CategoryContent />
    </Suspense>
  );
};

const CategoryContent = () => {
  const router = useRouter();
  const params = useSearchParams();
  const categoryName = params.get("categoryName") || "Unknown Category";

  const returnClicked = () => {
    router.push("/discovery");
  };

  return (
    <div className="max-w-screen min-w-screen max-h-screen min-h-screen flex font-light">
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
        <div className="w-[95%] space-y-2 space-x-2">
          {/* Return Button */}
          <table className="min-w-full">
            <tbody>
              <tr>
                <td>
                  <button className="text-2xl hover:text-lime-800" onClick={returnClicked}>
                    {" "}
                    {"<< Return"}{" "}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Divider Line */}
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <br />

          {/* Context Text */}
          <p>Category: {categoryName}</p>

          <br />

          {/* Category Items Here */}
        </div>
      </div>
    </div>
  );
};

export default Category;
