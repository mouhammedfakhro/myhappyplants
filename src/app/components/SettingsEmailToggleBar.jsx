"use client";
import React, { useState } from "react";

const SettingsEmailTogglebar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = () => {
    setIsToggled((prev) => !prev);
  };

  return (
        <div>
            <div className="flex mb-4">
                <div className="w-1/2 h-dvh">
                    <div className="flex flex-row p-3">
                        <h1 className="text-2xl font-light" style={{ color: '#3A5A40' }}>
                            Email Settings
                        </h1>
                    </div>

                <div className="flex flex-row p-3">
                    <p className="text-xl font-light pr-3" style={{ color: '#3A5A40' }}>
                    Email Notifications:
                    <span className="text-xl font-light pl-3" style={{ color: '#A3B18A' }}>
                    {isToggled ? "On" : "Off"} 
                    </span>
                    </p>
                </div>
            </div>

            <div className="w-1/2 h-dvh">
                <div className="flex flex-row p-3">
                    <h1 className="text-2xl font-light" style={{ color: '#FFFFFF' }}>
                        .
                    </h1>
            </div>

            <div className="flex flex-row p-3">
                <p className="text-xl font-light pr-3" style={{ color: '#FFFFFF' }}>
                    .
                </p>
                <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer"
                    onChange={handleToggleChange}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    .
                </span>
                </label>
            </div>
        </div>
    </div>
</div>
  );
};

export default SettingsEmailTogglebar;