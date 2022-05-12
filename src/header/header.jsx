import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocial'
import Me from '../needs/me.png'


const Header= () => {
    return (
        <header>
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Nese İlhan</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA/>
            <HeaderSocials/>
        </div>
        <div  className="me">
            <img src={Me} alt="me"/>
        </div>
        </header>
    )
}
export default Header