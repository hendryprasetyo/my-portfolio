import React from "react";
import { AiOutlineMessage } from "react-icons/ai";

const ButtonMotion = () => {
  return (
    <div class="fixed sm:bottom-20 sm:right-8 bottom-32 z-50 right-3">
      <div className="rounded-full bg-[var(--color-primary)] w-10 h-10 sm:w-14 sm:h-14 flex justify-center items-center shadow-2xl animate-heartBeat">
        <a href="#contact" className="text-white text-3xl sm:text-4xl">
          <AiOutlineMessage />
        </a>
      </div>
    </div>
  );
};

export default ButtonMotion;
