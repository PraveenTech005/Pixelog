import NavBar from "./components/NavBar";
import MarketingAni from "/img/marketing-animate.svg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full min-h-screen backdrop-blur-md z-10" id="home">
      <NavBar />
      <div className="w-full min-h-screen flex flex-col justify-evenly items-center p-5 space-y-10">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          className="text-4xl"
        >
          <h1 className="font-afacad">Hi,</h1>
          <h1 className="indent-5 font-afacad">We Are PIXELOG</h1>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          className="flex flex-col justify-evenly items-center text-justify space-y-10 text-sm indent-5"
        >
          <h3>
            We craft impactful campaigns and innovative branding to help your
            business stand out through ads and influencer collaborations.
          </h3>
          <h3 className="font-atkinsonB">
            Connect seamlessly online and in-person to create the brand you
            envision, all at the best value in the market.
          </h3>
          <button>
            <a
              href="#"
              className="bg-button p-2 px-10 text-lg font-atkinsonB rounded-lg text-white border-2 border-black dark:border-white"
            >
              Free Consultation
            </a>
          </button>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          className="w-full"
        >
          <img src={MarketingAni} alt="Marketing Animation" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
