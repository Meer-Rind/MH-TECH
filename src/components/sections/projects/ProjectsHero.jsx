import React from 'react';
import { motion } from 'framer-motion';

const ProjectsHero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-dark to-gray-800 text-white overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 pointer-events-none" />
      
      <div className="container px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 100,
            damping: 10
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Our <span className="text-primary">Portfolio</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.15,
            type: 'spring',
            stiffness: 100,
            damping: 10
          }}
          className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90"
        >
          Explore our collection of successful projects crafted with precision across various industries and cutting-edge technologies.
        </motion.p>

        {/* Decorative elements */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary mix-blend-overlay filter blur-xl"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-secondary mix-blend-overlay filter blur-xl"
        />
      </div>
    </section>
  );
};

export default ProjectsHero;