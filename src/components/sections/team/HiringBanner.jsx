import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HiringBanner = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-dark via-primary to-secondary text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white opacity-10 mix-blend-overlay filter blur-[100px]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white opacity-10 mix-blend-overlay filter blur-[100px]" />
      
      {/* Floating shapes */}
      <motion.div 
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
      />
      <motion.div 
        animate={{
          y: [0, -20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
      />
      
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 100,
            damping: 10,
            duration: 0.6
          }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium tracking-wider border border-white/20">
              We're Hiring
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Growing Team</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90 font-light"
          >
            We're looking for passionate individuals to help shape the future of digital innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            <Link 
              to="/careers" 
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-dark bg-white hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              View Open Positions
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-white bg-transparent border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Contact HR
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HiringBanner