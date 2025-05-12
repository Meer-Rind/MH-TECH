import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      console.log(result.text);
      setSubmitStatus('success');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
              <FaPaperPlane className="mr-2" />
              Let's Connect
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-dark"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind or want to discuss potential collaboration? We'd love to hear from you.
          </motion.p>
        </motion.div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark">
              Send us a <span className="text-primary">message</span>
            </h2>
            
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start"
                >
                  <FiCheckCircle className="text-green-500 text-xl mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-800">Message Sent!</h4>
                    <p className="text-green-600 text-sm">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start"
                >
                  <FiAlertCircle className="text-red-500 text-xl mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-800">Error Sending Message</h4>
                    <p className="text-red-600 text-sm">Please try again later or contact us directly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name*</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name" 
                  required 
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-gray-50"
                  placeholder="John Doe"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address*</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email" 
                  required 
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-gray-50"
                  placeholder="john@example.com"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject*</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-gray-50"
                  placeholder="How can we help?"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message*</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-gray-50"
                  placeholder="Tell us about your project..."
                ></textarea>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-8 text-dark"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Our <span className="text-primary">contact</span> details
            </motion.h2>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl mr-5">
                <FaMapMarkerAlt size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Our Office</h3>
                <p className="text-gray-600">Jinnah Square Bahria Town Karachi</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary hover:text-accent transition-colors"
                >
                  View on map →
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl mr-5">
                <FaPhone size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Phone</h3>
                <p className="text-gray-600">+92 328-0367971</p>
                <p className="text-gray-600">+92 123-4567890</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl mr-5">
                <FaEnvelope size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Email</h3>
                <a href="mailto:meerdezh@gmail.com" className="block text-gray-600 hover:text-primary transition-colors">meerdezh@gmail.com</a>
                <a href="mailto:contact.mudassirnawaz@gmail.com" className="block text-gray-600 hover:text-primary transition-colors">contact.mudassirnawaz@gmail.com</a>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-5">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl mr-5">
                  <FaClock size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark">Business Hours</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium">Saturday</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between items-center py-3">
                  <span className="font-medium">Sunday</span>
                  <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">Closed</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;