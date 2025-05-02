// import LoadingScreen from "./components/LoadingScreen";

import React, { useState } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";

const Client = () => {
  const [theme, setTheme] = useState("light");
  // const [loadScreen, setLoadScreen] = useState(false);
  const serviceList = [
    "Digital Marketing",
    "Branding",
    "Social Media Management",
    "Website Designing",
    "Website Development",
    "Logo Designing",
    "Image Editing",
    "Video Editing",
  ];
  return (
    <div className="w-full min-h-screen dark:bg-[#0E1118] dark:text-white">
      {/* {!loadScreen && <LoadingScreen setLoadScreen={setLoadScreen} />} */}

      <Home theme={theme} setTheme={setTheme} serviceList={serviceList} />
      <About />
      <Services serviceList={serviceList} />
    </div>
  );
};

export default Client;
