import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] opacity-20"></div>
      </motion.div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content - takes full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Digital Solutions for <br />
              <motion.span 
                className="text-accent inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Your Business
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We deliver cutting-edge web, mobile, and e-commerce solutions that drive growth and innovation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/projects" 
                  className="inline-block px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                >
                  View Projects
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Hero Image - hidden on mobile if space is tight, shown on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 60,
              damping: 15,
              duration: 0.8,
              delay: 0.4
            }}
            className="w-full lg:w-1/2 flex justify-center relative mt-12 lg:mt-0"
          >
            <div className="relative max-w-md xl:max-w-lg">
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-accent/20 blur-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Digital Solutions" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover aspect-video hover:shadow-3xl transition-shadow duration-500"
              />
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/20 blur-2xl -z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2 }}
      ></motion.div>
    </section>
  );
};

export default Hero;