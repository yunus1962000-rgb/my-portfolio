import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js';
import { fadeInUp, slideInLeft, slideInRight } from '../hooks/useScrollAnimation.js';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, once: true });

  const experiences = [
    {
      title: 'Web Developer',
      company: 'TeraLumen Solutions Pvt Ltd',
      location: 'Chennai',
      period: 'Jun 2025 - Present',
      responsibilities: [
        'Developed responsive web applications using MERN stack and WordPress',
        'Built and maintained RESTful APIs with Node.js and Express.js',
        'Monitored website performance using Google Analytics and Search Console',
        'Optimized SEO, performance, and cross-browser compatibility',
        'Managed LinkedIn company pages and created design-driven content to improve brand visibility'
      ]
    },
    {
      title: 'Web Designer & Developer',
      company: 'APS Infotech Solution',
      location: 'Virudhunagar',
      period: 'May 2024 - May 2025',
      responsibilities: [
        'Built full-stack applications using MongoDB, Express.js, React.js, and Node.js',
        'Developed reusable React components and responsive UI layouts',
        'Implemented authentication, CRUD operations, and backend business logic',
        'Converted Figma designs into production-ready web applications'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-900/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"
          ></motion.div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isVisible ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 hidden md:block"
            ></motion.div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 z-10"
                  ></motion.div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-2 mb-3 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                        <Briefcase size={20} />
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                      </div>

                      <p className="text-lg font-semibold text-gray-300 mb-2">
                        {exp.company}
                      </p>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 text-gray-400">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            transition={{ delay: index * 0.2 + respIndex * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            <span className="text-sm">{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Spacer for timeline */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;