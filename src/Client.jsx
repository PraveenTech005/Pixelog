import React, { useState } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import RecentWorks from "./sections/RecentWorks";
import LoadingScreen from "./components/LoadingScreen";
import Contact from "./sections/Contact";

const Client = () => {
  const [theme, setTheme] = useState("light");
  const [loadScreen, setLoadScreen] = useState(false);
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
      {!loadScreen && <LoadingScreen setLoadScreen={setLoadScreen} />}

      <Home theme={theme} setTheme={setTheme} serviceList={serviceList} />
      <About />
      <Services serviceList={serviceList} />
      <RecentWorks />
      <Contact />
      <footer className="card p-3 text-center text-sm mt-10">
        <h3 className="m-auto sora">
          Designed and Developed By{" "}
          <a
            href="https://github.com/PraveenTech005"
            className="text-[#FF890B] dark:text-[#F9C95B] cursor-pointer"
          >
            Praveen.
          </a>
        </h3>
      </footer>
    </div>
  );
};

export default Client;
