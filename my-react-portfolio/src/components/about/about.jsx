import React from 'react'
import './About.css'
import ME from '../../assets/team.JPG'

const About = () => {
  return (
    <section id='About'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='.container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="My Team" />
          </div>
        </div>

        <div className='about_content'>
          <p>
          My name is Erin Maxson. I am the Head of Marketing & Technology at COhatch. I graduated from Louisiana Tech University in 2017 and completed The Ohio State University Fullstack Coding Bootcamp in 2022. I started my career as a Copywriter and Account Manager, but picked up skills across the digital industry in website design and development, digital advertising, graphic design, and more. The goal of learning how to code from the ground up was to get some official training beyond all of my years of self taught development. Some of the skills I hope to grow in over the next year are...
          </p>
          <ol>
            <li>Frontend UI/UX Design</li>
            <li>Using frameworks like React + Dart</li>
            <li>Mobile app development for good (working with nonprofits)</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default About