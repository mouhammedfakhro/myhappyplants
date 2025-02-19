import React from "react";
import LandingPage from "./LandingPage";
import LoggedinHome from "./home/page.jsx";
import SettingsPage from "./settings/page.jsx";
import DiscoveryPage from "./discovery/page.jsx";

const Layout = () => {
  return (
    <html lang="en">
      <body>
       {/*<LandingPage/>*/} 
       {/*<SettingsPage/>*/} 
       <DiscoveryPage/>
      </body>
    </html>
  )
}

export default Layout;