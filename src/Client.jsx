// import React, { useState } from "react";
// import LoadingScreen from "./components/LoadingScreen";

import { useState } from "react";
import Home from "./sections/Home";
import NavBar from "./components/NavBar";

const Client = () => {
  const [theme, setTheme] = useState("light");
  // const [loadScreen, setLoadScreen] = useState(false);
  return (
    <div className="w-full min-h-screen dark:bg-[#0E1118] dark:text-white">
      {/* {!loadScreen && <LoadingScreen setLoadScreen={setLoadScreen} />} */}
      
      <NavBar theme={theme} setTheme={setTheme} />
      <Home theme={theme} setTheme={setTheme} />
      <section className="min-h-screen">
        hi
      </section>
    </div>
  );
};

export default Client;
