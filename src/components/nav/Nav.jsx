import React from 'react'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook} from 'react-icons/ai'
import { RiServiceLine, RiMessageLine } from 'react-icons/ri'
import { useState } from 'react'
import './nav.css'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <div className="container-nav">
        <div className="brand">
        <a href="#" className='nav-brand'><h2>Hendry</h2></a>
        </div>
        <div className="items">
          <ul className='nav-list'>
          <li>
              <a href="#"className='button'>Home</a>
            </li>
            <li>
              <a href="#about"className='button'>About</a>
            </li>
            <li>
              <a href="#experience"className='button'>Experience</a>
            </li>
            <li>
              <a href="#services"className='button'>Services</a>
            </li>
            <li>
              <a href="#contact"className='button'>Contact</a>
            </li>
          </ul>
        </div>  
      </div>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessageLine/></a>
    </nav>
  )
}

export default Nav