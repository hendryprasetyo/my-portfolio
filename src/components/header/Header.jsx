import React from 'react'
import CTA from  './CTA'
import  ME from '../../assets/1.jpg'
import HeaderSocial from './HeaderSocial'
import './header.css'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello... i'm</h4>
        <h1>Hendry</h1>
        <h4 className='text-light'>Fullstack Developer</h4>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header