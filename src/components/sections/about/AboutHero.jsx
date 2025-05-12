import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#4F46E5] to-[#EC4899] text-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </motion.div>
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            y: Math.random() * -100,
            x: Math.random() * 100 - 50
          }}
          animate={{ 
            opacity: [0, 0.3, 0],
            y: Math.random() * 100 - 50,
            x: Math.random() * 200 - 100
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 5 + 2 + 'px',
            height: Math.random() * 5 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
        />
      ))}
      
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-heading"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Crafting <span className="text-[#10B981]">Digital</span> Excellence
          </motion.h1>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block mt-4 mb-8"
          >
            <span className="text-white/80 text-lg font-special tracking-wider">ABOUT MH TECH</span>
            <motion.div 
              className="h-1 bg-[#EC4899] mt-2 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              transition={{ delay: 0.6 }}
            />
          </motion.div>
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
            className="text-xl md:text-2xl leading-relaxed font-body mb-10"
          >
            We are <span className="font-semibold text-white">visionary creators</span> blending cutting-edge technology with elegant design to build digital experiences that <span className="font-semibold text-[#10B981]">inspire and transform</span>.
          </motion.p>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1F2937] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-special tracking-wide"
            >
              Meet Our Team
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-special tracking-wide"
            >
              Our Process
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Animated decorative elements */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-[#EC4899]/20 blur-3xl"
        ></motion.div>
        
        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 font-special">Scroll Down</span>
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity
              }}
              className="w-4 h-4 border-b-2 border-r-2 border-white transform rotate-45"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;