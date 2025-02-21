import React from "react";
import LandingPage from "./LandingPage";
import LoggedinHome from "./home/page.jsx";
import SettingsPage from "./settings/page.jsx";
import DiscoveryPage from "./discovery/page.jsx";
import PlantView from "./plantview/page.jsx";

const Layout = () => {
  return (
    <html lang="en">
      <body>
       <LandingPage/>
       {/*<SettingsPage/>*/} 
      {/*<DiscoveryPage/>*/} 
      <PlantView/>
      </body>
    </html>
  )
}

export default Layout;