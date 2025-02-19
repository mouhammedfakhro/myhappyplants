"use client";
import React, {useRef, useState} from "react";

let magnifyingGlass = "https://img.icons8.com/ios7/600/FFFFFF/search.png";

const DiscoverySearchBar = ({}) => {
    
    return (


<div className="p-3 w-[95%] h-[80%] space-y-3 rounded-xl flex items-center justify-start" style={{ background: '#A3B18A' }}>
    <img src={magnifyingGlass} className="h-[24px] w-[24px] mr-2"/>
<p className="" style={{ color: '#FFFFFF' }}>Find Plants...</p> {/*fix so that the text and the magnifying glass is aligned properly*/}
 </div>

    )


}

export default DiscoverySearchBar;
