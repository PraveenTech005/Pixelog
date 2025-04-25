import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

const Client = () => {
  const [loadScreen, setLoadScreen] = useState(false);
  return (
    <div className="w-full min-h-screen dark:bg-[#0E1118] dark:text-white">
      {!loadScreen && <LoadingScreen setLoadScreen={setLoadScreen} />}
    </div>
  );
};

export default Client;
