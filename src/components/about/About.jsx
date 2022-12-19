import { FaAward, FaUsers, FaFolder } from "react-icons/fa";
import React from "react";
import ME from "../../assets/8.jpg";
import "./about.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="pt-12 sm:pt-28">
      <div className="flex justify-center flex-col items-center space-y-10 mb-12">
        <h2 className="uppercase tracking-[10px] sm:tracking-[20px] text-[var(--color-primary)] shadow-md ml-5 text-gray-500 text-lg sm:text-2xl">
          about
        </h2>
        <h5 className="sm:text-lg text-gray-400 ">Get In Touch</h5>
      </div>
      <motion.div
        initial={{ y: -200, opacity: [0, 0.5] }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="container about__container"
      >
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Sejak tahun 2022 pada saat saya dudu di bangku SMK kelas 11, saya
            sudah mulai belajar Coding dan sangat antusias dalam mempelajari
            nya. Saya hanya bermodal Laptop dan internet saja tanpa bootcamp
            atau cors berbayar. Saya lulus dari SMK N 3 Kota Bekasi jurusan
            Teknik Komputer dan Jaringan dengan nilai yang cukup bagus dibidang
            produktif jurusan.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
