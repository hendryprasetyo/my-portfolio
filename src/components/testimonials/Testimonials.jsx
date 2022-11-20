import AVATAR1 from '../../assets/1.jpg'
import AVATAR2 from '../../assets/2.jpg'
import AVATAR3 from '../../assets/3.jpg'
import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATAR1,
    name: 'jojon',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam minima odit unde! Adipisci sed repellendus expedita voluptate officia nisi quos ullam aperiam. Nihil temporibus excepturi accusamus qui aliquam et saepe! Fugiat maiores sequi magni exercitationem officiis quaerat atque qui et. Obcaecati iusto ab maxime possimus repellendus quod! Tenetur, dolores? '
  },
  {
    avatar: AVATAR2,
    name: 'Pardi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam minima odit unde! Adipisci sed repellendus expedita voluptate officia nisi quos ullam aperiam. Nihil temporibus excepturi accusamus qui aliquam et saepe! Fugiat maiores sequi magni exercitationem officiis quaerat atque qui et. Obcaecati iusto ab maxime possimus repellendus quod! Tenetur, dolores? '
  },
  {
    avatar: AVATAR3,
    name: 'sabtu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam minima odit unde! Adipisci sed repellendus expedita voluptate officia nisi quos ullam aperiam. Nihil temporibus excepturi accusamus qui aliquam et saepe! Fugiat maiores sequi magni exercitationem officiis quaerat atque qui et. Obcaecati iusto ab maxime possimus repellendus quod! Tenetur, dolores? '
  },
  {
    avatar: AVATAR1,
    name: 'Aris',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam minima odit unde! Adipisci sed repellendus expedita voluptate officia nisi quos ullam aperiam. Nihil temporibus excepturi accusamus qui aliquam et saepe! Fugiat maiores sequi magni exercitationem officiis quaerat atque qui et. Obcaecati iusto ab maxime possimus repellendus quod! Tenetur, dolores? '
  },
  {
    avatar: AVATAR1,
    name: 'Iban',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam minima odit unde! Adipisci sed repellendus expedita voluptate officia nisi quos ullam aperiam. Nihil temporibus excepturi accusamus qui aliquam et saepe! Fugiat maiores sequi magni exercitationem officiis quaerat atque qui et. Obcaecati iusto ab maxime possimus repellendus quod! Tenetur, dolores? '
  },
  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials