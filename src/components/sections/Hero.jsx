import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1F2937] via-[#2E2E3D] to-[#1E1E2D] text-white py-28 overflow-hidden">
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[#EC4899] font-special tracking-widest mb-4">
                INNOVATIVE DIGITAL SOLUTIONS
              </span>
              <motion.div 
                className="h-1 bg-[#10B981] mt-2 mb-6 w-20 mx-auto lg:mx-0"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8
              }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight font-heading"
            >
              Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#EC4899]">Digital</span> Presence
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-[#9CA3AF] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body"
            >
              We craft bespoke digital experiences that drive growth, engagement, and measurable results for forward-thinking businesses.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#EC4899] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 font-special tracking-wide"
                >
                  Get Started
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/projects" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 font-special tracking-wide"
                >
                  View Our Work
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <img 
                      key={item}
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                      alt="Team member"
                      className="w-10 h-10 rounded-full border-2 border-[#1F2937]"
                    />
                  ))}
                </div>
                <div className="ml-3 text-left">
                  <p className="text-sm font-medium text-white font-special">Trusted by 200+ clients</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-[#9CA3AF] ml-1 font-special">(5.0)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 60,
              damping: 15,
              duration: 0.8,
              delay: 0.4
            }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center relative mt-12 lg:mt-0"
          >
            <div className="relative max-w-md xl:max-w-lg">
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-[#4F46E5]/10 blur-3xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#EC4899]/10 blur-2xl -z-10"></div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#374151]/50">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Digital Solutions" 
                  className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/80 via-transparent to-transparent"></div>
                
                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 right-6 bg-[#111827]/80 backdrop-blur-sm p-4 rounded-xl border border-[#374151]/50 shadow-lg"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-[#4F46E5]/10 rounded-lg">
                      <svg className="w-6 h-6 text-[#4F46E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-semibold text-white font-special">Increased Conversion</h4>
                      <p className="text-xs text-[#9CA3AF] font-special">+220% for our clients</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;