import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation.js';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import Popup from '../components/Popup.jsx';

const ContactSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, once: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    message: '',
    type: 'success'
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'yunus1962000@gmail.com',
      link: 'mailto:yunus1962000@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91-6369307753',
      link: 'tel:+916369307753'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yogesh-s-067535226',
      link: 'https://linkedin.com/in/yogesh-s-067535226'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Chennai, India',
      link: null
    }
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    if (!validateEmail(formData.email)) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_tvpzw47",
        "template_hybb89f",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "GD-g26sDVd5vrH9HM"
      );

      setIsSuccess(true);

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setPopup({
        show: true,
        message: "Message sent successfully! We will contact you soon!",
        type: "success"
      });

      setTimeout(() => {
        setPopup({ show: false, message: '', type: 'success' });
        setIsSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Email error:', error);

      setPopup({
        show: true,
        message: "Failed to send message. Try again later.",
        type: "error"
      });

      setTimeout(() => {
        setPopup({ show: false, message: '', type: 'error' });
      }, 3000);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>

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
            Get In Touch
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"
          />

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>

              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{info.label}</p>
                          <p className="text-white group-hover:text-purple-400 transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                        <div className="text-purple-400">{info.icon}</div>
                        <div>
                          <p className="text-sm text-gray-500">{info.label}</p>
                          <p className="text-white">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
                />

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white resize-none focus:outline-none focus:border-purple-500"
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={{ scale: isSuccess ? 1 : 1.02 }}
                  whileTap={{ scale: isSuccess ? 1 : 0.98 }}
                  className={`w-full px-6 py-4 font-semibold rounded-xl transition-all duration-300 
                  ${isSuccess 
                    ? "bg-green-500 text-white" 
                    : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50"}
                  disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  {isSubmitting
                    ? "Sending..."
                    : isSuccess
                    ? "✅ Message Sent!"
                    : "Send Message"}
                </motion.button>

              </form>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* POPUP MESSAGE */}
      <Popup
        show={popup.show}
        message={popup.message}
        type={popup.type}
        position="bottom"
      />

    </section>
  );
};

export default ContactSection;