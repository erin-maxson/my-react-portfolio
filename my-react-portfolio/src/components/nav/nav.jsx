import React from 'react'
import './Nav.css'
import {IoHome} from 'react-icons/io5'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillFolderOpen} from 'react-icons/ai'
import {RiMessage2Fill} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href="#"><IoHome/></a>
      <a href="#About"><BsFillPersonFill/></a>
      <a href="#Projects"><AiFillFolderOpen/></a>
      <a href="#Contact"><RiMessage2Fill/></a>
    </nav>
  )
}

export default Nav