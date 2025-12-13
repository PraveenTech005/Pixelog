import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-3 lg:px-10">
      <img
        src="/Pixelog.svg"
        alt="Logo"
        className="bg-white/10 p-2 px-5 backdrop-blur-sm border-2 border-white/10 rounded-xl shadow-md w-4/12 lg:w-1/10"
      />
      <div className="hidden lg:flex justify-between items-center space-x-5 sora bg-white/10 p-2 px-5 backdrop-blur-sm border-2 border-white/10 rounded-xl shadow-md">
        {["HOME", "SERVICES", "PROJECTS", "ABOUT", "CONTACT"].map(
          (item, index) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={index}
              className="hover:text-white text-white/60 duration-300 cursor-pointer und text-center"
            >
              <h3>{item}</h3>
            </a>
          )
        )}
      </div>
      <div className="flex justify-center items-center space-x-5 bg-white/10 p-2 px-5 backdrop-blur-sm border-2 border-white/10 rounded-xl shadow-md text-white lg:text-[#969696]">
        <a href="https://www.instagram.com/pixelog.in" target="_blank">
          <button className="hover:text-white duration-300 cursor-pointer ">
            <FaInstagram size={25} />
          </button>
        </a>
        <a href="https://www.youtube.com/@TheVloggingKid" target="_blank">
          <button className="hover:text-white duration-300 cursor-pointer ">
            <FaYoutube size={25} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
