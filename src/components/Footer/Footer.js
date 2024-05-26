import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { IconBxlFacebook, IconLinkedin, IconTwitter, IconGithub } from '../../assets/icons/icon'


export default function Footer(){
    return(
        <section className="footer">
            <div className="relative bg-slate-900 text-white px-20 pt-20 pb-10 max-[586px]:pt-10 max-[586px]:px-10">
                <div className="mb-10 flex items-center justify-start gap-[100px] max-[586px]:gap-[30px] flex-wrap">
                    <div >
                        <h1 className="text-[47px] font-bold mb-2 max-[586px]:text-[35px]">Let's Talk!</h1>
                        <h2 className="text-[25px] font-bold text-gray-300 mb-1">Contact Info</h2>
                        <p className="mb-1 text-gray-400 ">agodidavid004@gmail.com</p>
                        <p className="mb-1 text-gray-400 ">29 Cairo Crescent, PTF Estate Wuse II, Abuja.</p>
                        <p className="text-gray-400 ">+234 9071604370</p>
                    </div>
                    <div>
                        <h1 className="text-[25px] font-semibold mb-5 max-[586px]:text-[20px]">Quick Links</h1>
                        <h2 className="mb-2 text-[17px] hover:text-blue-600 transition-all max-[586px]:text-[16px]"><AnchorLink href="#root">Home</AnchorLink></h2>
                        <h2 className="mb-2 text-[17px] hover:text-blue-600 transition-all max-[586px]:text-[16px]"><AnchorLink href="#about">About</AnchorLink></h2>
                        <h2 className="mb-2 text-[17px] hover:text-blue-600 transition-all max-[586px]:text-[16px]"><AnchorLink href="#service">Services</AnchorLink></h2>
                        <h2 className="text-[17px] hover:text-blue-600 transition-all max-[586px]:text-[16px]"><AnchorLink href="#contact">Contact</AnchorLink></h2>
                    </div>
                </div>
                
                <hr className="opacity-35"/>
                <div className="flex mt-10 gap-4 items-center justify-center">
                        <a href="/">
                            <div className=" text-slate-900 bg-gray-500 transition-all  hover:bg-blue-600 w-10 h-10 rounded-full text-[24px] border flex items-center justify-center"><IconBxlFacebook/></div>
                        </a>
                        <a href="/">
                            <div className=" text-slate-900 bg-gray-500 transition-all  hover:bg-blue-600 w-10 h-10 rounded-full text-[24px] border flex items-center justify-center"><IconTwitter/></div>
                        </a>
                        <a href="https://github.com/Bossmandave/"  rel="noreferrer" target='_blank'>
                            <div className=" text-slate-900 bg-gray-500 transition-all  hover:bg-blue-600 w-10 h-10 rounded-full text-[24px] border flex items-center justify-center"><IconGithub/></div>
                        </a>
                        <a href="/">
                            <div className=" text-slate-900 bg-gray-500 transition-all  hover:bg-blue-600 w-10 h-10 rounded-full text-[24px] border flex items-center justify-center"><IconLinkedin/></div>
                        </a>                        
                </div>

                <svg className='absolute bottom-0 left-0' width="143" height="138" viewBox="0 0 143 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="118" r="101" stroke="url(#paint0_linear_52:83)" strokeWidth="34"></circle>
                        <defs>
                            <linearGradient id="paint0_linear_52:83" x1="-12.7969" y1="-37.3359" x2="99.2109" y2="173.773" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4A6CF7"></stop>
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                </svg>
                <svg className="absolute top-2 right-3" width="61" height="77" viewBox="0 0 61 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                        <circle cx="45.0001" cy="1.66667" r="1.66667" transform="rotate(90 45.0001 1.66667)" fill="white"></circle>
                        <circle cx="16.0001" cy="1.66667" r="1.66667" transform="rotate(90 16.0001 1.66667)" fill="white"></circle>
                        <circle cx="59.0001" cy="1.66667" r="1.66667" transform="rotate(90 59.0001 1.66667)" fill="white"></circle>
                        <circle cx="30.6668" cy="1.66667" r="1.66667" transform="rotate(90 30.6668 1.66667)" fill="white"></circle>
                        <circle cx="1.66683" cy="1.66667" r="1.66667" transform="rotate(90 1.66683 1.66667)" fill="white"></circle>
                        <circle cx="45.0001" cy="16.3332" r="1.66667" transform="rotate(90 45.0001 16.3332)" fill="white"></circle>
                        <circle cx="16.0001" cy="16.3332" r="1.66667" transform="rotate(90 16.0001 16.3332)" fill="white"></circle>
                        <circle cx="59.0001" cy="16.3332" r="1.66667" transform="rotate(90 59.0001 16.3332)" fill="white"></circle>
                        <circle cx="30.6668" cy="16.3332" r="1.66667" transform="rotate(90 30.6668 16.3332)" fill="white"></circle>
                        <circle cx="1.66683" cy="16.3332" r="1.66667" transform="rotate(90 1.66683 16.3332)" fill="white"></circle>
                        <circle cx="45.0001" cy="31.0002" r="1.66667" transform="rotate(90 45.0001 31.0002)" fill="white"></circle>
                        <circle cx="45.0001" cy="74.6667" r="1.66667" transform="rotate(90 45.0001 74.6667)" fill="white"></circle>
                        <circle cx="16.0001" cy="31.0002" r="1.66667" transform="rotate(90 16.0001 31.0002)" fill="white"></circle>
                        <circle cx="16.0001" cy="74.6667" r="1.66667" transform="rotate(90 16.0001 74.6667)" fill="white"></circle>
                        <circle cx="59.0001" cy="31.0002" r="1.66667" transform="rotate(90 59.0001 31.0002)" fill="white"></circle>
                        <circle cx="59.0001" cy="74.6667" r="1.66667" transform="rotate(90 59.0001 74.6667)" fill="white"></circle>
                        <circle cx="30.6668" cy="31.0002" r="1.66667" transform="rotate(90 30.6668 31.0002)" fill="white"></circle>
                        <circle cx="30.6668" cy="74.6667" r="1.66667" transform="rotate(90 30.6668 74.6667)" fill="white"></circle>
                        <circle cx="1.66683" cy="31.0002" r="1.66667" transform="rotate(90 1.66683 31.0002)" fill="white"></circle>
                        <circle cx="1.66683" cy="74.6667" r="1.66667" transform="rotate(90 1.66683 74.6667)" fill="white"></circle>
                        <circle cx="45.0001" cy="45.6667" r="1.66667" transform="rotate(90 45.0001 45.6667)" fill="white"></circle>
                        <circle cx="16.0001" cy="45.6667" r="1.66667" transform="rotate(90 16.0001 45.6667)" fill="white"></circle>
                        <circle cx="59.0001" cy="45.6667" r="1.66667" transform="rotate(90 59.0001 45.6667)" fill="white"></circle>
                        <circle cx="30.6668" cy="45.6667" r="1.66667" transform="rotate(90 30.6668 45.6667)" fill="white"></circle>
                        <circle cx="1.66683" cy="45.6667" r="1.66667" transform="rotate(90 1.66683 45.6667)" fill="white"></circle>
                        <circle cx="45.0001" cy="60.3332" r="1.66667" transform="rotate(90 45.0001 60.3332)" fill="white"></circle>
                        <circle cx="16.0001" cy="60.3332" r="1.66667" transform="rotate(90 16.0001 60.3332)" fill="white"></circle>
                        <circle cx="59.0001" cy="60.3332" r="1.66667" transform="rotate(90 59.0001 60.3332)" fill="white"></circle>
                        <circle cx="30.6668" cy="60.3332" r="1.66667" transform="rotate(90 30.6668 60.3332)" fill="white"></circle>
                        <circle cx="1.66683" cy="60.3332" r="1.66667" transform="rotate(90 1.66683 60.3332)" fill="white"></circle>
                    </g>
                </svg>
            </div>
        </section>
    )
}