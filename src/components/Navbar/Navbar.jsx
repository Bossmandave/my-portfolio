import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navbar() {
  const [fix, setFix] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function checkFix() {
      if (window.scrollY >= 70) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
    window.addEventListener('scroll', checkFix);
    return () => window.removeEventListener('scroll', checkFix);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#root', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#service', label: 'Services' },
    { href: '#works', label: 'Works' },
    { href: '#contact', label: 'Contact' },
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: '#2563eb',
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={
          fix
            ? 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all'
            : 'sticky top-0 bg-white/80 backdrop-blur-sm z-50 transition-all'
        }
      >
        <div className="nav-container flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8 py-4" id="home">
          {/* Modern Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-3 group z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLinkClick}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">AD</span>
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-20 blur"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
            <div className="hidden sm:block">
              <div className="text-slate-800 font-bold text-xl tracking-tight">
                Agodi David
              </div>
              <div className="text-gray-500 text-xs font-medium">
                Frontend Developer
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="nav-links hidden md:flex items-center gap-8">
            <ul className="flex gap-8 text-base text-slate-700">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  variants={linkVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AnchorLink
                    href={link.href}
                    className="relative hover:text-blue-600 transition-colors cursor-pointer font-medium"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnchorLink>
                </motion.li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <motion.a
              href="/resume.pdf"
              download="Agodi_David_Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base px-6 py-2.5 font-semibold rounded-xl cursor-pointer hover:shadow-xl transition-all"
            >
              Download CV
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden z-50 relative"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-slate-800 rounded origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: '100%' }}
                className="h-0.5 bg-slate-800 rounded"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-slate-800 rounded origin-center"
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AD</span>
                    </div>
                    <div>
                      <div className="text-slate-800 font-bold text-lg">Agodi David</div>
                      <div className="text-gray-500 text-xs">Frontend Developer</div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <AnchorLink
                          href={link.href}
                          className="block px-4 py-3 text-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all font-medium"
                          onClick={handleLinkClick}
                        >
                          {link.label}
                        </AnchorLink>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer CTA */}
                <div className="p-6 border-t border-gray-200">
                  <motion.a
                    href="/resume.pdf"
                    download="Agodi_David_Resume.pdf"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-6 font-semibold rounded-xl hover:shadow-lg transition-all"
                    onClick={handleLinkClick}
                  >
                    Download CV
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
