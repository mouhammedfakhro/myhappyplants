"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import auth from "../../services/auth";
import axios from "axios";

const SettingsPage = ({}) => {
  const router = useRouter();
  const user = auth.getCurrentUser();

  let userName = user.name;
  let userEmail = user.email;

  const [deleteConfirm, setDeleteConfirm] = useState("");

  const [isToggled, setIsToggled] = useState(user.notificationEnabled);

  async function handleToggleChange() {
    setIsToggled((prev) => {
      const newValue = !prev;
      sendToggle(newValue);
      return newValue;
    });
  }

  async function deleteAccountClicked() {

    if (deleteConfirm) {
      if (deleteConfirm === userName) {

        // BACKEND DELETE ACCOUNT

      }
      else {
        alert("Entered username not matching. Couldn't delete account.")
      }
    }

  }

  async function sendToggle(newToggle) {
    try {
      const response = await axios.post(
        "/api/me/notifications",
        { newToggle },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userName}`,
          },
        }
      );
      alert("Your email notification perefrences were updated successfully!");
    } catch (error) {
      alert("Couldn't update email notification prefrences.");

      setIsToggled((prev) => !prev);

      console.error(
        "Email notification prefrences error:",
        error.response?.data || error.message
      );
    }
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
        className="w-[93%] min-h-full bg-gray-100 text-lg p-14 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        {/*title + divider */}
        <div className="w-[85%]">
          <p className="text-2xl">My Settings</p>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          {/*flexbox */}
          <div className="flex">
            {/*col 1: account details */}
            <div className="w-[60%] space-y-3">
              <h1 className="text-2xl" style={{ color: "#3A5A40" }}>
                Account Details
              </h1>
              <p className="text-xl pr-3" style={{ color: "#3A5A40" }}>
                Username:
                <span className="text-xl pl-3" style={{ color: "#A3B18A" }}>
                  {userName}
                </span>
              </p>
              <p className="text-xl pr-3" style={{ color: "#3A5A40" }}>
                Email:
                <span className="text-xl pl-3" style={{ color: "#A3B18A" }}>
                  {userEmail}
                </span>
              </p>
            </div>

            {/*col 2: email settings*/}
            <div className="w-[35%] space-y-3">
              <h1 className="text-2xl" style={{ color: "#3A5A40" }}>
                Settings
              </h1>

              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td>
                      <p className="text-xl pr-3" style={{ color: "#3A5A40" }}>
                        Email Notifications:
                        <span
                          className="text-lg pl-3"
                          style={{ color: "#A3B18A" }}
                        >
                          {isToggled ? "On" : "Off"}
                        </span>
                      </p>
                    </td>
                    <td>
                      <label className="inline-flex items-center cursor-pointer float-right">
                        <input
                          type="checkbox"
                          id="notifToggle"
                          checked={isToggled}
                          className="sr-only peer"
                          onChange={handleToggleChange}
                        />
                        <div
                          className="relative w-11 h-6 bg-gray-200
                                                    peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
                                                    dark:peer-focus:ring-lime-800 rounded-full peer dark:bg-gray-700 
                                                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                                    after:start-[2px] after:bg-white after:border-gray-300 after:border 
                                                    after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 
                                                    peer-checked:bg-lime-600 dark:peer-checked:bg-lime-600"
                        ></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          .
                        </span>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/*account deletion box*/}
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <div className="space-y-3 space-x-2">
            <h1 className="text-2xl" style={{ color: "#3A5A40" }}>
              Delete Account
            </h1>

            <p className="italic">
              *Type your name to confirm account deletion
            </p>
            <input
              type="text"
              value={deleteConfirm}
              onChange={(e) => setDeleteConfirm(e.target.value)}
              className="rounded-xl text-black p-2 focus:outline-0 pl-3 bg-gray-300"
              placeholder="username.."
            ></input>
            <button
              className=" text-white text-lg hover:bg-lime-950 rounded-xl p-2 min-w-[100px]"
              style={{ background: "#3A5A40" }}
              onClick={deleteAccountClicked}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
