import {FaAward, FaUsers, FaFolder} from 'react-icons/fa'
import React from 'react'
import ME from '../../assets/2.jpg'
import './about.css'

function About() {
  return (
    <section id='about'>
       <h5>Get To Know</h5>
       <h2>About Me</h2>
       <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+  Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <FaFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt accusantium tenetur, iusto quam architecto voluptatibus atque, quis cumque ad fugiat? A assumenda obcaecati sequi quam. Culpa earum amet quam?  
          </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
       </div>
    </section>
  )
}

export default About