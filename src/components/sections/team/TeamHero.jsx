import React from 'react';
import { motion } from 'framer-motion';

const TeamHero = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-dark via-primary to-secondary text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/20 pointer-events-none" />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, x: Math.random() * 100 - 50 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        />
      ))}

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
          className="mb-3"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium tracking-wider border border-white/20">
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
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">MH TECH</span> Team
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
          className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95 font-light"
        >
          Meet the brilliant minds and talented individuals powering our innovation and success.
        </motion.p>

        {/* Animated decorative elements */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ delay: 0.4, duration: 1.5, type: 'spring' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white mix-blend-overlay filter blur-[100px]"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ delay: 0.5, duration: 1.5, type: 'spring' }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white mix-blend-overlay filter blur-[100px]"
        />
      </div>
    </section>
  );
};

export default TeamHero;