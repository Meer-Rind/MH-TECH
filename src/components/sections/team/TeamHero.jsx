import React from 'react';
import { motion } from 'framer-motion';

const TeamHero = () => {
  return (
    <section className="relative py-28 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      {/* Subtle noise texture for depth */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      
      {/* Gradient overlay for richer colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/15 pointer-events-none" />
      
      <div className="container px-6 sm:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 120,
            damping: 12,
            delay: 0.1
          }}
          className="mb-2"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium tracking-wide">
            Our Collective Strength
          </span>
        </motion.div>
        
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
          Meet Our <span className="text-white/95">Dream Team</span>
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
          className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95"
        >
          The brilliant minds and talented individuals powering MH TECH's innovation and success.
        </motion.p>

        {/* Animated decorative elements */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ delay: 0.4, duration: 1.2, type: 'spring' }}
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white mix-blend-overlay filter blur-[80px]"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ delay: 0.5, duration: 1.2, type: 'spring' }}
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white mix-blend-overlay filter blur-[80px]"
        />
      </div>
    </section>
  );
};

export default TeamHero;