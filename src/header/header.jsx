import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import Me from '../needs/me.png'


const Header= () => {
    return (
        <header>
            
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Neşe İlhan</h1>
            <h5 className="text-light">Jr. Fullstack Developer</h5>
            <CTA/>
            <HeaderSocial/>

        <div  className="me">
            <img src={Me} alt="me"/>
            </div>
            
            <a href='#contact' className='scroll_down'>Scroll Down</a>
       
        </div>
        </header>
    )
}
export default Header