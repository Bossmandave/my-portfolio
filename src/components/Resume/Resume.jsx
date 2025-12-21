import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const timelineItems = [
    {
      title: 'Front-end Developer',
      company: 'BrandDrive',
      period: '2025 - Till Date',
      description:
        'Developing and maintaining high-quality frontend applications using modern web technologies. Collaborating with cross-functional teams to deliver exceptional user experiences and drive business growth.',
      side: 'left',
    },
    {
      title: 'Front-end development Intern',
      company: 'Juray Smart Solutions | Abuja',
      period: '2024 - 2024',
      description:
        'Acquired hands-on experience in building and enhancing user interfaces for web applications. Working closely with a team of developers and designers to create engaging, responsive, and accessible web experiences.',
      side: 'right',
    },
    {
      title: 'Robotics Intern',
      company: 'Baun Robotics | Abuja',
      period: '2021 - 2022',
      description:
        'During my internship at Baun Robotics, had the opportunity to work on cutting-edge robotics projects, collaborating with a dynamic team of engineers and developers.',
      side: 'left',
    },
    {
      title: 'ICT Intern',
      company: 'NEITI HOUSE | Abuja',
      period: '2014 - 2016',
      description:
        'Gained comprehensive experience in various aspects of ICT, including system administration, network management, and technical support. Developing a broad skill set, contributing to the efficient operation of the company\'s IT infrastructure.',
      side: 'right',
    },
    {
      title: 'Bachelor Degree (Mechatronics Engineering)',
      company: 'Afe Babalola University | Ado-Ekiti',
      period: '2020 - 2025',
      description:
        'Gained a comprehensive understanding of the interdisciplinary field combining mechanical, electronics, computer science, and control engineering. During my studies, developed a robust skill set and theoretical knowledge that has prepared me for a career in robotics and automation.',
      side: 'left',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="resume py-20 px-4 md:px-8 lg:px-16">
      <motion.div
        className="pt-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-blue-600 font-medium text-lg md:text-xl mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Education & Experience
          </motion.h2>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl text-slate-800 font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My Resume
          </motion.h1>
          <motion.p
            className="text-gray-500 font-medium text-base md:text-lg w-full md:w-3/4 lg:w-1/2 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Here you will find a detailed overview of my professional journey, skills, and
            accomplishments as a Frontend Developer.
          </motion.p>
        </div>

        <motion.div
          className="relative my-12 md:my-16 pt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline Line */}
          <motion.span
            className="absolute top-0 left-1/2 md:left-1/2 -translate-x-1/2 w-0.5 opacity-30 h-full bg-blue-600 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />
          <motion.span
            className="absolute top-0 left-8 md:left-1/2 md:-translate-x-1/2 w-0.5 opacity-30 h-full bg-blue-600 block md:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />

          {timelineItems.map((item, index) => {
            const isLeft = item.side === 'left';

            return (
              <motion.div
                key={index}
                className={`relative ${
                  isLeft && !isMobile
                    ? 'text-right w-1/2 pr-8 pl-12 mb-10 md:mb-12'
                    : isMobile
                    ? 'text-left w-full pl-20 pr-4 mb-10'
                    : 'text-left w-1/2 ml-[50%] pr-12 pl-8 mb-10 md:mb-12'
                }`}
                variants={isLeft && !isMobile ? itemVariants : rightItemVariants}
              >
                <motion.h1
                  className="text-lg md:text-xl lg:text-2xl font-medium mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h1>
                <p className="font-medium text-gray-500 text-base md:text-lg mb-2">
                  {item.company}
                </p>
                <motion.h2
                  className="bg-blue-600 text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-3xl inline-block mb-3"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.period}
                </motion.h2>
                <p className="font-medium text-gray-500 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>

                {/* Timeline Dot */}
                <motion.div
                  className={`absolute top-2 ${
                    isLeft && !isMobile
                      ? '-right-2 md:-right-2'
                      : isMobile
                      ? '-left-3 md:-left-2'
                      : '-left-2 md:-left-2'
                  } w-4 h-4 border-4 border-blue-600 rounded-full bg-white`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, type: 'spring' }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
