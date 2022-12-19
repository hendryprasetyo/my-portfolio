import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Modal from "../Modal";
import emailjs from "emailjs-com";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import "./contact.css";

const Contact = () => {
  const [notif, setNotif] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_95y5v8q",
      "template_cjxl5g3",
      form.current,
      "fTploNM37ebA9FSUJ"
    );
    setNotif(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="pt-12 sm:pt-28">
      <Modal
        icon={
          <AiOutlineCheckCircle className="text-9xl flex items-center justify-center text-green-400" />
        }
        setTrigger={() => setNotif(false)}
        trigger={notif}
        title="Thanks for sending the message, I will respond soon"
        btn="oke"
      />
      <div className="flex justify-center flex-col items-center space-y-10 mb-12">
        <h2 className="uppercase tracking-[10px] sm:tracking-[20px] text-[var(--color-primary)] shadow-md ml-5 text-gray-500 text-lg sm:text-2xl">
          contact
        </h2>
        <h5 className="sm:text-lg text-gray-400 ">Get In Touch</h5>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hendryprras@gmail.com</h5>
            <a href="mailto:hendryprras@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Massenger</h4>
            <h5>hendryprras</h5>
            <a href="https://m.me/ernest.achiever">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+6288809773289</h5>
            <a href="https://api.whatsapp.com/send?phone=+6288809773289">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="h-12 px-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="h-12 px-2"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            className="px-2 py-2"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
