import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { RiServiceLine, RiMessageLine } from "react-icons/ri";
import { BsCalendar2Check } from "react-icons/bs";
import { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import {} from "@heroicons/react/24/outline";

import HeadersIcon from "./HeadersIcon";
import { motion } from "framer-motion";
import "./nav.css";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <div className="hidden fixed w-full top-0 z-50 bg-[var(--color-bg)] sm:flex items-center p-2 h-[75px] lg:px-5 shadow-xl">
        {/* left */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center"
        >
          <h2 className="h-6 text-gray-300 ml-4 text-lg md:text-2xl font-semibold tracking-[5px] uppercase">
            hendry
          </h2>
        </motion.div>
        {/* center */}
        <div className="flex justify-end flex-grow">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex lg:space-x-10"
          >
            <a href="#">
              <HeadersIcon active Icon={HomeIcon} />
            </a>
            <a href="#about">
              <HeadersIcon Icon={AiOutlineUser} />
            </a>
            <a href="#experience">
              <HeadersIcon Icon={AiOutlineBook} />
            </a>
            <a href="#services">
              <HeadersIcon Icon={RiServiceLine} />
            </a>
            <a href="#portfolio">
              <HeadersIcon Icon={BsCalendar2Check} />
            </a>
            <a href="#contact">
              <HeadersIcon Icon={RiMessageLine} />
            </a>
          </motion.div>
        </div>
        {/* right */}
        <div className="flex items-center sm:space-x-2 justify-end">
          {/* profile pic */}

          {/* <p className="whitespace-nowrap font-semibold pr-3">Hendry Prasetyo</p> */}
        </div>
      </div>
      <nav className="sm:hidden">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <AiOutlineBook />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <BsCalendar2Check />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <RiMessageLine />
        </a>
      </nav>
    </>
  );
}

export default Nav;
