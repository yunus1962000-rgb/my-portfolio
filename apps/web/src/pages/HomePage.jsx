import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Header from '../components/Header.jsx';
import AboutSection from '../components/AboutSection.jsx';
import SkillsSection from '../components/SkillsSection.jsx';
import ExperienceSection from '../components/ExperienceSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import ContactSection from '../components/ContactSection.jsx';

const HomePage = () => {
  const scrollY = useScrollAnimation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Parallax effect calculation
  const parallaxOffset = scrollY * 0.5;

  // Animated text for name
  const nameLetters = "Yogesh S".split("");

  return (
    <>
      <Helmet>
        <title>Yogesh S - MERN Stack Developer | Portfolio</title>
        <meta name="description" content="MERN Stack Developer with 2 years of experience building scalable web applications. Expertise in React, Node.js, MongoDB, Express, WordPress, and modern web technologies." />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white">
        <Header />

        {/* Hero Section */}
        <section 
          id="home" 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Image with Parallax */}
          <div 
            className="absolute inset-0 z-0"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1689028294160-e78a88abcb19)',
                filter: 'brightness(0.3)'
              }}
            ></div>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950"></div>
          </div>

          {/* Animated gradient background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-shift"></div>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, 40, 0],
                x: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"
            ></motion.div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Animated greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-purple-400 mb-4 font-medium"
              >
                Hello, I'm
              </motion.p>

              {/* Animated name with staggered letters */}
              <div className="mb-6 overflow-hidden">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                  {nameLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </h1>
              </div>

              {/* Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6"
              >
                MERN Stack Developer
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
              >
                Building scalable web applications with modern technologies and creative solutions
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base text-gray-400"
              >
                <a href="mailto:yunus1962000@gmail.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300">
                  <Mail size={18} />
                  yunus1962000@gmail.com
                </a>
                <span className="hidden md:inline">|</span>
                <a href="tel:+916369307753" className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300">
                  +91-6369307753
                </a>
                <span className="hidden md:inline">|</span>
                <span className="flex items-center gap-2">
                  Chennai, India
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-purple-500/50 text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-300"
                >
                  View Projects
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex justify-center gap-6"
              >
                <motion.a
                  href="https://linkedin.com/in/yogesh-s-067535226"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:rajy22908@gmail.com"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
                >
                  <Mail size={24} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
                >
                  <Github size={24} />
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </motion.button>
          </motion.div>
        </section>

        {/* Sections */}
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="bg-slate-950 border-t border-slate-800 py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">
              © 2026 Yogesh S. Built with React, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
