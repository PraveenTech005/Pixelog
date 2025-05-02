import React, { useEffect, useState } from "react";
import Pixelog from "../assets/img/Pixelog.svg";
import { MdDarkMode, MdSunny } from "react-icons/md";

const NavBar = ({ theme, setTheme }) => {
  const links = ["Home", "About", "Services", "Recent Works", "Contact"];
  const [isMenu, setIsMenu] = useState(false);

  const loadTheme = (newTheme) => {
    if (newTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    setTheme(newTheme);
    localStorage.setItem("Theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("Theme") || "light";
    loadTheme(savedTheme);

    const blockScroll = () => {
      if (isMenu) document.body.style.overflowY = "hidden";
      else document.body.style.overflowY = "";
    };
    blockScroll();
  });

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    loadTheme(newTheme);
  };

  return (
    <div className="w-full border-b">
      <div className="max-w-7xl flex justify-between items-center mx-auto p-4">
        <img
          src={Pixelog}
          alt="Pixelog Logo"
          className="dark:invert w-2/6 lg:w-[12%]"
        />

        {isMenu && (
          <div className="fixed bg-[#EEE] dark:bg-neutral-800 inset-0 flex flex-col justify-center items-center space-y-10 z-[10]">
            {links.map((item, index) => (
              <div key={index}>
                <h3 className="sora">{item}</h3>
              </div>
            ))}
          </div>
        )}

        <div className="flex space-x-5 z-[10]">
          <div onClick={handleTheme} className="cursor-pointer">
            {theme === "light" ? (
              <MdDarkMode size={25} />
            ) : (
              <MdSunny size={25} />
            )}
          </div>
          <div
            className={`lg:hidden flex flex-col justify-evenly cursor-pointer ${
              isMenu && "change"
            }`}
            onClick={() => setIsMenu((prev) => !prev)}
          >
            <div className="bar bar1 bg-black dark:bg-white rounded"></div>
            <div className="bar bar2 bg-black dark:bg-white rounded"></div>
            <div className="bar bar3 bg-black dark:bg-white rounded"></div>
          </div>
          <div className="hidden lg:flex flex-row justify-evenly items-center space-x-10">
            {links.map((item, index) => (
              <div key={index}>
                <h1 className="cursor-pointer hover:underline underline-offset-8 ">
                  {item}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
