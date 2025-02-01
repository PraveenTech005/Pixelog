import { useEffect, useState } from "react";
import Theme from "./Theme";
import Pixelog from "/img/Pixelog.svg";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    if (isToggle) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  });

  return (
    <div className="w-full flex flex-row justify-between items-center p-5 px-5 sm:px-10 lg:px-20 bg-[#ffffff80] dark:bg-[#00000080]">
      <img
        src={Pixelog}
        alt="Pixelog Logo"
        className="w-2/6 dark:invert sm:w-3/12 lg:w-1/12"
      />
      <div className="flex flex-row justify-evenly items-center space-x-5 z-10">
        <Theme />
        <div
          className={`menu flex flex-col justify-evenly items-center dark:invert lg:hidden ${
            isToggle ? "change" : ""
          }`}
          onClick={() => setIsToggle(!isToggle)}
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
        <div className="hidden lg:flex flex-row space-x-10">
          {["About", "Services", "Ads Partner", "Contact"].map(
            (item, index) => (
              <div key={index}>
                <a href={`#${item.toLowerCase()}`} className="font-atkinsonB">
                  {item}
                </a>
              </div>
            )
          )}
          <button>
            <a
              href="#contact"
              className="bg-button p-2 px-10 text-lg font-atkinsonB rounded-lg text-white border-2 border-black dark:border-white"
            >
              Get In Touch
            </a>
          </button>
        </div>
      </div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={isToggle ? { x: "0%", opacity: 1 } : { x: "100%", opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-20 bg-white dark:bg-darkback"
      >
        {["About", "Services", "Ads Partner", "Contact"].map((item, index) => (
          <div key={index} onClick={() => setIsToggle(!isToggle)}>
            <a href={`#${item.toLowerCase()}`} className="font-atkinsonB">
              {item}
            </a>
          </div>
        ))}
        <button>
          <a
            href="#contact"
            className="bg-button p-2 px-10 text-lg font-atkinsonB rounded-lg text-white border-2 border-black dark:border-white"
          >
            Get In Touch
          </a>
        </button>
      </motion.div>
    </div>
  );
};

export default NavBar;
