import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] opacity-20"></div>
      </motion.div>
      
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
          className="space-y-8"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            whileInView={{ 
              opacity: 1,
              y: 0,
              transition: { delay: 0.1 }
            }}
          >
            Ready to <span className="text-white/90">Transform</span> Your Business?
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's discuss how we can help you achieve your digital goals.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
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
                className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Animated decorative elements */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-xl"
        ></motion.div>
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/10 blur-xl"
        ></motion.div>
      </div>
    </section>
  );
};

export default CTA;