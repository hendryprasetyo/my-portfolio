import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
function HeaderSocial() {
  return (
    <motion.div
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
      className="header__socials md:text-xl xl:text-2xl 2xl:text-3xl mb-20 md:mb-10 xl:mb-[-1.2rem] hidden sm:flex xl:space-y-2"
    >
      <a href="http://github.com/hendryprasetyo" target="_blank">
        <FaGithub />
      </a>
      <a href="http://instagram.com/shendspras" target="_blank">
        <FaInstagram />
      </a>
      <a href="http://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
    </motion.div>
  );
}

export default HeaderSocial;
