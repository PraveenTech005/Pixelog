import React from "react";
import MediaAnimate from "../assets/img/media-player-animate.svg";
import MarketingAnimate from "../assets/img/marketing-animate.svg";
import { FaPhone, FaMapLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="flex flex-col justify-evenly items-center w-full min-h-screen space-y-10 text-justify lg:space-y-0">
      <h1 className="text-3xl pt-10 w-5/6">Contact</h1>
      <div className="w-5/6 flex-1 flex flex-col lg:flex-row justify-evenly items-center space-y-10">
        <div className="w-5/6 space-y-10 lg:w-2/6">
          <h3>
            We'd love to hear from you! Feel free to email us with any questions
            or if you're curious about pricing.
          </h3>
          <div className="space-y-5">
            <h3 className="flex flex-row space-x-5">
              <FaPhone size={25} />
              <span>+91 xxxxx xxxxx</span>
            </h3>
            <h3 className="flex flex-row space-x-5">
              <MdMail size={25} />
              <span>xxxxxxxxxxxxxxxxxx@gmail.com</span>
            </h3>
            <h3 className="flex flex-row space-x-5">
              <FaMapLocationDot size={25} />
              <span>
                No. xxx,
                <br /> Mullakad,
                <br /> Tuticorin - 628005,
                <br /> Tamil Nadu, India.
              </span>
            </h3>
          </div>
        </div>
        <div className="card p-5 space-y-5 rounded-2xl">
          <div className="space-y-2 w-full">
            <h3>Name</h3>
            <div className="space-y-2 lg:space-x-5 ">
              <input
                required
                type="text"
                placeholder="First"
                className="border border-[#5555] dark:border-[#aaa5] p-2 lg:flex-1 rounded-lg"
              />
              <input
                type="text"
                placeholder="Last"
                className="border border-[#5555] dark:border-[#aaa5] p-2 lg:flex-1 rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h3>Email</h3>
            <input
              required
              type="text"
              placeholder="First"
              className="border border-[#5555] dark:border-[#aaa5] p-2 rounded-lg w-full"
            />
          </div>
          <div className="space-y-2">
            <h3>Message</h3>
            <textarea
              required
              rows={5}
              placeholder="Type Your Message..."
              className="border border-[#5555] dark:border-[#aaa5] p-2 rounded-lg w-full"
            ></textarea>
          </div>
          <button className="p-2 px-5 rounded-xl mx-auto flex">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
