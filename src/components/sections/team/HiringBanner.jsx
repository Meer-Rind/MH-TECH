import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HiringBanner = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-dark to-gray-800 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary opacity-10 mix-blend-overlay filter blur-[80px]" />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-secondary opacity-10 mix-blend-overlay filter blur-[80px]" />
      
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
            className="mb-3"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium tracking-wide">
              We're Hiring
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to <span className="text-primary">Join Our Team?</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            We're always looking for passionate, talented individuals to help shape the future of MH TECH.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3.5 rounded-full font-semibold text-dark bg-white hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              View Open Positions
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HiringBanner;