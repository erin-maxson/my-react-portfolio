import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithubInverted} from 'react-icons/vsc'
import {BsFillFilePersonFill} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com/in/erinmaxson" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/erin-maxson" target="_blank"><VscGithubInverted/></a>
        <a href="https://withdogshetravels.com" target="_blank"><BsFillFilePersonFill/></a>
    </div>
  )
}

export default HeaderSocials