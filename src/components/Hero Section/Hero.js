import React from 'react'
import "./Hero.css"
import myPic from "../../assets/images/bgimage2copy.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function HeroSection(){
    return(
        <section className="hero">
            <div className="hero-wrapper relative pt-6">
                <svg className="absolute top-10"width="48" height="95" viewBox="0 0 48 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0.5" cy="47.5" r="47.5" fill="url(#paint0_radial_6:121)"></circle>
                    <defs>
                        <radialGradient id="paint0_radial_6:121" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.5) rotate(90) scale(95)">
                            <stop stopColor="white"></stop>
                            <stop offset="0.569" stopColor="#F0F4FD"></stop>
                            <stop offset="0.993" stopColor="#D9E0F0"></stop>
                        </radialGradient>
                    </defs>
                </svg>
                <div className="my-info flex flex-col justify-center pl-[100px] max-[769px]:pl-[50px]">
                    <h3 className="text-blue-600 font-medium text-[17px] max-[769px]:text-[15px]">Hey There 👋 I am</h3>
                    <h1 className="text-slate-800 font-bold text-[45px] max-[769px]:text-[30px]">Agodi David</h1>
                    <h2 className="text-[20px] font-medium text-gray-500 mb-4 max-[769px]:text-[17px]">Professional <span className="text-slate-800">Frontend Developer</span></h2>
                    <p className="text-gray-500 text-[17px] w-[75%] max-[769px]:w-[80%] max-[769px]:text-[15px] font-medium">Hello and welcome to my corner of the web! I'm a front-end developer with a passion for creating engaging and intuitve digital experiences.</p>

                    <div className="cta mt-10 flex gap-4">
                        <AnchorLink href='#contact'>
                            <button 
                            className="text-white bg-blue-600 px-8 py-3 rounded-3xl font-medium text-[17px] transition-all hover:shadow-xl max-[769px]:px-6 max-[769px]:py-2 max-[769px]:text-[15px]">
                                Contact Me
                            </button>
                        </AnchorLink>
                        <a href="https://github.com/Bossmandave/" rel='noreferrer' target='_blank'>
                            <button
                            className="text-white bg-slate-800 px-8 py-3 rounded-3xl font-medium text-[17px] transition-all hover:shadow-xl max-[769px]:px-6 max-[769px]:py-2 max-[769px]:text-[15px]">
                                Learn More
                            </button>
                        </a>
                        
                    </div>
                </div>
                <div className="relative flex items-center justify-center overflow-hidden">
                    <div className="absolute -bottom-[200px] -right-[250px] w-[700px] bg-blue-600 h-[700px] -z-10 rounded-full max-[586px]:h-[400px] max-[586px]:w-[400px] max-[586px]:-bottom-[50px] max-[586px]:-right-[100px]"></div>
                    <img src={myPic} alt="" />
                    <svg className="absolute bottom-0 left-[120px]" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.31451 3.18282L32.4926 6.24789C36.3084 6.75249 38.147 11.1986 35.8021 14.2508L21.5587 32.7911C19.2138 35.8434 14.444 35.2126 12.9731 31.6558L4.03852 10.0504C2.56762 6.49355 5.49873 2.67822 9.31451 3.18282Z" stroke="#4A6CF7" strokeWidth="6"></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}