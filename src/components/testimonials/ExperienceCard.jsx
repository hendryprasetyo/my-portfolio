import React from "react";
import { motion } from "framer-motion";

function ExperienceCard({ image, title, name, icon }) {
  return (
    <article className="flex flex-col items-center  w-full bg-[var(--color-bg-variant)]  rounded-xl h-screen">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 md:w-52 md:h-52 mt-10  mb-10 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center"
        src={image}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-lg  font-light">{title}</h4>
        <p className="font-semibold text-center text-xl uppercase mt-1">
          {name}
        </p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src={icon} alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... ended</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>sumary</li>
          <li>sumary</li>
          <li>sumary</li>
          <li>sumary</li>
          <li>sumary</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
