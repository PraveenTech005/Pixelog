import Influencerimg from "/img/Influencer.png";
import { motion } from "framer-motion";
import Editing from "/img/Editing.png";

const Influencer = () => {
  return (
    <div className="w-full min-h-screen backdrop-blur-md p-5 flex flex-col justify-evenly items-center space-y-10">
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        // transition={{ duration: 0.4 }}
        className="w-full h-full flex flex-col justify-evenly items-center text-justify space-y-12"
      >
        <img
          src={Influencerimg}
          alt="Influencerimg"
          className="w-full rounded-3xl border-4 border-black dark:border-white"
        />
        <h1 className="text-3xl">
          Elevating Your Brand with Influencer Marketing
        </h1>
        <h3 className="indent-5 text-sm">
          Unlock the Power of Influencer Partnerships: Amplify Your Marketing
          Strategies and Captivate Your Audience with Our Tailored Solutions.
        </h3>
      </motion.div>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        // transition={{ duration: 0.4 }}
        className="flex flex-col justify-evenly items-center text-justify space-y-12"
      >
        <img
          src={Editing}
          alt="Influencerimg"
          className="w-full rounded-3xl border-4 border-black dark:border-white"
        />
        <h1 className="text-3xl">
          Elevate Your Visual Content with Our Expertise in Photo and Video
        </h1>
        <h3 className="indent-5 text-sm">
          Crafting Visually Stunning Content: Our Team of Editing Specialists
          Transforms Your Ideas into Captivating Masterpieces, Elevating Your
          Brand’s Presence and Engagement Across All Platforms.
        </h3>
      </motion.div>
    </div>
  );
};

export default Influencer;
