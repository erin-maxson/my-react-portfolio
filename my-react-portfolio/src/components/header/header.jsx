import React from 'react'
import './Header.css'
import Headshot from '../../assets/erin.jpg'
import HeadshotSocials from './HeaderSocials'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container.header_container">
        <h5>Hello I'm</h5>
        <h1>Erin Maxson</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderSocials />

        <div className="me">
          <img src={Headshot} alt="Erin's Headshot" />
        </div>
      </div>

    </header>
  )
}

export default Header