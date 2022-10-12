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
      <h4>My Projects</h4>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <a href="#" className='btn'>See Github Repo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <a href="#" className='btn'>See Github Repo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <a href="#" className='btn'>See Github Repo</a>
        </article>


        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <a href="#" className='btn'>See Github Repo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <a href="#" className='btn'>See Github Repo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <a href="#" className='btn'>See Github Repo</a>
        </article>
      </div>
    </section>
  )
}

export default Projects