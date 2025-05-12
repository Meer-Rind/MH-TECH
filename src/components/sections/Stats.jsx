import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaProjectDiagram, 
  FaUsers, 
  FaThumbsUp, 
  FaGlobe, 
  FaRocket, 
  FaAward,
  FaChartLine
} from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: <FaProjectDiagram className="text-primary" size={32} />,
      value: "350+",
      label: "Projects Delivered",
      description: "Across various industries worldwide",
      animation: { rotate: [0, 10, -10, 0] },
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <FaUsers className="text-primary" size={32} />,
      value: "150+",
      label: "Satisfied Clients",
      description: "Global client base and counting",
      animation: { scale: [1, 1.1, 1] },
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaThumbsUp className="text-primary" size={32} />,
      value: "98%",
      label: "Client Retention",
      description: "Long-term successful partnerships",
      animation: { y: [0, -5, 0] },
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <FaGlobe className="text-primary" size={32} />,
      value: "20+",
      label: "Countries Served",
      description: "Worldwide digital presence",
      animation: { rotate: [0, 15, 0] },
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: <FaRocket className="text-primary" size={32} />,
      value: "4.9/5",
      label: "Average Rating",
      description: "Consistent client satisfaction",
      animation: { y: [0, -10, 0] },
      gradient: "from-rose-500 to-red-600"
    },
    {
      icon: <FaAward className="text-primary" size={32} />,
      value: "15+",
      label: "Industry Awards",
      description: "Recognized excellence and innovation",
      animation: { rotateY: [0, 180, 0] },
      gradient: "from-violet-500 to-blue-600"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <section className="relative py-28 bg-gradient-to-br from-dark via-gray-900 to-gray-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-[120px]"
      />
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-[120px]"
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5],
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5
          }}
          className="absolute rounded-full bg-primary"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium tracking-wider border border-white/20">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              By The Numbers
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Impact</span> in Numbers
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Quantifying our commitment to excellence and the results we've delivered for our clients worldwide.
          </motion.p>
        </motion.div>
        
        {/* Stats grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <motion.div 
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient}/10 flex items-center justify-center`}
                whileHover={stat.animation}
                transition={{ duration: 0.6 }}
              >
                {stat.icon}
              </motion.div>
              
              <h3 className={`text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                {stat.value}
              </h3>
              
              <p className="text-xl font-semibold mb-2 text-white">
                {stat.label}
              </p>
              
              <p className="text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-gradient-to-r from-primary to-accent p-0.5 rounded-full"
          >
            <div className="bg-dark rounded-full px-1 py-1">
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 rounded-full font-medium text-white border-2 border-transparent hover:border-white/20 transition-all"
              >
                <FaChartLine className="mr-3" />
                Get Your Free Analytics Report
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;