import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#4F46E5] to-[#EC4899] text-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </motion.div>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
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
            duration: Math.random() * 15 + 15,
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-[#EC4899] font-special tracking-widest">READY TO BEGIN?</span>
            <motion.div 
              className="h-1 bg-[#10B981] mt-2 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              transition={{ delay: 0.4 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading"
            whileInView={{ 
              opacity: 1,
              y: 0,
              transition: { delay: 0.3 }
            }}
          >
            Transform Your <span className="text-[#10B981]">Digital</span> Presence
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Let's collaborate to create innovative solutions that drive your business forward in the digital landscape.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6 mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-[#1F2937] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-special tracking-wide"
              >
                Get Started Now
                <svg 
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/projects" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 font-special tracking-wide"
              >
                View Our Work
                <svg 
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Animated decorative elements */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"
        />
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-[#EC4899]/20 blur-3xl"
        />
      </div>
    </section>
  );
};

export default CTA;