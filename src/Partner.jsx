import { FaInstagram, FaYoutube } from "react-icons/fa";
import TVK from "/img/TVK.png";
import { motion } from "framer-motion";

const Partner = () => {
  return (
    <div
      className="w-full h-screen backdrop-blur-sm p-5 flex flex-col justify-evenly items-center space-y-10 lg:mt-20"
      id="ads partner"
    >
      <h1 className="text-3xl">Advertisement Partner</h1>
      <div className="flex flex-col justify-evenly items-center space-y-20 lg:flex-row">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full flex flex-col justify-evenly items-center space-y-20 sm:w-4/6 lg:w-3/12"
        >
          <h1 className="text-2xl sm:text-3xl">The Vlogging Kid</h1>
          <img
            src={TVK}
            alt="The Vlogging Kid Logo"
            className="w-4/6 border-4 dark:border-0 border-black rounded-full"
          />
        </motion.div>
        <motion.div
          className="w-full space-y-20 sm:w-5/6 lg:w-4/12"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="indent-5 text-sm text-justify sm:text-base sm:indent-10">
            The Vlogging Kid is a dynamic video creator with 9K+ YouTube
            subscribers and a 11K+ growing Instagram presence. Based in
            Tuticorin, the channel features food vlogs, travel adventures, and
            engaging content powered by Pixelog. Known for lively storytelling,
            it’s a top choice for impactful promotions. The Vlogging Kid bridges
            brands and audiences through creative, authentic content.
          </h3>
          <div className="w-full flex flex-row justify-center items-center space-x-20">
            <a
              href="https://www.instagram.com/the_vlogging_kid_"
              target="_blank"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.youtube.com/@TheVloggingKid/videos"
              target="_blank"
            >
              <FaYoutube size={30} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partner;
