import React, { useState } from 'react'
import './nav.css'
import {BiHomeHeart} from "react-icons/bi"
import {RiUser5Line} from "react-icons/ri"
import {RiServiceLine} from 'react-icons/ri'
import {BiBookBookmark} from "react-icons/bi"
import {BiMessageAltDots} from "react-icons/bi"
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href='#' ><BiHomeHeart size={25}/></a>
      <a href='#about'  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUser5Line size={25}/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BiBookBookmark size={25}/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><RiServiceLine size={25}/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDots size={25}/></a>
    </nav>
  )
}

export default Nav