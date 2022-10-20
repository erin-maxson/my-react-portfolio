import React from 'react'
import './Nav.css'
import { IoHome } from 'react-icons/io5'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillFolderOpen } from 'react-icons/ai'
import { RiMessage2Fill } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ' '}><IoHome /></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ' '}><BsFillPersonFill /></a>
      <a href="#Projects" onClick={() => setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active' : ' '}><AiFillFolderOpen /></a>
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ' '}><RiMessage2Fill /></a>
    </nav>
  )
}

export default Nav