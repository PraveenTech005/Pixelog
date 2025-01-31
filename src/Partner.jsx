import { FaInstagram, FaYoutube } from "react-icons/fa";
import TVK from "/img/TVK.png";
import { motion } from "framer-motion";

const Partner = () => {
  return (
    <div
      className="w-full min-h-screen backdrop-blur-sm p-5 flex flex-col justify-evenly items-center"
      id="ad partner"
    >
      <h1 className="text-3xl">Advertisement Partner</h1>
      <div className="flex flex-col justify-evenly items-center space-y-10">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full flex flex-col justify-evenly items-center space-y-10"
        >
          <h1 className="text-xl">The Vlogging Kid</h1>
          <img src={TVK} alt="The Vlogging Kid Logo" className="w-4/6" />
        </motion.div>
        <motion.div
          className="w-full space-y-10"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="indent-5 text-sm text-justify">
            The Vlogging Kid is a dynamic video creator with 9K+ YouTube
            subscribers and a 11K+ growing Instagram presence. Based in
            Tuticorin, the channel features food vlogs, travel adventures, and
            engaging content powered by Pixelog. Known for lively storytelling,
            it’s a top choice for impactful promotions. The Vlogging Kid bridges
            brands and audiences through creative, authentic content.
          </h3>
          <div className="flex flex-row justify-evenly items-center space-x-20">
            <a
              href="https://www.instagram.com/the_vlogging_kid_"
              className="w-2/12"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.youtube.com/@TheVloggingKid/videos"
              className="w-2/12"
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
