import React, { useRef } from 'react';
import {MdOutlineEmail} from 'react-icons/md'
import emailjs from 'emailjs-com';
import {RiMessengerLine, RiWhatsappLine} from 'react-icons/ri'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_95y5v8q', 'template_cjxl5g3', form.current, 'fTploNM37ebA9FSUJ')
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>hendryprras@gmail.com</h5>
            <a href="mailto:hendryprras@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Massenger</h4>
            <h5>hendryprras</h5>
            <a href="https://m.me/ernest.achiever">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+6288809773289</h5>
            <a href="https://api.whatsapp.com/send?phone=+6288809773289">Send a message</a>
          </article>
        </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form}  onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact