import AVATAR1 from '../../assets/8.jpg'
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
    name: 'Hedry Prasetyo',
    title:  'CEO BCA Group',
    review: 'Saya sangat senang bekerjasama dengan Hendry,  saya puas dengan hasil kerja nya  dan bagaimana cara dia merespon semua kemauan saya sebagai client. Good Job for Hendry Development'
  },
  {
    avatar: AVATAR2,
    name: 'Pardi',
    title:  'CEO BCA Group',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing'
  },
  {
    avatar: AVATAR3,
    name: 'Rian',
    title:  'CEO BCA Group',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam minima odit unde! Adipisci sed repellendus expedita voluptate officia nisi quos ullam aperiam. Nihil '
  },
  {
    avatar: AVATAR1,
    name: 'Aris',
    title:  'CEO BCA Group',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam minima odit unde! Adipisci sed repellendus expedita voluptate officia nisi quos ullam aperiam. Nihil temporibus excepturi accusamus qui aliquam et saepe! Fugiat  '
  },
  {
    avatar: AVATAR1,
    name: 'Iban',
    title:  'CEO BCA Group',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam minima odit unde! Adipisci sed repellendus'
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
          data.map(({avatar, name, title, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img clasName='avatar' src={avatar} alt="testimonials" />
                </div>
                  <h3 className='client__name'>{name}</h3>
                  <h5 className='client__title'>{title}</h5>
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