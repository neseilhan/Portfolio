import React from 'react'
import './about.css'
import ME from '../needs/me2.png'
import {BsAward} from 'react-icons/bs'
import {MdCelebration} from 'react-icons/md'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
    <section id="about">
      
      <h5>Get to know</h5>
      <h2> About me</h2>
      
      <div className="container about__container">
        <div className='about__me'>
          <div className="about_me-image">
    <img src={ME} alt="About Image"/>
          </div>
        </div>
      <div className="about__content">
        <div className="about__cards">

          <article className="about__card">
            <BsAward className="about__icon" size={25}/>
            <h5>Experience</h5>
            <small>0+ years working</small>
          </article>

          <article className="about__card">
            <MdCelebration className="about__icon" size={25}/>
            <h5>Clients</h5>
            <small>00 Worldwide</small>
          </article>

          <article className="about__card">
            <AiOutlineFolderOpen className="about__icon" size={25}/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem beatae sequi maxime consequuntur voluptatum, vel ab eveniet blanditiis architecto adipisci, rem magni nobis cupiditate tenetur doloribus veritatis quo, dolorum ipsum.</p>
           <a href='#contact' className='btn btn-primary'> Let's Talk</a>

        

      </div>

      </div>
    </section>
  )
}

export default about