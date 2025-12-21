import React from 'react';
import { motion } from 'framer-motion';
import {
  IconBxlFacebook,
  IconGithub,
  IconLinkedin,
  IconTwitter,
} from '../../assets/icons/icon';
import {
  TypeScriptIcon,
  NextJsIcon,
  ReactIcon,
  TailwindIcon,
  FirebaseIcon,
  FramerIcon,
  GitIcon,
  GitHubIcon,
} from './TechIcons';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const techStack = [
    { 
      name: 'TypeScript', 
      Icon: TypeScriptIcon,
      iconColor: 'text-blue-600',
      color: 'hover:border-blue-600'
    },
    { 
      name: 'Next.js', 
      Icon: NextJsIcon,
      iconColor: 'text-slate-900',
      color: 'hover:border-slate-900'
    },
    { 
      name: 'React', 
      Icon: ReactIcon,
      iconColor: 'text-cyan-500',
      color: 'hover:border-cyan-500'
    },
    { 
      name: 'Tailwind CSS', 
      Icon: TailwindIcon,
      iconColor: 'text-teal-500',
      color: 'hover:border-teal-500'
    },
    { 
      name: 'Firebase', 
      Icon: FirebaseIcon,
      iconColor: 'text-orange-500',
      color: 'hover:border-orange-500'
    },
    { 
      name: 'Framer Motion', 
      Icon: FramerIcon,
      iconColor: 'text-purple-600',
      color: 'hover:border-purple-600'
    },
    { 
      name: 'Git', 
      Icon: GitIcon,
      iconColor: 'text-orange-600',
      color: 'hover:border-orange-600'
    },
    { 
      name: 'GitHub', 
      Icon: GitHubIcon,
      iconColor: 'text-gray-800',
      color: 'hover:border-gray-800'
    },
  ];

  const socialLinks = [
    { icon: <IconBxlFacebook />, href: '/', label: 'Facebook' },
    { icon: <IconTwitter />, href: '/', label: 'Twitter' },
    {
      icon: <IconGithub />,
      href: 'https://github.com/Bossmandave/',
      label: 'GitHub',
    },
    { icon: <IconLinkedin />, href: 'http://linkedin.com/in/agodi-david-369a88283', label: 'LinkedIn' },
  ];

  return (
    <section className="about py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-blue-600 font-bold text-lg md:text-xl mb-3 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            ABOUT ME
          </motion.h2>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl text-slate-900 font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Crafting Modern Web Experiences
          </motion.h1>
          <motion.p
            className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm a passionate frontend developer specializing in building scalable, performant, and
            user-friendly web applications using cutting-edge technologies.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - Bio */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                With expertise in modern web technologies, I bring digital ideas to life by creating
                tailored solutions that meet specific needs. From custom animations to seamless user
                experiences, I ensure that every project is not only aesthetically pleasing but also
                highly functional and performant.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                I'm dedicated to staying updated with the latest industry trends and best practices,
                constantly improving my skills to deliver exceptional results. Let's collaborate and
                bring your vision to the digital world.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => {
                  const IconComponent = tech.Icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, type: 'spring' }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group cursor-pointer"
                    >
                      <div className={`px-4 py-2.5 bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all ${tech.color} flex items-center gap-2.5`}>
                        <div className="inline-flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                          <IconComponent className={tech.iconColor} size={24} />
                        </div>
                        <span className="text-slate-700 font-medium text-sm md:text-base group-hover:text-blue-600 transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Connect */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Let's Connect
              </motion.h2>
              <motion.p
                className="text-gray-600 text-base md:text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Challenges motivate me to push the boundaries of what's possible on the web. Whether
                it's building intricate user interfaces, optimizing web performance, or ensuring
                cross-browser compatibility, I'm dedicated to delivering top-notch solutions.
              </motion.p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Find me on</h3>
              <motion.div
                className="flex gap-4 flex-wrap"
                variants={containerVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noreferrer' : ''}
                    variants={itemVariants}
                    whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 transition-all hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 w-14 h-14 rounded-xl text-2xl border-2 border-gray-200 hover:border-transparent flex items-center justify-center cursor-pointer shadow-sm hover:shadow-lg"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <hr className="w-11/12 max-w-7xl mx-auto mt-16 border-gray-200" />
    </section>
  );
}
