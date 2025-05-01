import React from "react";
import MediaAnimate from "../assets/img/media-player-animate.svg";
import MarketingAnimate from "../assets/img/marketing-animate.svg";

const About = () => {
  return (
    <section className="flex flex-col justify-evenly items-center w-full min-h-screen space-y-10 text-justify border-b">
      <h1 className="text-3xl pt-10 w-5/6">About Us</h1>
      <div className="flex flex-col w-5/6 card p-5 rounded-2xl space-y-5 lg:flex-row justify-evenly items-center">
        <img
          src={MediaAnimate}
          alt="Animated Media"
          className="w-5/6 lg:w-4/12"
        />
        <p className="indent-5 lg:w-3/6">
          Pixelog is your trusted partner in creativity and innovation,
          transforming ideas into impactful digital experiences. As a
          forward-thinking digital marketing and branding agency, we're
          passionate about helping businesses shine in today's fast-paced
          digital landscape.
        </p>
      </div>
      <div className="flex flex-col-reverse w-5/6 card p-5 rounded-2xl space-y-5 lg:flex-row justify-evenly items-center">
        <p className="indent-5 lg:w-3/6">
          From crafting compelling campaigns and building distinct brand
          identities to developing sleek, responsive websites. we offer
          end-to-end solutions tailored to your goals. Our creative team also
          specializes in managing social media, designing standout logos,
          editing professional videos, and producing high-quality mockups that
          bring your brand to life.
        </p>
        <img
          src={MarketingAnimate}
          alt="Animated Marketing"
          className="w-5/6 lg:w-4/12"
        />
      </div>
    </section>
  );
};

export default About;
