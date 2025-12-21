import React from 'react';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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

  return (
    <section className="hero min-h-screen flex items-center justify-center md:py-20 py-10 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm md:text-base font-medium mb-6"
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            ⚡
          </motion.span>
          <span>Available for new opportunities</span>
        </motion.div>

        <motion.h3
          variants={itemVariants}
          className="text-blue-600 font-semibold text-lg md:text-xl mb-4"
        >
          Hey There 👋 I am
        </motion.h3>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight"
        >
          Agodi David
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6"
        >
          Professional{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frontend Developer
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-600 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          I create engaging and intuitive digital experiences with modern web technologies.
          Let's build something amazing together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <AnchorLink href="#contact">
              <button className="text-white bg-gradient-to-r from-blue-600 to-purple-600 px-8 md:px-10 py-4 md:py-4 rounded-2xl font-semibold text-lg md:text-xl transition-all hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1">
                Contact Me
              </button>
            </AnchorLink>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://github.com/Bossmandave/"
              rel="noreferrer"
              target="_blank"
              className="block"
            >
              <button className="text-slate-800 bg-white border-2 border-slate-300 px-8 md:px-10 py-4 md:py-4 rounded-2xl font-semibold text-lg md:text-xl transition-all hover:shadow-xl hover:border-blue-600 hover:text-blue-600 transform hover:-translate-y-1">
                View My Work
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <AnchorLink href="#about" className="block">
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              whileHover={{ borderColor: '#2563eb' }}
            >
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ backgroundColor: '#2563eb' }}
              />
            </motion.div>
          </AnchorLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
