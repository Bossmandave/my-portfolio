import React from 'react';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  IconBxlFacebook,
  IconLinkedin,
  IconTwitter,
  IconGithub,
} from '../../assets/icons/icon';

// Simple SVG Icon Components
const MailIcon = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MapPinIcon = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { 
      icon: <IconBxlFacebook />, 
      href: '/', 
      label: 'Facebook',
      bgHover: 'hover:bg-[#1877F2]'
    },
    { 
      icon: <IconTwitter />, 
      href: '/', 
      label: 'Twitter',
      bgHover: 'hover:bg-[#1DA1F2]'
    },
    {
      icon: <IconGithub />,
      href: 'https://github.com/Bossmandave/',
      label: 'GitHub',
      bgHover: 'hover:bg-gray-800'
    },
    { 
      icon: <IconLinkedin />, 
      href: 'http://linkedin.com/in/agodi-david-369a88283', 
      label: 'LinkedIn',
      bgHover: 'hover:bg-[#0077B5]'
    },
  ];

  const quickLinks = [
    { href: '#root', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#service', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Agodi David
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Frontend Developer passionate about creating beautiful, functional, and user-friendly web experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noreferrer' : ''}
                  className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white transition-all duration-300 ${social.bgHover} border border-slate-700 hover:border-transparent`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AnchorLink
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </AnchorLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <MailIcon className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <a
                  href="mailto:agodidavid004@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200 break-all"
                >
                  agodidavid004@gmail.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <PhoneIcon className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <a
                  href="tel:+2349071604370"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +234 9071604370
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <MapPinIcon className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400">
                  Phase 20,Tpumpy Estate Lugbe, Abuja, Nigeria
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="border-slate-800 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* Copyright */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            © {new Date().getFullYear()} Agodi David. All rights reserved.
          </p>
          <p className="text-gray-500">
            Built with <span className="text-red-500">❤</span> using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
