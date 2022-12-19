import React from "react";
import CTA from "./CTA";
import ME from "../../assets/8.jpg";
import HeaderSocial from "./HeaderSocial";
import "./header.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function Header() {
  const [text, count] = useTypewriter({
    words: [
      "My name is Hendry Prasetyo",
      "You can call me Hendry",
      "I'am Fullstack Developer",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="container header__container pt-12 sm:pt-24">
      <h4 className="text-gray-300 text-xl">Hello...</h4>
      <h1 className="text-xl lg:text-3xl font-semibold text-gray-200 px-2 lg:px-10 mb-10 mt-5">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#4db5ff" />
      </h1>
      <h4 className="uppercase tracking-[8px] text-gray-400 text-lg xl:text-xl">
        Fullstack Developer
      </h4>
      <CTA />
      <HeaderSocial />
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 2,
        }}
        animate={{
          opacity: 1,
        }}
        className="mt-40 rounded-full h-[200px] sm:h-[300px] w-[200px] sm:w-[300px] object-cover mx-auto"
        src={ME}
        alt="me"
      />
      <motion.a
        initial={{
          y: -100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        href="#contact"
        className="absolute text-sm sm:flex flex-col bottom-[8.9rem] md:bottom-[5rem] xl:font-semibold xl:text-lg xl:bottom-[2rem] md:text-base right-0 hidden "
      >
        <span>S</span>
        <span>C</span>
        <span>R</span>
        <span>O</span>
        <span>L</span>
        <span>L</span>
      </motion.a>
    </div>
  );
}

export default Header;
