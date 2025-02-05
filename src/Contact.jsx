import { useState } from "react";
import Contactimg from "/img/Contact Us.svg";
import emailjs from "emailjs-com";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";
import { BiSolidSend } from "react-icons/bi";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState("");

  const emailSend = (e) => {
    e.preventDefault();
    setIsSending("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          name: data.name,
          email: data.email,
          query: data.message,
        },
        import.meta.env.VITE_EMAILJS_USERID
      )
      .then(
        () => {
          setIsSending("sent");
          setTimeout(() => {
            setData({ name: "", email: "", message: "" });
            setIsSending("");
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send email. Try again!");
        }
      );
  };

  return (
    <div
      className="w-full min-h-screen backdrop-blur-sm p-5 flex flex-col justify-evenly items-center space-y-10 mt-5"
      id="contact"
    >
      <h1 className="text-3xl sm:text-4xl">Contact Us</h1>
      <div className="w-full flex flex-col justify-evenly items-center space-y-10 lg:flex-row">
        <div className="w-full flex flex-col justify-evenly items-center space-y-10 lg:w-4/6">
          <motion.div
            className="w-full sm:w-4/6"
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={Contactimg} alt="Contact SVG" className="w-full" />
          </motion.div>
          <motion.h3
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-justify indent-5 text-sm sm:w-5/6 sm:text-base lg:w-6/12"
          >
            We’d love to hear from you! Whether you’re looking to collaborate,
            have a query, or simply want to say hello, here’s how you can get in
            touch with us.
          </motion.h3>
        </div>
        <motion.form
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col justify-evenly items-center space-y-5 border-2 border-black dark:border-white p-5 w-full rounded-xl sm:w-4/6 lg:w-3/6 lg:mx-40"
          onSubmit={emailSend}
        >
          <input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.currentTarget.value })}
            type="text"
            required
            placeholder="Name"
            className="w-full p-2 rounded-md bg-transparent border-2 border-black dark:border-white "
          />
          <input
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.currentTarget.value })}
            type="email"
            required
            placeholder="Email"
            className="w-full p-2 rounded-md bg-transparent border-2 border-black dark:border-white "
          />
          <textarea
            rows={6}
            value={data.message}
            onChange={(e) =>
              setData({ ...data, message: e.currentTarget.value })
            }
            type="text"
            required
            placeholder="Message"
            className="w-full p-2 rounded-md bg-transparent border-2 border-black dark:border-white "
          />
          <button
            type="submit"
            className="bg-button p-2 px-10 font-atkinsonB rounded-lg flex flex-row justify-center items-center text-white border-2 border-black dark:border-white w-2/6 sm:w-3/6"
          >
            {isSending === "" ? (
              <div className="flex flex-row space-x-3">
                <h3>Send</h3>
                <h3>
                  <BiSolidSend size={20} />
                </h3>
              </div>
            ) : isSending === "sending" ? (
              "Sending ..."
            ) : (
              <div className="flex flex-row space-x-3">
                <h3>Sent</h3>
                <h3>
                  <TiTick size={20} />
                </h3>
              </div>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
