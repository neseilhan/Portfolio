import React from 'react'
import './about.css'
import ME from '../needs/me2.png'
import {BsAward} from 'react-icons/bs'
import {MdCelebration} from 'react-icons/md'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h2> About me</h2>
      <div className='container about__container'>
        <div className='about_me'>
          <div className='about_me-image'>
<img src={ME} alt="About Image"/>
          </div>
        </div>
      <div className='about__content'>
        <div className='abpıt__cards'>

          <article className='about_card'>
            <BsAward className='about__icon' size={25}/>
            <h5>Experience</h5>
            <small>3+ years working</small>
          </article>

          <article className='about_card'>
            <MdCelebration className='about__icon' size={25}/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>

          <article className='about_card'>
            <AiOutlineFolderOpen className='about__icon' size={25}/>
            <h5>Projects</h5>
            <small>70+ Completed</small>
          </article>

        </div>

      </div>

      </div>
    </section>
  )
}

export default about