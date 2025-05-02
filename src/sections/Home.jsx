import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Parallax from "../components/Particles";

const Home = ({ theme, setTheme, serviceList }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const currentIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const type = () => {
      const currentService = serviceList[currentIndexRef.current];

      if (!isDeleting) {
        if (charIndexRef.current < currentService.length) {
          setDisplayText(currentService.substring(0, charIndexRef.current + 1));
          charIndexRef.current++;
          timeoutRef.current = setTimeout(type, 100);
        } else {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            type();
          }, 1500);
        }
      } else {
        if (charIndexRef.current > 0) {
          setDisplayText(currentService.substring(0, charIndexRef.current - 1));
          charIndexRef.current--;
          timeoutRef.current = setTimeout(type, 50);
        } else {
          setIsDeleting(false);
          currentIndexRef.current =
            (currentIndexRef.current + 1) % serviceList.length;
          timeoutRef.current = setTimeout(type, 200);
        }
      }
    };

    timeoutRef.current = setTimeout(type, 200);

    return () => {
      clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleting]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="pointer-events-none opacity-60">
        <Parallax theme={theme} />
      </div>
      <NavBar theme={theme} setTheme={setTheme} />
      <section className="flex-1 flex flex-col lg:flex-row justify-evenly items-center space-y-10">
        <div className="w-5/6 max-w-lg md:w-4/6 space-y-5 p-5 lg:p-10 card rounded-2xl">
          <div>
            <h2 className="englebert text-lg text-[#F9C95B]">Hi 👋, We Are</h2>
            <h1 className="text-4xl unbounded text-center">PIXELOG</h1>
          </div>
          <div className="space-y-2">
            <h2>Your Companion for</h2>
            <h1 className="text-xl">
              {displayText}
              <span className="animate-blink">|</span>
            </h1>
          </div>
          <p className="indent-5 text-justify">
            Connect seamlessly online and in person to create the brand
            you&apos;ve always envisioned, all at a great price!
          </p>
          <div className="flex justify-center">
            <button className=" p-3 px-5 rounded-xl ">Free Consultation</button>
          </div>
        </div>
        <div className="w-5/6 max-w-2xl sm:w-4/6 card rounded-2xl p-5">
          <img
            src={`src/assets/img/serviceImg/${currentIndexRef.current}.svg`}
            alt="Service"
            className="homeimg w-full mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
