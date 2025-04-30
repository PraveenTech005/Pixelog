import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Parallax from "../components/Particles";

const Home = ({ theme, setTheme }) => {
  const [service, setService] = useState("Social Media Management");
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="pointer-events-none opacity-60">
        <Parallax theme={theme} />
      </div>
      <NavBar theme={theme} setTheme={setTheme} />
      <section className="flex-1 flex justify-evenly items-center">
        <div className="w-5/6 space-y-5 p-5 card rounded-2xl">
          <div>
            <h2 className="englebert text-lg text-[#F9C95B]">Hi 👋, We Are</h2>
            <h1 className="text-5xl unbounded text-center">PIXELOG</h1>
          </div>
          <div className="space-y-2">
            <h2>Your Companion for</h2>
            <h1 className="text-2xl">{service}</h1>
          </div>
          <p className="indent-5 text-justify">
            Connect seamlessly Connect online and in person to create the brand
            you&apos;ve always envisioned, all at a great price!
          </p>
          <div className="flex justify-center">
            <button className=" p-3 px-5 rounded-xl ">
              Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
