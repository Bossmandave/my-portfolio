import React from 'react'

export default function  Resume(){
    return(
        <section className="resume">
            <div className="pt-20">
                <div className="text-center">
                    <h2 className="text-blue-600 font-medium text-[20px] max-[769px]:text-[18px] max-[586px]:text-[16px]">Education & Experience</h2>
                    <h1 className="text-[45px] text-slate-800 font-bold max-[769px]:text-[35px] max-[586px]:text-[30px]">My Resume</h1>
                    <p className="text-gray-500 font-medium text-[18px] w-[50%] m-auto max-[769px]:w-[75%] max-[769px]:text-[16px]">Here you will find a detailed overview of my professional journey, skills, and accomplishments as a Frontend Developer.</p>
                </div>
                <div className="relative my-[50px] pt-[50px]">
                    <span className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[.7px] opacity-30 h-full bg-blue-600 max-[769px]:left-20 max-[586px]:left-7"></span>
                    <div className="relative text-right w-1/2 pr-9 pl-12 mb-10 max-[769px]:text-left max-[769px]:pl-[100px]  max-[769px]:w-full max-[586px]:pl-[50px]">
                        <h1 className="text-[21px] font-medium mb-2 max-[769px]:w-[85%] max-[586px]:text-[18px]">Robotics Intern</h1>
                        <p className="font-medium text-gray-500 text-[17px] mb-1 max-[769px]:w-[85%] max-[586px]:text-[16px]">Baun Robotics | Abuja</p>
                        <h2 className="bg-blue-600 text-white text-[13px] px-3 py-[6px] rounded-3xl inline-block">2021 - 2022</h2>
                        <p className="font-medium text-gray-500 text-[17px] mt-2 max-[769px]:w-[90%] max-[586px]:text-[16px]">During my internship at Baun Robotics, had the opportunity to work on cutting-edge robotics projects, collaborating with a dynamic team of engineers and developers.</p>
                        <div className="absolute top-2 -right-[8px] w-[16px] h-[16px] border-4 border-blue-600 rounded-full max-[769px]:left-[72px] max-[586px]:left-[20px]"></div>
                    </div>

                    <div className="relative text-left w-1/2 ml-[50%] pr-9 pl-12 mb-10 max-[769px]:ml-[80px] max-[769px]:pl-6 max-[769px]:w-[90%] max-[586px]:ml-[28px]">
                        <h1 className="text-[21px] font-medium mb-2 max-[769px]:w-[85%] max-[586px]:text-[18px]">ICT Intern </h1>
                        <p className="font-medium text-gray-500 text-[17px] mb-1 max-[769px]:w-[85%] max-[586px]:text-[16px]">NEITI HOUSE | Abuja </p>
                        <h2 className="bg-blue-600 text-white text-[13px] px-3 py-[6px] rounded-3xl inline-block ">2014 - 2016 </h2>
                        <p className="font-medium text-gray-500 text-[17px] mt-2 max-[769px]:w-[90%] max-[586px]:text-[16px]">Gained comprehensive experience in various aspects of ICT, including system administration, network management, and technical support. Developing a broad skill set, contributing to the efficient operation of the company’s IT infrastructure.</p>
                        <div className="absolute top-2 -left-[8px] w-[16px] h-[16px] border-4 border-blue-600 rounded-full"></div>
                    </div>

                    <div className="relative text-right w-1/2 pr-9 pl-12 mb-10 max-[769px]:text-left max-[769px]:pl-[100px]  max-[769px]:w-full max-[586px]:pl-[50px]">
                        <h1 className="text-[21px] font-medium mb-2 max-[769px]:w-[85%] max-[586px]:text-[18px]">Front-end development Intern</h1>
                        <p className="font-medium text-gray-500 text-[17px] mb-1 max-[769px]:w-[85%] max-[586px]:text-[16px]">Juray Smart Solutions | Abuja</p>
                        <h2 className="bg-blue-600 text-white text-[13px] px-3 py-[6px] rounded-3xl inline-block">2024 - Till Date</h2>
                        <p className="font-medium text-gray-500 text-[17px] mt-2 max-[769px]:w-[90%] max-[586px]:text-[16px] "> Acquired hands-on experience in building and enhancing user interfaces for web applications. Working closely with a team of developers and designers to create engaging, responsive, and accessible web experiences.</p>
                        <div className="absolute top-2 -right-[8px] w-[16px] h-[16px] border-4 border-blue-600 rounded-full max-[769px]:left-[72px] max-[586px]:left-[20px]"></div>
                    </div>

                    <div className="relative text-left w-1/2 ml-[50%] pr-9 pl-12 pb-10 max-[769px]:ml-[80px] max-[769px]:pl-6 max-[769px]:w-[90%] max-[586px]:ml-[28px]">
                        <h1 className="text-[21px] font-medium mb-2 max-[769px]:w-[85%] max-[586px]:text-[18px]">Bachelor Degree (Mechatronics Engineering)</h1>
                        <p className="font-medium text-gray-500 text-[17px] mb-1 max-[769px]:w-[85%] max-[586px]:text-[16px]">Afe Babalola University | Ado-Ekiti</p>
                        <h2 className="bg-blue-600 text-white text-[13px] px-3 py-[6px] rounded-3xl inline-block">2020 - Till Date</h2>
                        <p className="font-medium text-gray-500 text-[17px] mt-2 max-[769px]:w-[90%] max-[586px]:text-[16px]">Gained a comprehensive understanding of the interdisciplinary field combining mechanical, electronics, computer science, and control engineering. During my studies, developed a robust skill set and theoretical knowledge that has prepared me for a career in robotics and automation.</p>
                        <div className="absolute top-2 -left-[8px] w-[16px] h-[16px] border-4 border-blue-600 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}