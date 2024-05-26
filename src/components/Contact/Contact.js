import React from 'react'
import "./Contact.css"

export default function Contact(){
    return(
        <section className="contact" id='contact'>
            <div className="py-28">
                <div className="text-center">
                    <h2 className="text-blue-600 font-medium text-[20px] max-[769px]:text-[18px] max-[586px]:text-[16px]">Contact me</h2>
                    <h1 className="text-[45px] text-slate-800 font-bold mb-2 max-[769px]:text-[35px] max-[586px]:text-[30px]">Have any Project in Mind?</h1>
                    <p className="text-gray-500 font-medium text-[18px] w-[50%] m-auto max-[769px]:w-[75%] max-[769px]:text-[16px]">I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in my work. If you have a project in mind or simply wish to connect, I'd love to hear from you. 
                    Let's collaborate to bring your vision to life!.</p>
                </div>

                <div className="flex items-center justify-center mt-10">
                    <div className="basis-[800px] bg-white shadow-xl p-[50px] rounded-xl max-[1024px]:basis-[500px] max-[769px]:basis-[450px] max-[769px]:p-[35px] max-[586px]:basis-[350px] max-[586px]:p-[24px]">
                        <form>
                            <input className="text-[17px] text-gray-500 rounded px-4 py-5 border-b-2 bg-gray-50 focus:outline-blue-600 max-[586px]:text-[15px] " type="text" placeholder='Enter your name'/>
                            <input className="text-[17px] text-gray-500 rounded px-4 py-5 border-b-2 bg-gray-50 focus:outline-blue-600 max-[586px]:text-[15px] " type="text" placeholder='Company (optional)'/>
                            <input className="text-[17px] text-gray-500 rounded px-4 py-5 border-b-2 bg-gray-50 focus:outline-blue-600 max-[586px]:text-[15px] " type="email" placeholder='Enter your email'/>
                            <input className="text-[17px] text-gray-500 rounded px-4 py-5 border-b-2 bg-gray-50 focus:outline-blue-600 max-[586px]:text-[15px] " type="telephone" placeholder='Enter your phone number'/>
                            <textarea className="text-gray-500 text-[17px] col-span-2 border px-4 py-5 bg-gray-50 rounded-md focus:outline-blue-600 max-[586px]:text-[15px]  max-[769px]:col-span-1"  
                            cols="20" rows="6" placeholder='Tell us about yourself '></textarea>
                        </form>

                        <div className="flex items-center justify-center mt-10">
                            <button className="text-white bg-blue-600 text-[17px] px-8 py-3 rounded-3xl hover:shadow-lg transition-all">Contact Me</button>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}
