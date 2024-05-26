import React from 'react'
import "./Services.css"
import { IconAccountGroup, IconLayoutGridAdd, IconMaterialdesignicons, IconUserSearchFill } from '../../assets/icons/icon'


function ServiceCard({icon, text, note}){
    return(
        <div className="service-card relative rounded-2xl shadow-lg py-10 px-7 text-center transition-all hover:bg-blue-600 hover:text-white isolate">
            <div className="icon h-[75px] w-[75px] rounded-full bg-blue-600 text-white flex items-center justify-center text-[35px] m-auto mb-6">
                {icon}
            </div>
            <h1 className="text-[25px] font-semibold mb-3 max-[769px]:text-[22px] max-[586px]:text-[20px]">{text}</h1>
            <p className="note text-gray-500 text-[16px] font-medium max-[586px]:text-[15px]">{note}</p>
            <svg className="absolute bottom-2 left-2" width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white"></circle>
                <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white"></circle>
                <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white"></circle>
                <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white"></circle>
                <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white"></circle>
                <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white"></circle>
                <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white"></circle>
                <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white"></circle>
                <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white"></circle>
                <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white"></circle>
                <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white"></circle>
                <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white"></circle>
            </svg>

            <svg className="absolute top-0 right-0 -z-10" width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
            </svg>
        </div>
    )
}
export default function Services(){
    return(
        <section className="services" id='service'>
            <div className="pt-28 "> 
                <div className="text-center">
                    <h3 className="text-blue-600 text-[20px] font-medium  max-[769px]:text-[18px] max-[586px]:text-[16px]">What I Offer</h3>
                    <h1 className="text-[45px] text-slate-800 font-bold mb-2 max-[769px]:text-[35px] max-[586px]:text-[30px]">My Services</h1>
                    <p className="text-gray-500 text-[18px] font-medium w-[50%] m-auto max-[769px]:w-[75%] max-[769px]:text-[16px]">
                        Specializes in crafting visually stunning and user-friendly websites that are responsive across all devices.</p>
                </div>
            </div>
            <div className="service-grid px-[60px] my-[70px] max-[586px]:px-[15px]">
                <ServiceCard text="Front-end Frameworks" icon={<IconUserSearchFill/>} note="Utilizing libraries like React, Angular, or Vue.js to streamline development"/>
                <ServiceCard text="Responsive Web Design" icon={<IconMaterialdesignicons/>} note="Ensure that websites are visually appealing and functional across various devices and screen sizes"/>
                <ServiceCard text="User Interface (UI) Design" icon={<IconAccountGroup/>} note="Collaborate with designers to translate visual mockups into interactive user interfaces."/>
                <ServiceCard text="Performance Optimization" icon={<IconLayoutGridAdd/>} note="Optimizing code and assets to improve loading times and overall performance"/>
            </div>
        </section>
    )
}