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
      className="w-full min-h-screen backdrop-blur-sm p-5 flex flex-col justify-evenly items-center text-justify"
      id="services"
    >
      <div className="flex flex-col justify-evenly items-center space-y-10 mt-10">
        <h1 className="text-3xl">Explore Our Services</h1>
        <h3 className="text-sm">
          Elevate Your Brand’s Impact with Our Tailored Solutions
        </h3>
      </div>
      <div className="flex flex-col justify-evenly items-center space-y-10 mt-10">
        {content.map((item, index) => (
          <motion.div
            initial={
              index % 2 == 0
                ? { x: "100%", opacity: 0 }
                : { x: "-100%", opacity: 0 }
            }
            whileInView={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            key={index}
            className="flex flex-col justify-evenly items-center p-5 space-y-10 text-sm border-2 border-black dark:border-white rounded-xl"
          >
            <h1 className="text-xl">{item.head}</h1>
            <img
              src={item.img}
              alt={item.head}
              className="w-full rounded-2xl"
            />
            <h3 className="indent-5">{item.para}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
