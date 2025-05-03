import React, { useEffect, useState } from "react";

const LoadingScreen = ({ setLoadScreen }) => {
  const fullText = "< PIXELOG >";
  const [writer, setWriter] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setWriter(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          document.body.classList.remove("no-scroll");
          setLoadScreen(true);
        }, 2000);
      }
    }, 100);

    document.body.classList.add("no-scroll");

    return () => {
      clearInterval(interval);
      document.body.classList.remove("no-scroll");
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen flex flex-col justify-center items-center space-y-5 bg-white dark:bg-[#0E1118] z-[15]">
      <h1 className="text-4xl unbounded">
        {writer}
        <span className="animate-blink poppins">|</span>
      </h1>
      <h3 className="text-gray-400">Where marketing needs creativity</h3>
      <div className="w-[300px] h-1 bg-gray-500 rounded relative overflow-hidden">
        <div className="w-[100%] bg-blue-500 animate-loading h-full"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
