import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/adoption search.png'
import IMG2 from '../../assets/html portfolio.png'
import IMG3 from '../../assets/pwa text editor.png'
import IMG4 from '../../assets/password generator.png'
import IMG5 from '../../assets/coders almanac.png'
import IMG6 from '../../assets/tech blog.png'

const Projects = () => {
  return (
    <section id="Projects">
      <h2>My Projects</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Local Pet</h3>
          <h4>A dog and cat adoption search website.</h4>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/erin-maxson/cat-and-dog-adoption-search" className='btn'>See Github Repo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>HTML + CSS Portfolio</h3>
          <h4>A quick portfolio made in my early days of coding.</h4>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/erin-maxson/bootcamp-portfolio" className='btn'>See Github Repo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>PWA Text Editor</h3>
          <h4>An offline text editor for on-the-go coders.</h4>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/erin-maxson/pwa-text-editor" className='btn'>See Github Repo</a>
          </div>
        </article>


        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Random Password Generator</h3>
          <h4>Generate random passwords with just a few clicks.</h4>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/erin-maxson/password-generator" className='btn'>See Github Repo</a>
          </div>
          </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Coder's Almanac</h3>
          <h4>A digital seed library made for the tech-savvy.</h4>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/erin-maxson/coders-almanac" className='btn'>See Github Repo</a>
          </div>
          </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>Tech Blog</h3>
          <h4>A blog to find things related to technology.</h4>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/erin-maxson/tech-blog" className='btn'>See Github Repo</a>
          </div>
          </article>
      </div>
    </section>
  )
}

export default Projects