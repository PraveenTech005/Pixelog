import {
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import Pixelog from "/img/Pixelog.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full space-y-10 bg-[#00000080] backdrop-blur-sm p-5 flex flex-col justify-evenly flex-wrap items-center dark:text-[#9D9D9F]">
        <div className="w-full flex flex-col justify-evenly items-center text-sm space-y-3">
          <img
            src={Pixelog}
            alt="Pixelog Logo"
            className=" dark:invert w-2/6"
          />
          <div className="flex flex-col justify-evenly items-center">
            <h3>© 2025 Pixelog.</h3>
            <h3>All rights reserved.</h3>
          </div>
        </div>
        <div className="w-full flex flex-col justify-evenly items-center space-y-5 text-sm">
          <h1 className="text-2xl dark:text-white">Quick Links</h1>
          {["Home", "About", "Services", "Ad Partner", "Contact"].map(
            (item, index) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={index}
                className="font-atkinsonB"
              >
                {item}
              </a>
            )
          )}
        </div>
        <div className="w-full flex flex-col justify-evenly items-center space-y-5 text-sm">
          <h1 className="text-2xl dark:text-white">Contacts</h1>
          <a
            href="tel:+919025398147"
            className="flex flex-row justify-evenly items-center space-x-3 font-atkinsonB"
          >
            <FaPhoneAlt /> <h3>Phone</h3>
          </a>
          <a
            href="https://wa.me/9025398147"
            className="flex flex-row justify-evenly items-center space-x-3 font-atkinsonB"
          >
            <FaWhatsapp /> <h3>Whatsapp</h3>
          </a>
          <a
            href="https://www.instagram.com/the_vlogging_kid_"
            className="flex flex-row justify-evenly items-center space-x-3 font-atkinsonB"
          >
            <FaInstagram /> <h3>Instagram</h3>
          </a>
          <a
            href="https://t.me/+919025398147"
            className="flex flex-row justify-evenly items-center space-x-3 font-atkinsonB"
          >
            <FaTelegram /> <h3>Telegram</h3>
          </a>
        </div>
      </div>
      <h3 className="text-center font-atkinsonB bg-black text-[#9D9D9F] p-1 text-sm">
        Designed & Developed by{" "}
        <a href="https://github.com/Praveentech005" className="text-white">
          Praveen
        </a>
      </h3>
    </>
  );
};

export default Footer;
