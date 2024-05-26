import React from 'react'
import "./About.css"
import { IconBxlFacebook, IconGithub, IconLinkedin, IconTwitter } from '../../assets/icons/icon'

export default function About(){
    return(
        <section className="about" id='about'>
            <div className="about-wrapper pt-36 pb-16">
                <div className="pl-[100px] max-[1024px]:pl-[20px]">
                    <h2 className="text-blue-600 font-bold text-[20px] mb-2">ABOUT ME</h2>
                    <h1 className="text-[45px] text-slate-900 font-bold w-[70%] leading-[50px] mb-5 max-[769px]:text-[30px] max-[769px]:leading-[40px] max-[769px]:w-[90%] ">Better Web Pages, better experience</h1>
                    <p className="text-gray-500 text-[17px] w-[90%] font-medium max-[769px]:text-[16px] max-[769px]:w-[90%]">
                        With expertise in HTML, CSS, JavaScript, Git and front-end frameworks like React JS and Tailwind CSS, bringing your digital ideas to life, tailoring solutions to meet your specific needs. From custom animations to seamless user experiences ensuring that every project is not only aesthetically pleasing but also highly functional. Let's collaborate and bring your vision to the digital world.</p>
                </div>

                <div className="px-20 max-[1024px]:px-[20px] relative">
                    <svg className="absolute top-20 right-0 -z-10" width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="60" r="60" fill="url(#paint0_radial_18:24)"></circle>
                        <defs>
                            <radialGradient id="paint0_radial_18:24" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60) rotate(90) scale(120)">
                                <stop stopColor="white"></stop>
                                <stop offset="0.569" stopColor="#F0F4FD"></stop>
                                <stop offset="0.993" stopColor="#D9E0F0"></stop>
                            </radialGradient>
                        </defs>
                    </svg>
                    <h2 className="text-[30px] font-medium mb-3 max-[769px]:text-[20px]">Connect With Me</h2>
                    <p className="text-gray-500 text-[17px] font-medium max-[769px]:text-[16px] max-[769px]:w-[90%]">Challenges me to push the boundaries of what's possible on the web, whether it's building intricate user interfaces, optimizing web performance, or ensuring cross-browser compatibility. Dedicated to delivering top-notch solutions.</p>
                    <div className="flex mt-10 gap-4">
                        <a href="/">
                            <div className=" text-gray-400 transition-all hover:text-white hover:bg-blue-600 w-9 h-9 rounded-full text-[20px] border flex items-center justify-center"><IconBxlFacebook/></div>
                        </a>
                        <a href="/">
                            <div className=" text-gray-400 transition-all hover:text-white hover:bg-blue-600 w-9 h-9 rounded-full text-[20px] border flex items-center justify-center"><IconTwitter/></div>
                        </a>
                        <a href="https://github.com/Bossmandave/" rel='noreferrer' target='_blank'>
                            <div className=" text-gray-400 transition-all hover:text-white hover:bg-blue-600 w-9 h-9 rounded-full text-[20px] border flex items-center justify-center"><IconGithub/></div>
                        </a>
                        <a href="/">
                            <div className=" text-gray-400 transition-all hover:text-white hover:bg-blue-600 w-9 h-9 rounded-full text-[20px] border flex items-center justify-center"><IconLinkedin/></div>
                        </a>                        
                    </div>
                </div>
            </div>
            <hr className='w-[85%] m-auto'/>
        </section>
    )
}