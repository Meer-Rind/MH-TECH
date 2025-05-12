import React from 'react';
import { motion } from 'framer-motion';

const ProjectsHero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-primary to-accent text-white overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-transparent"
      />
      
      {/* Floating circles */}
      <motion.div 
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          transition: {
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm"
      />
      <motion.div 
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }
        }}
        className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-white/15 backdrop-blur-sm"
      />
      
      <div className="container px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 100,
            damping: 10
          }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-heading"
        >
          Our <span className="text-white">Creative</span> Portfolio
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
          className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed opacity-90 font-sans"
        >
          Discover our collection of innovative projects crafted with precision and passion.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="animate-bounce w-10 h-16 border-4 border-white/50 rounded-full mx-auto relative">
            <motion.div 
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"
            />
          </div>
          <p className="mt-2 text-white/80 text-sm font-sans">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;