import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] opacity-20"></div>
      </motion.div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8
          }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            About <span className="text-white/90">MH TECH</span>
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.3,
            duration: 0.8
          }}
          className="max-w-3xl mx-auto"
        >
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light mb-8"
          >
            We are a team of passionate <span className="font-medium">developers</span>, <span className="font-medium">designers</span>, and <span className="font-medium">strategists</span> dedicated to delivering exceptional digital solutions.
          </motion.p>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-dark font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Meet Our Team
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Animated decorative elements */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-xl"
        ></motion.div>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/10 blur-xl"
        ></motion.div>
      </div>
    </section>
  );
};

export default AboutHero;