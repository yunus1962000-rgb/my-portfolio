import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation.js';
import { Code2, Rocket, Zap } from 'lucide-react';

const AboutSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, once: true });

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Full-Stack Expertise',
      description: 'Proficient in MERN stack development with 2 years of hands-on experience'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Scalable Solutions',
      description: 'Building robust, scalable web applications with modern best practices'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Focused',
      description: 'Optimizing applications for speed, SEO, and exceptional user experience'
    }
  ];

  const imageEntranceVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"
          ></motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image */}
            <motion.div 
              variants={imageEntranceVariant}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-sm"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 2,
                    boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5)"
                  }}
                  className="relative rounded-3xl aspect-square p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50"></div>
                  <img 
                    src="https://horizons-cdn.hostinger.com/d0234c1e-4bcf-4363-b908-f75771479572/5ef4f61180c08c0aa39048f9f64e0a93.webp" 
                    alt="Yogesh S - Professional Portrait" 
                    className="relative z-10 w-full h-full object-cover rounded-[22px]"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column: Text & Cards */}
            <div className="lg:col-span-7 space-y-8">
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-300 leading-relaxed text-center lg:text-left"
              >
                MERN Stack Developer with 2 years of experience building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Strong expertise in RESTful APIs, JWT authentication, role-based access control, responsive UI development, and database design. Experienced in WordPress, SharePoint, Power Apps, Power Automate, Google Analytics, and Search Console, with a solid foundation in UI/UX design and performance optimization.
              </motion.p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group shadow-lg"
                  >
                    <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;