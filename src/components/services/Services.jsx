import { BiCheck } from "react-icons/bi";
import React from "react";
import "./services.css";

function Services() {
  return (
    <section id="services" className="pt-12 sm:pt-28">
      <div className="flex justify-center flex-col items-center space-y-10 mb-12">
        <h2 className="uppercase tracking-[10px] sm:tracking-[20px] text-[var(--color-primary)] shadow-md ml-5 text-gray-500 text-lg sm:text-2xl">
          services
        </h2>
        <h5 className="sm:text-lg text-gray-400 ">What I Offer</h5>
      </div>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Work Fast</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
