import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation.js';

const SkillsSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, once: true });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript ES6+', level: 88 },
        { name: 'HTML5 & CSS3', level: 92 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Redux', level: 75 },
        { name: 'Framer Motion', level: 78 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'JWT Authentication', level: 85 },
        { name: 'Role-Based Access Control', level: 82 }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 }
      ]
    },
    {
      category: 'CMS & E-Commerce',
      skills: [
        { name: 'WordPress', level: 88 },
        { name: 'WooCommerce', level: 82 },
        { name: 'Elementor', level: 85 }
      ]
    },
    {
      category: 'Low-Code/Automation',
      skills: [
        { name: 'SharePoint Online', level: 80 },
        { name: 'Power Apps', level: 78 },
        { name: 'Power Automate', level: 75 }
      ]
    },
    {
      category: 'Analytics',
      skills: [
        { name: 'Google Analytics', level: 82 },
        { name: 'Google Search Console', level: 80 },
        { name: 'Performance Monitoring', level: 78 },
        { name: 'SEO', level: 75 }
      ]
    },
    {
      category: 'UI/UX & Design',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Wireframing', level: 80 },
        { name: 'Prototyping', level: 78 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      category: 'Digital Marketing',
      skills: [
        { name: 'LinkedIn Page Management', level: 82 },
        { name: 'Social Media Marketing', level: 78 },
        { name: 'Content Creation', level: 80 },
        { name: 'Post Design', level: 75 }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'GitHub', level: 85 },
        { name: 'Postman', level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Skills & Expertise
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"
          ></motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={fadeInUp}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  {category.category}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-purple-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: 'easeOut'
                          }}
                          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-300"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;