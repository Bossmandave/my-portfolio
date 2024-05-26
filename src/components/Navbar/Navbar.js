import React, { useState } from 'react' 
import logo from "../../assets/svg/logo.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navbar(){
    const [fix , setFix] = useState(false)

    function CheckFix(){
        if(window.scrollY >= 70){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }
    window.addEventListener("scroll" , CheckFix)


    return(
        <nav className={fix ? "sticky top-0 bg-transparent shadow z-40 backdrop-blur-sm transition-all" : ""}>
            <div className="nav-container flex items-center justify-around py-4" id='home'>
                <div className="nav-logo">
                    <a href="/"><img src={logo} alt="Logo" /></a>
                </div>
                <div className="nav-links">
                    <ul className="flex gap-12 text-[17px] text-slate-800 max-[769px]:hidden">
                        <li className="hover:text-blue-600 transition-all"><AnchorLink href="#root">Home</AnchorLink></li>
                        <li className="hover:text-blue-600 transition-all"><AnchorLink href="#about">About</AnchorLink></li>
                        <li className="hover:text-blue-600 transition-all" ><AnchorLink href="#service">Services</AnchorLink></li>
                        <li className="hover:text-blue-600 transition-all"><AnchorLink href="#contact">Contact</AnchorLink></li>
                    </ul>
                </div>
                <div className="cta">
                    <button
                    className="border text-white text-[17px] bg-blue-600 px-8 py-3 font-medium rounded-3xl cursor-pointer hover:shadow-xl transition-all max-[769px]:px-6 max-[769px]:py-2 max-[586px]:text-[15px] max-[586px]:px-4 max-[586px]:py-1">
                        <a href="/">Download CV</a>
                    </button>
                </div>
            </div>
        </nav>
    )
}