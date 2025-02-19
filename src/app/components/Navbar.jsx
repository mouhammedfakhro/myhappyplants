"use client";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

const Navbar = ({}) => {

    const router = useRouter();

    // home 
    let homeIcon = "https://i.ibb.co/TBhJLwJg/home.png";
    const homeClicked = () => {
        router.push('/home'); 
    }

    // discovery
    let disoveryIcon = "https://i.ibb.co/PGs8RjF4/discovery.png";
    const discoveryClicked = () => {  

    }


    // library
    let libraryIcon = "https://i.ibb.co/My486cfT/library.png";
    const libraryClicked = () => {   
        router.push('/library'); 
    }

    // wishlist
    let wishlistIcon = "https://i.ibb.co/Wpgymk5L/wishlist.png";
    const wishlistClicked = () => {
        router.push('/wishlist');
    }

    // settings
    let settingsIcon = "https://i.ibb.co/0RCFvnQG/settings.png";
    const settingsClicked = () => {  

    }

    // logout
    let logoutIcon = "https://i.ibb.co/0ygHrGB2/logout.png";
    const logoutClicked = () => {   

    }

    return (

        <div className="p-3 w-full justify-items-center space-y-2 text-xs text-white">

        <button className="space-y-1 justify-items-center" onClick={homeClicked}>
            <img src={homeIcon}
                className="w-[35%] mt-5"/>
            <p>Home</p>
        </button>

        <button className="space-y-1 justify-items-center" onClick={discoveryClicked}>
            <img src={disoveryIcon}
                className="w-[35%] mt-5"/>
            <p>Discovery</p>
        </button>

        <button className="space-y-1 justify-items-center" onClick={libraryClicked}>
            <img src={libraryIcon}
                className="w-[35%] mt-5"/>
            <p>My Library</p>
        </button>

        <button className="space-y-1 justify-items-center" onClick={wishlistClicked}>
            <img src={wishlistIcon}
                className="w-[35%] mt-5"/>
            <p>Wishlist</p>
        </button>

        <button className="space-y-1 justify-items-center" onClick={settingsClicked}>
            <img src={settingsIcon}
                className="w-[35%] mt-5"/>
            <p>Settings</p>
        </button>

        <button className="space-y-1 justify-items-center" onClick={logoutClicked}>
            <img src={logoutIcon}
                className="w-[35%] mt-5"/>
            <p>Logout</p>
        </button>

    </div>
        
    );
};

export default Navbar;