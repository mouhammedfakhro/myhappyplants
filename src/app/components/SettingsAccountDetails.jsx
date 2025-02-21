"use client"
import React from "react";

let userName = "userName";
let userEmail = "userEmail";
let userPassword = "userPassword";

const SettingsAccountDetails = ({}) => {

    return (
    <div>



        <div class="flex mb-4">
            <div class="w-1/2  h-dvh">
                <div className="flex flex-row p-3">
                    <h1 className="text-2xl font-light" style={{ color: '#3A5A40' }}>
                        Account Details
                        </h1>
                </div>

                <div className="flex flex-row p-3">
                    <p className="text-xl font-light pr-3" style={{ color: '#3A5A40' }}>
                        Username: 
                        <span className="text-xl font-light pl-3" style={{ color: '#A3B18A' }}>
                            {userName}
                        </span>
                    </p>
                </div>

                <div className="flex flex-row p-3">
                    <p className="text-xl font-light pr-3" style={{ color: '#3A5A40' }}>
                        Username: 
                        <span className="text-xl font-light pl-3" style={{ color: '#A3B18A' }}>
                            {userName}
                        </span>
                    </p>
                </div>

                <div className="flex flex-row p-3">
                    <p className="text-xl font-light pr-3" style={{ color: '#3A5A40' }}>
                        Username: 
                        <span className="text-xl font-light pl-3" style={{ color: '#A3B18A' }}>
                            {userName}
                        </span>
                    </p>
                </div>

            </div>



            <div class="w-1/2 h-dvh">
                <div className="flex flex-row p-3">
              
                    <h1 className="text-2xl font-light" style={{ color: '#FFFFFF' }}>
                       .
                        </h1>
                </div>

                <div className="flex flex-row p-3">
                    <p className="text-xl font-light pr-3" style={{ color: '#FFFFFF' }}>
                        . 
                    </p>
                    <button className="text-base font-light text-white rounded-md display-flex align-items-center justify-center pl-3 pr-3" style={{ background: '#3A5A40'}}>
                        Edit
                    </button>
                </div>

                <div className="flex flex-row p-3">
                    <p className="text-xl font-light pr-3" style={{ color: '#FFFFFF' }}>
                        . 
                    </p>
                    <button className="text-base font-light text-white rounded-md display-flex align-items-center justify-center pl-3 pr-3" style={{ background: '#3A5A40'}}>
                        Edit
                    </button>
                </div>

                <div className="flex flex-row p-3">
                    <p className="text-xl font-light pr-3" style={{ color: '#FFFFFF' }}>
                        . 
                    </p>
                    <button className="text-base font-light text-white rounded-md display-flex align-items-center justify-center pl-3 pr-3" style={{ background: '#3A5A40'}}>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SettingsAccountDetails;