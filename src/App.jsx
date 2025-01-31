import Home from "./Home";
import HomePink from "/img/Home pink blob.svg";
import HomeBlue from "/img/Home blue blob.svg";
import ServicesBlue from "/img/Services Blue.svg";
import ServicesPink from "/img/Services pink.svg";
import Influencer from "./Influencer";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Services from "./Services";
import Partner from "./Partner";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="w-full h-full dark:bg-darkback app dark:text-white overflow-x-hidden">
      <img src={HomePink} alt="Pink Home Blob" className="absolute z-0" />
      {!isInView && (
        <button
          className="fixed bottom-10 right-5 z-10 border-2 border-black dark:border-white p-2 rounded-full opacity-50"
          onClick={() => window.scroll({ top: 0 })}
        >
          <MdKeyboardDoubleArrowUp
            size={25}
            className="text-black dark:text-white"
          />
        </button>
      )}
      <img
        src={HomeBlue}
        alt="Pink Home Blob"
        className="absolute z-0 -bottom-52"
      />
      <div ref={ref}>
        <Home />
      </div>
      <Influencer />
      <img
        src={HomeBlue}
        alt="Pink Home Blob"
        className="absolute z-0 right-0 rotate-180 -translate-y-5 blur-md"
      />
      <img
        src={ServicesBlue}
        alt="Services Blue Blob"
        className="absolute right-0 -translate-y-5 z-0 blur-md"
      />
      <img
        src={ServicesPink}
        alt="Services Pink Blob"
        className="absolute left-0 translate-y-[450%] z-0 blur-md"
      />
      <Services />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
