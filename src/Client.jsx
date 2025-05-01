// import React, { useState } from "react";
// import LoadingScreen from "./components/LoadingScreen";

import { useState } from "react";
import Home from "./sections/Home";
import About from "./sections/About";

const Client = () => {
  const [theme, setTheme] = useState("light");
  // const [loadScreen, setLoadScreen] = useState(false);
  return (
    <div className="w-full min-h-screen dark:bg-[#0E1118] dark:text-white">
      {/* {!loadScreen && <LoadingScreen setLoadScreen={setLoadScreen} />} */}

      <Home theme={theme} setTheme={setTheme} />
      <About />
    </div>
  );
};

export default Client;
