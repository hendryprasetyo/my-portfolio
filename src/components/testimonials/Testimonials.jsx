import AVATAR1 from "../../assets/8.jpg";
import AVATAR2 from "../../assets/2.jpg";
import AVATAR3 from "../../assets/3.jpg";
import ME from "../../assets/8.jpg";
import React from "react";
import "./testimonials.css";
import { motion } from "framer-motion";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ExperienceCard from "../ExperienceCard";

const data = [
  {
    avatar: AVATAR1,
    name: "Hedry Prasetyo",
    title: "CEO BCA Group",
    review:
      "Saya sangat senang bekerjasama dengan Hendry,  saya puas dengan hasil kerja nya  dan bagaimana cara dia merespon semua kemauan saya sebagai client. Good Job for Hendry Development",
  },
  {
    avatar: AVATAR2,
    name: "Pardi",
    title: "CEO BCA Group",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  {
    avatar: AVATAR3,
    name: "Rian",
    title: "CEO BCA Group",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam minima odit unde! Adipisci sed repellendus expedita voluptate officia nisi quos ullam aperiam. Nihil ",
  },
  {
    avatar: AVATAR1,
    name: "Aris",
    title: "CEO BCA Group",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam minima odit unde! Adipisci sed repellendus expedita voluptate officia nisi quos ullam aperiam. Nihil temporibus excepturi accusamus qui aliquam et saepe! Fugiat  ",
  },
  {
    avatar: AVATAR1,
    name: "Iban",
    title: "CEO BCA Group",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam minima odit unde! Adipisci sed repellendus",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-12 sm:pt-28">
      <div className="flex justify-center flex-col items-center space-y-14 ">
        <h2 className="uppercase tracking-[10px] sm:tracking-[20px] text-[var(--color-primary)] shadow-md ml-5 text-gray-500 text-lg sm:text-2xl">
          testimonials
        </h2>
        <h5 className="sm:text-lg text-gray-400">Review From Clients</h5>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Swiper
          className="sm:container lg:w-[65%]"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="text-center flex justify-center p-10">
            <ExperienceCard
              image={ME}
              icon="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
              title="CEO of HNPSTORE"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center flex justify-center p-10">
            <ExperienceCard
              image={ME}
              icon="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
              title="CEO of HNPSTORE"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center flex justify-center p-10">
            <ExperienceCard
              image={ME}
              icon="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
              title="CEO of HNPSTORE"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center flex justify-center p-10">
            <ExperienceCard
              image={ME}
              icon="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
              title="CEO of HNPSTORE"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;
