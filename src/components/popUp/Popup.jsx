import React from 'react'
import {FcCheckmark} from 'react-icons/fc'
import './popUp.css'
function Popup(props) {
  return (props.trigger) ? (
      <div className="notif-container">
        <div className="wrapper">
        <div className="icons">
          <i><FcCheckmark/></i>
        </div>
        <h1>Berhasil  Terkirim</h1>
        <div className="btn-oke" >
            <button className='btn btn-pop' onClick={()  => props.setTriger(false)}>Oke</button>
            {props.children}
        </div>
        </div>
      </div>
  ) : ''
}

export default Popup