import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../Hero Section/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Works from '../Recent Works/Works'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export default function Layout(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <About/>
            <Services/>
            <Works/>
            <Resume/>
            <Contact/>
            <Footer/>
        </>
    )
}