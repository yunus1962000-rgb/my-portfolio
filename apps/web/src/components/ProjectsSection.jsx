import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js';
import { fadeInUp, scaleIn, staggerContainer } from '../hooks/useScrollAnimation.js';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, once: true });

  const projects = [
    {
      title: 'Employee Management System',
      tech: 'MERN Stack',
      description: 'Developed a full-stack CRUD application using MongoDB, Express.js, React.js, and Node.js. Implemented JWT-based authentication and role-based access control. Built admin dashboards with real-time data updates.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'REST API'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Inventory Management System',
      tech: 'SharePoint, Power Apps, Power Automate',
      description: 'Built a secure inventory system using SharePoint Online Lists. Implemented role-based access, user-specific visibility, and permission controls. Automated workflows using Power Automate. Customized forms in Power Apps with validation and conditional formatting. Integrated external SharePoint lists for lookup and reference data.',
      tags: ['SharePoint', 'Power Apps', 'Power Automate', 'Workflows', 'Forms'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Sleep & Bird – WooCommerce E-Commerce',
      tech: 'WordPress & WooCommerce',
      description: 'Built a mobile-responsive e-commerce website using WordPress and WooCommerce. Integrated payment gateways, product management, and inventory handling. Designed UI using Elementor and optimized performance and conversions.',
      tags: ['WordPress', 'WooCommerce', 'Elementor', 'E-Commerce', 'Payment Gateway'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            Featured Projects
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"
          ></motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative p-6">
                  {/* Project header */}
                  <div className="mb-4">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white mb-3`}>
                      {project.tech}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-800 text-gray-300 text-xs rounded-md border border-slate-700 group-hover:border-purple-500/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4 border-t border-slate-800">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-purple-600 text-white rounded-lg transition-colors duration-300 text-sm"
                    >
                      <ExternalLink size={16} />
                      View
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </motion.button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;