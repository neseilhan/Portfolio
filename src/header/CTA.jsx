import React from 'react'
import CV from '../needs/ogrenci.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' target="_blank">Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
  )
}

export default CTA  