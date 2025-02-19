"use client";
import React, {useRef, useState} from "react";

let magnifyingGlass = "https://img.icons8.com/ios7/600/FFFFFF/search.png";

const DiscoverySearchBar = ({}) => {
    
    return (


<div className="p-3 w-[95%] h-[40%] bg-violet-300 space-y-3 rounded-xl flex flex-row items-center justify-start" style={{ background: '#A3B18A' }}>
    <img src={magnifyingGlass} className="h-[170%] w-[2%]"/>
<p className="" style={{ color: '#FFFFFF' }}>Find Plants...</p> {/*fix so that the text and the magnifying glass is aligned properly*/}
 </div>

    )


}

export default DiscoverySearchBar;
