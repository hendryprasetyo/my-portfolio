import {
  FaBootstrap,
  FaNodeJs,
  FaHtml5,
  FaReact,
  FaCss3Alt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiReact,
  SiJavascript,
} from "react-icons/si";
import React from "react";
import "./experience.css";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="pt-12 sm:pt-28">
      <div className="flex justify-center flex-col items-center space-y-10 mb-12">
        <h2 className="uppercase tracking-[10px] sm:tracking-[20px] text-[var(--color-primary)] shadow-md ml-5 text-gray-500 text-lg sm:text-2xl">
          experience
        </h2>
        <h5 className="sm:text-lg text-gray-400 ">My Recent Work</h5>
      </div>

      <div className="container experience__container">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="experience__frontend"
        >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="w-[3.5rem] h-[3.5rem] flex justify-center rounded-full cursor-pointer items-center bg-[var(--color-bg)] group relative"
              >
                <FaHtml5 className="text-[var(--color-primary)] rounded-full text-[2.5rem] opacity-100 group-hover:opacity-0 transition ease-in-out duration-300" />
                <div className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 absolute">
                  <p className="text-base text-gray-300 font-semibold">100%</p>
                </div>
              </motion.div>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="w-[3.5rem] h-[3.5rem] bg-[var(--color-bg)] flex justify-center rounded-full cursor-pointer group relative items-center"
              >
                <FaCss3Alt className="text-[var(--color-primary)] rounded-full text-[2.5rem] opacity-100 group-hover:opacity-0 transition ease-in-out duration-300" />
                <div className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 absolute">
                  <p className="text-base text-gray-300 font-semibold">80%</p>
                </div>
              </motion.div>
              <div>
                <h4>CSS 3</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="w-[3.5rem] h-[3.5rem] bg-[var(--color-bg)] flex justify-center rounded-full cursor-pointer group relative items-center"
              >
                <FaBootstrap className="text-[var(--color-primary)] rounded-full text-[2.5rem] opacity-100 group-hover:opacity-0 transition ease-in-out duration-300" />
                <div className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 absolute">
                  <p className="text-base text-gray-300 font-semibold">80%</p>
                </div>
              </motion.div>
              <div>
                <h4>Bootsrap 5</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="w-[3.5rem] h-[3.5rem] bg-[var(--color-bg)] flex justify-center rounded-full cursor-pointer group relative items-center"
              >
                <IoLogoJavascript className="text-[var(--color-primary)] rounded-full text-[2.5rem] opacity-100 group-hover:opacity-0 transition ease-in-out duration-300" />
                <div className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 absolute">
                  <p className="text-base text-gray-300 font-semibold">70%</p>
                </div>
              </motion.div>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="w-[3.5rem] h-[3.5rem] bg-[var(--color-bg)] flex justify-center rounded-full cursor-pointer group relative items-center"
              >
                <FaReact className="text-[var(--color-primary)] rounded-full text-[2.5rem] opacity-100 group-hover:opacity-0 transition ease-in-out duration-300" />
                <div className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 absolute">
                  <p className="text-base text-gray-300 font-semibold">80%</p>
                </div>
              </motion.div>
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="w-[3.5rem] h-[3.5rem] bg-[var(--color-bg)] flex justify-center rounded-full cursor-pointer group relative items-center"
              >
                <SiTailwindcss className="text-[var(--color-primary)] rounded-full text-[2.5rem] opacity-100 group-hover:opacity-0 transition ease-in-out duration-300" />
                <div className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 absolute">
                  <p className="text-base text-gray-300 font-semibold">85%</p>
                </div>
              </motion.div>
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="experience__backend"
        >
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="w-[3.5rem] h-[3.5rem] bg-[var(--color-bg)] flex justify-center rounded-full cursor-pointer group relative items-center"
              >
                <FaNodeJs className="text-[var(--color-primary)] rounded-full text-[2.5rem] opacity-100 group-hover:opacity-0 transition ease-in-out duration-300" />
                <div className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 absolute">
                  <p className="text-base text-gray-300 font-semibold">90%</p>
                </div>
              </motion.div>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="w-[3.5rem] h-[3.5rem] bg-[var(--color-bg)] flex justify-center rounded-full cursor-pointer group relative items-center"
              >
                <FaHtml5 className="text-[var(--color-primary)] rounded-full text-[2.5rem] opacity-100 group-hover:opacity-0 transition ease-in-out duration-300" />
                <div className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 absolute">
                  <p className="text-base text-gray-300 font-semibold">70%</p>
                </div>
              </motion.div>
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <motion.div
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className="w-[3.5rem] h-[3.5rem] bg-[var(--color-bg)] flex justify-center rounded-full cursor-pointer group relative items-center"
              >
                <SiMysql className="text-[var(--color-primary)] rounded-full text-[2.5rem] opacity-100 group-hover:opacity-0 transition ease-in-out duration-300" />
                <div className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 absolute">
                  <p className="text-base text-gray-300 font-semibold">90%</p>
                </div>
              </motion.div>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="w-[3.5rem] h-[3.5rem] bg-[var(--color-bg)] flex justify-center rounded-full cursor-pointer group relative items-center"
              >
                <IoLogoJavascript className="text-[var(--color-primary)] rounded-full text-[2.5rem] opacity-100 group-hover:opacity-0 transition ease-in-out duration-300" />
                <div className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 absolute">
                  <p className="text-base text-gray-300 font-semibold">70%</p>
                </div>
              </motion.div>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="w-[3.5rem] h-[3.5rem] bg-[var(--color-bg)] flex justify-center rounded-full cursor-pointer group relative items-center"
              >
                <SiNextdotjs className="text-[var(--color-primary)] rounded-full text-[2.5rem] opacity-100 group-hover:opacity-0 transition ease-in-out duration-300" />
                <div className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 absolute">
                  <p className="text-base text-gray-300 font-semibold">85%</p>
                </div>
              </motion.div>
              <div>
                <h4>NEXT JS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
