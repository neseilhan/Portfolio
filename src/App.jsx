import React from 'react';
import Header from './header/header';
import Nav from './nav/nav';
import About from './about/about';
import Experience from './experience/experience';
import Services from './services/services';
import Portfolio from './portfolio/portfolio';
import Test from './test/test';
import Contact from './contact/contact';
import Footer from './footer/footer';


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Test/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
