import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import FuzzyText from "./components/FuzzyText";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, FreeMode } from "swiper/modules";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const isMobile = screen.width <= 680;

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Branding",
    head: "Build a brand people remember.",
    tag: "Identity with impact.",
    tail: "We craft unique identities that define who you are, what you stand for, and why customers should choose you.",
    img: "/services/branding.jpg",
  },
  {
    title: "Influencer Marketing",
    head: "Connect with audiences through trusted voices.",
    tag: "Real people. Real results.",
    tail: "We partner with the right creators to amplify your brand and drive real engagement & conversions.",
    img: "/services/influencer.jpg",
  },
  {
    title: "Social Media Management",
    head: "Grow your presence, build your community.",
    tag: "Engage. Inspire. Convert.",
    tail: "Strategic content and campaigns designed to engage, inspire, and turn followers into loyal customers.",
    img: "/services/social_media.jpg",
  },
  {
    title: "Web Development",
    head: "Websites that look great and perform even better.",
    tag: "Designed to perform.",
    tail: "Modern, responsive and conversion-focused websites built to elevate your digital presence.",
    img: "/services/web_dev.jpg",
  },
  {
    title: "Editing Services",
    head: "Visuals that tell powerful stories.",
    tag: "Create. Edit. Captivate.",
    tail: "High-quality video, photo & creative editing to make your brand stand out and communicate with impact.",
    img: "/services/editing.jpg",
  },
  {
    title: "Meta AD's",
    head: "Reach the right audience at the right time.",
    tag: "Target. Optimize. Scale.",
    tail: "Data-driven Facebook & Instagram ad campaigns tailored to maximize ROI and scale your business.",
    img: "/services/meta_ads.jpg",
  },
  {
    title: "SEO Research",
    head: "Rank higher. Get discovered. Grow faster.",
    tag: "Be seen first.",
    tail: "Deep keyword research and optimization strategies that improve visibility and attract organic traffic.",
    img: "/services/seo.jpg",
  },
  {
    title: "Media Promotions",
    head: "Boost your brand across the right channels.",
    tag: "Wider reach, better impact.",
    tail: "We promote your brand through targeted media placements and strategic promotions that increase visibility, reach, and brand awareness.",
    img: "/services/media.jpg",
  },
];

const whyus = [
  {
    title: "Creative Thinking, Practical Results",
    para: "We blend imagination with real-world strategy to give your brand the edge it deserves.",
  },
  {
    title: "Tailored Solutions for Every Business",
    para: "No templates, no shortcuts — everything we deliver is crafted around your goals.",
  },
  {
    title: "Startup-Friendly Approach",
    para: "We understand growing businesses, and we build solutions that fit your budget, speed, and vision.",
  },
  {
    title: "Consistent Communication",
    para: "We keep things clear, transparent, and collaborative from start to finish.",
  },
  {
    title: "Quality You Can Trust",
    para: "Every project goes through a careful process to ensure clean designs, strong performance, and reliable results.",
  },
  {
    title: "Fast, Flexible & Future-Ready",
    para: "We adapt quickly, work efficiently, and deliver solutions built for long-term growth.",
  },
];

const App = () => {
  useGSAP(() => {
    gsap.from(".title", {
      x: 1500,
      opacity: 0,
    });
    gsap.from(
      ".desc",
      {
        x: 1500,
        opacity: 0,
      },
      0.1
    );

    gsap.utils.toArray(".stack").forEach((el) => {
      gsap.from(el, {
        y: 150,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
    });
  });

  const [mailer, setMailer] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [clicked, setClicked] = useState("Send");

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleMail = async () => {
    try {
      setClicked("Sending...");
      await delay(2000);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          title: mailer.title,
          name: mailer.name,
          email: mailer.email,
          message: mailer.message,
        },
        import.meta.env.VITE_EMAILJS_KEY
      );

      toast.success("Mail Sent Successfully");
      setClicked("Sent");

      setMailer({
        name: "",
        email: "",
        title: "",
        message: "",
      });

      await delay(1500);
      setClicked("Send");
    } catch (error) {
      console.log("Error Sending Mail!", error);
      toast.error("Mail not sent!");
    }
  };

  return (
    <div className="w-full min-h-svh lg:min-h-screen flex flex-col items-center justify-center overflow-hidden relative bg-black text-[#969696] poppins text-sm">
      <ToastContainer />
      <nav className="fixed z-10 w-full max-w-7xl top-0">
        <Navbar />
      </nav>
      <section
        className="w-full min-h-svh flex flex-col items-center relative"
        id="home"
      >
        <div className="w-full min-h-svh flex flex-col justify-evenly items-center z-0 relative">
          <div className="space-y-5 title z-1 mt-50">
            <p className="sora w-10/12 mx-auto text-xl">Hi 👋, We are</p>
            <div className="w-10/12 mx-auto">
              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.4}
                enableHover={true}
                fontFamily="unbounded"
              >
                PIXELOG
              </FuzzyText>
            </div>
          </div>
          <div className="desc w-10/12 lg:w-5/12 text-center p-5 space-y-20  z-1">
            <p>
              We craft impactful campaigns and innovative branding to help your
              business stand out through ads and influencer collaborations.
            </p>
            <div className="flex space-x-5 w-full justify-center">
              <a href="#contact">
                <button className="bg-white text-gray-900 p-3 px-5 border-2 border-white/10 rounded-lg cursor-pointer">
                  Consult Now
                </button>
              </a>
              <a href="#projects">
                <button className="bg-white/10 p-3 px-5 border-2 border-white/10 rounded-lg cursor-pointer">
                  What we did
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="services-section w-full h-fit flex flex-col pt-10 lg:pt-16 z-0 max-w-7xl space-y-5"
        id="services"
      >
        <h1 className="pl-10 lg:pl-0 text-2xl sora text-white">What We Do</h1>
        <div className="w-full p-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border-2 border-white/10 rounded-2xl h-auto stack cursor-pointer -rotate-z-5"
            >
              <h1 className="bg-neutral-900 text-xl sora text-center rounded-t-2xl py-2">
                {item.title}
              </h1>
              <div className="w-full flex flex-col justify-between items-center">
                <img src={item.img} alt={item.img} />
                <div className="w-full p-5 text-center flex flex-col justify-center items-center">
                  <h1 className="text-lg text-white sora">{item.head}</h1>
                  <h2>{item.tag}</h2>
                  <h3 className="pt-5">{item.tail}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="w-full min-h-screen flex flex-col pt-10 lg:pt-16 z-0 max-w-7xl space-y-10"
        id="projects"
      >
        <h1 className="pl-10 lg:pl-0 text-2xl sora text-white">What We Did</h1>
        <div className="w-full flex flex-row p-10">
          <Swiper
            modules={[Autoplay, FreeMode, EffectCoverflow]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={isMobile ? 1 : 3}
            loop={true}
            freeMode={false}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            className="w-full h-[600px] lg:h-[450px] carousel"
          >
            {[0, 1, 2, 3, 4, 5].map((item, index) => (
              <SwiperSlide key={index} className="carousel-slide">
                <video
                  className="carousel-video w-full lg:w-[80%] mx-auto"
                  src={`/work/${item}.mp4`}
                  muted
                  playsInline
                  autoPlay
                  loop
                  preload="auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center space-y-5 lg:space-y-0">
          <div className="w-8/12 lg:w-2/11 bg-white/10 text-center flex justify-evenly items-center p-2 rounded-lg border-2 border-white/10">
            <span className="text-2xl">150+</span> Projects Completed
          </div>
          <div className="w-8/12 lg:w-2/11 bg-white/10 text-center flex justify-evenly items-center p-2 rounded-lg border-2 border-white/10">
            <span className="text-2xl">100%</span> Satisfied Clients
          </div>
          <div className="w-8/12 lg:w-2/11 bg-white/10 text-center flex justify-evenly items-center p-2 rounded-lg border-2 border-white/10">
            <span className="text-2xl">10+</span> Return Clients
          </div>
          <a
            href="https://www.instagram.com/pixelog.in"
            target="_blank"
            className="w-5/12 lg:w-1/11 bg-white text-center flex justify-evenly items-center p-2 rounded-lg  text-[#696969] cursor-pointer"
          >
            See More →
          </a>
        </div>
      </section>
      <section
        className="w-full flex flex-col pt-10 lg:pt-16 z-0 max-w-7xl space-y-10"
        id="whyus"
      >
        <h1 className="pl-10 lg:pl-0 text-2xl sora text-white">
          Why Choose Us?
        </h1>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {whyus.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 my-auto p-5 space-y-5 text-center h-full rounded-xl border-2 border-white/10 transition duration-300 ease-in-out hover:scale-[1.02]"
            >
              <h1 className="text-lg sora text-white">{item.title}</h1>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="w-full flex flex-col pt-10 lg:pt-16 z-0 max-w-7xl space-y-10"
        id="about"
      >
        <h1 className="pl-10 lg:pl-0 text-2xl sora text-white">About</h1>
        <div className="px-10 space-y-10 text-center w-full lg:w-7/12 mx-auto">
          <h3 className="text-xl text-white">
            Pixelog is a creative digital agency built for startups, small
            businesses, and growing brands.
          </h3>
          <p>
            We blend design, development, and marketing to help businesses stand
            out online with clarity and confidence. From branding to web
            development, everything we create is crafted with purpose,
            creativity, and a focus on real results.
          </p>
        </div>
        <div className="p-10 flex flex-col lg:flex-row justify-evenly items-center space-y-10 lg:space-y-0">
          <div className="w-full lg:w-5/12 flex flex-col h-full space-y-5 bg-white/10 p-5 rounded-xl border-2 border-white/10 transition duration-300 ease-in-out hover:scale-[1.02]">
            <h1 className="text-xl sora text-white">Mission</h1>
            <p>
              To help startups and growing businesses build a strong digital
              identity through creative design, impactful marketing, and
              reliable technology — making their brand simple, clear, and
              unforgettable.
            </p>
          </div>
          <div className="w-full lg:w-5/12 flex flex-col h-full space-y-5 bg-white/10 p-5 rounded-xl border-2 border-white/10 transition duration-300 ease-in-out hover:scale-[1.02]">
            <h1 className="text-xl sora text-white">Vision</h1>
            <p>
              To become a trusted digital partner for businesses worldwide by
              delivering meaningful, modern, and growth-focused digital
              experiences.
            </p>
          </div>
        </div>
      </section>
      <section
        className="w-full min-h-svh flex flex-col pt-10 lg:pt-16 z-0 max-w-7xl space-y-10"
        id="contact"
      >
        <h1 className="pl-10 lg:pl-0 text-2xl sora text-white">Contact</h1>
        <h1 className="text-xl text-white sora text-center   ">
          Let's Work Together
        </h1>
        <div className="px-10 space-y-10 lg:space-y-0 flex flex-col lg:flex-row justify-evenly items-center">
          <div className="space-y-10 lg:w-4/12 text-center">
            <h3>Have an idea, a project, or just a question?</h3>
            <p>
              We'd love to hear from you. Let's create something meaningful
              together.
            </p>
          </div>
          <form
            className="bg-white/10 w-full lg:w-4/12 p-5 rounded-lg border-2 border-white/10 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              handleMail();
            }}
          >
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <input
                value={mailer.name}
                onChange={(e) => {
                  setMailer({ ...mailer, name: e.currentTarget.value });
                }}
                required
                type="text"
                name="name"
                className="w-full bg-white/10 rounded-md p-1 border-2 border-white/10 text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <input
                value={mailer.email}
                onChange={(e) => {
                  setMailer({ ...mailer, email: e.currentTarget.value });
                }}
                required
                type="email"
                name="email"
                className="w-full bg-white/10 rounded-md p-1 border-2 border-white/10 text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="service">Title</label>
              <input
                value={mailer.title}
                onChange={(e) => {
                  setMailer({ ...mailer, title: e.currentTarget.value });
                }}
                required
                type=""
                name="service"
                className="w-full bg-white/10 rounded-md p-1 border-2 border-white/10 text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Message</label>
              <textarea
                value={mailer.message}
                onChange={(e) => {
                  setMailer({ ...mailer, message: e.currentTarget.value });
                }}
                required
                type="text"
                name="message"
                rows={5}
                className="resize-none w-full bg-white/10 rounded-md p-1 border-2 border-white/10 text-white"
              />
            </div>
            <button
              type="submit"
              className="text-[#555] bg-white flex sora items-center justify-center rounded-lg w-6/12 mx-auto p-2 px-5 space-x-2 duration-300 disabled:bg-white/50 cursor-pointer"
              disabled={clicked === "Sending..." || clicked === "Sent"}
            >
              <p>{clicked}</p>
              <IoSend
                size={20}
                className={clicked == "Sending..." && "hidden"}
              />
            </button>
          </form>
        </div>
      </section>
      <footer className="p-10 bg-white/5 w-full flex flex-col lg:flex-row justify-evenly items-center space-y-10 lg:space-y-0">
        <img src="/Pixelog.svg" alt="Pixelog Logo" />
        <div className="w-full lg:w-8/12 flex justify-evenly">
          <div className="space-y-3 w-5/12 flex flex-col justify-center items-center">
            <h1 className="text-lg text-white sora">Quick Links</h1>
            <div className="flex flex-col indent-5 space-y-2">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#whyus">Why Choose Us</a>
              <a href="#about">About</a>
              <a href="#contacts">Contact</a>
            </div>
          </div>
          <div className="w-5/12 flex flex-col space-y-5 justify-center">
            <div>
              <a
                href="https://www.instagram.com/pixelog.in"
                target="_blank"
                className="flex items-center"
              >
                <span className="mr-2">
                  <FaInstagram size={25} />
                </span>
                Pixelog
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/@TheVloggingKid"
                target="_blank"
                className="flex items-center"
              >
                <span className="mr-2">
                  <FaYoutube size={25} />
                </span>
                Pixelog
              </a>
            </div>
            <div>
              <a
                href="mailto:support@pixelog.in"
                target="_blank"
                className="flex items-center"
              >
                <span className="mr-2">
                  <MdAlternateEmail size={25} />
                </span>
                Support@Pixelog.in
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-2">&copy; 2025 Pixelog. All rights reserved.</div>
    </div>
  );
};

export default App;
