import Marketing from "/img/Marketing.svg";
import SocialMedia from "/img/Social Media.svg";
import WebDev from "/img/Web Developer.svg";
import LogoVideo from "/img/LogoVideo.svg";
import { motion } from "framer-motion";

const Services = () => {
  const content = [
    {
      head: "Digital Marketing & Branding",
      para: "Elevate your brand with our innovative digital marketing strategies. From search engine optimization (SEO) to targeted ad campaigns, we help you reach your audience and build a strong online presence. Our branding solutions ensure your business stands out with a unique and compelling identity.",
      img: Marketing,
    },
    {
      head: "Social Media Management",
      para: "Connect with your audience and grow your online presence through expert social media management. We handle everything from content creation to scheduling, analytics, and engagement, ensuring your brand remains consistent and impactful across all platforms.",
      img: SocialMedia,
    },
    {
      head: "Web Development",
      para: "Bring your ideas to life with our custom web development services. Whether it’s a sleek single-page website or a complex e-commerce platform, we create user-friendly, responsive, and visually appealing websites tailored to your brand’s needs.",
      img: WebDev,
    },
    {
      head: "Logo, Video & Mockup Editing",
      para: "Make a lasting impression with professional logo design, video editing, and mockup creation. Our creative team delivers eye-catching visuals and engaging videos that effectively communicate your brand’s story and values.",
      img: LogoVideo,
    },
  ];

  return (
    <div
      className="w-full min-h-screen backdrop-blur-sm p-5 flex flex-col items-center text-justify lg:mt-20"
      id="services"
    >
      <div className="flex flex-col justify-evenly items-center space-y-10 mt-10">
        <h1 className="text-3xl sm:text-4xl">Explore Our Services</h1>
        <h3 className="text-sm sm:text-base">
          Elevate Your Brand’s Impact with Our Tailored Solutions
        </h3>
      </div>
      <div className="flex flex-wrap justify-evenly items-stretch gap-5 mt-10 text-center lg:px-40 xl:px-72 2xl:p-10">
        {content.map((item, index) => (
          <motion.div
            initial={
              index % 2 === 0
                ? { x: "-100%", opacity: 0 }
                : { x: "100%", opacity: 0 }
            }
            whileInView={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            key={index}
            className="flex flex-col justify-evenly p-5 text-sm border-2 space-y-10 border-black dark:border-white rounded-xl sm:w-5/12 flex-grow lg:w-4/12 2xl:w-2/12"
          >
            <h1 className="text-xl sm:text-2xl">{item.head}</h1>
            <img
              src={item.img}
              alt={item.head}
              className="w-full h-full rounded-2xl"
            />
            <h3 className="indent-5 sm:indent-10 flex-1 text-justify sm:text-base">
              {item.para}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
