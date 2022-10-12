import React from 'react'
import './Header.css'
import Headshot from '../../assets/erin.jpg'
import HeadshotSocials from './HeaderSocials'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container.header_container">
        <h3>Hi! 👋 I'm</h3>
        <h1>Erin Maxson</h1>
        <h3 className="">I'm a Fullstack Developer 👩‍💻</h3>
        <HeaderSocials />

        <div className="me">
          <img src={Headshot} alt="Erin's Headshot" />
        </div>
      </div>

    </header>
  )
}

export default Header