import React from 'react'
import project1 from "../../assets/images/project-1.png"
import "./Work.css"
export default function Works(){
    return(
        <section className="recent-works">
            <div className="text-center py-20 bg-neutral-50">
                <div>
                    <h2 className="text-blue-600 font-medium text-[22px] max-[769px]:text-[19px] max-[586px]:text-[17px">Creative Portfolios</h2>
                    <h1 className="text-[45px] text-slate-800 font-bold max-[769px]:text-[35px] max-[586px]:text-[30px]">Recent Works</h1>
                    <p className="text-gray-500 font-medium text-[18px] w-[50%] m-auto max-[769px]:w-[75%] max-[769px]:text-[16px]">I invite you to peruse my portfolio, where you will find a curated selection of projects that showcase my expertise and creativity. Click on each project to see more details.</p>
                </div>
                <div className="flex items-center justify-center mt-20">
                    <div className="basis-[70%] max-[769px]:basis-[95%]">
                        <div className="works shadow-lg relative">
                            <img src={project1} alt="Project 1" />
                            <div className="overlay absolute w-full h-full bg-transparent backdrop-blur top-0 right-0 flex items-center justify-center transition-all">
                                <a href="https://appline-template.vercel.app/" rel='noreferrer' target='_blank'>
                                    <div className="w-20 h-10 bg-blue-600 text-white text-[17px] flex items-center justify-center rounded-full max-[586px]:text-[15px] max-[586px]:w-16 max-[586px]:h-8">
                                        <h1>View     &gt;</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                        <h1 className="text-[21px] text-slate-800 font-semibold mt-8 text-start max-[769px]:text-[18px]">Appline Template Website</h1>
                        <p className="text-[17px] text-gray-400 font-normal mt-2 text-start max-[769px]:w-[95%] max-[769px]:text-[16px]">A multi-purpose and multi-page template website consisting all sections in a webpage and can be easily tailored to a custom website.</p>
                        <h2 className="text-[19px] text-slate-700 font-normal mt-2 text-start max-[769px]:w-[95%] max-[769px]:text-[17px]">Technologies Used: React Js , Vanilla CSS</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}