import React from 'react'
import image from "../../assets/desktop/image-header.jpg"
import "./Header.css"

function Header() {
  return (
    <div className='imageo'>
    <nav className='barra'>
        <h1 className='sunny'>sunnysside</h1>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <button className='btn-contact'>CONTACT</button>
        </ul>
    </nav>
    <div className='cont-image'>
      <h1 className='title'>WE ARE CREATIVES</h1>
      <img src={image} alt="image" />
    </div>
    </div>
  )
}

export default Header