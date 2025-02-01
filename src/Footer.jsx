import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Pixelog from "/img/Pixelog.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-[#00000020] dark:bg-[#00000080] backdrop-blur-sm p-5 flex flex-col justify-evenly items-center space-y-10 dark:text-[#9D9D9F] md:flex-row md:mt-20">
        {/* Logo and Copyright */}
        <div className="w-full flex flex-col justify-evenly items-center text-sm space-y-3 md:w-5/12">
          <img src={Pixelog} alt="Pixelog Logo" className="dark:invert w-2/6" />
          <div className="flex flex-col justify-evenly items-center">
            <h3>© 2025 Pixelog.</h3>
            <h3>All rights reserved.</h3>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center items-stretch gap-5">
          <div className="p-5 rounded-lg sm:w-5/12 w-full flex flex-col items-center">
            <h1 className="text-2xl dark:text-white w-full text-center">
              Quick Links
            </h1>
            <div className="flex flex-col justify-center items-center gap-3 mt-3">
              {["Home", "About", "Services", "Ads Partner", "Contact"].map(
                (item, index) => (
                  <a
                    href={`#${item.toLowerCase()}`}
                    key={index}
                    className="font-atkinsonB p-2 rounded-lg transition w-full text-center"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="p-5 rounded-lg sm:w-5/12 w-full flex flex-col items-center">
            <h1 className="text-2xl dark:text-white w-full text-center">
              Contacts
            </h1>
            <div className="flex flex-col justify-center items-center gap-3 mt-3">
              {[
                {
                  icon: <FaPhoneAlt />,
                  label: "Phone",
                  link: "tel:+919025398147",
                },
                {
                  icon: <FaWhatsapp />,
                  label: "Whatsapp",
                  link: "https://wa.me/9025398147",
                },
                {
                  icon: <FaInstagram />,
                  label: "Instagram",
                  link: "https://www.instagram.com/pixelog.in",
                },
              ].map((contact, index) => (
                <a
                  href={contact.link}
                  key={index}
                  className="flex flex-row justify-center items-center space-x-3 font-atkinsonB p-2 rounded-lg transition w-36 text-center"
                >
                  {contact.icon} <h3>{contact.label}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-center font-atkinsonB bg-black text-[#9D9D9F] p-1 text-sm">
        Designed & Developed by{" "}
        <a href="https://github.com/Praveentech005" className="text-white">
          Praveen@Pixelog
        </a>
      </h3>
    </>
  );
};

export default Footer;
