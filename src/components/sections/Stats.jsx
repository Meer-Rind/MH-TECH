import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaUsers, FaThumbsUp, FaGlobe } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: <FaProjectDiagram className="text-white" />,
      value: "250+",
      label: "Projects Completed",
      description: "Delivered with excellence"
    },
    {
      icon: <FaUsers className="text-white" />,
      value: "120+",
      label: "Happy Clients",
      description: "Across multiple industries"
    },
    {
      icon: <FaThumbsUp className="text-white" />,
      value: "98%",
      label: "Client Satisfaction",
      description: "Rated 4.8+ stars"
    },
    {
      icon: <FaGlobe className="text-white" />,
      value: "15+",
      label: "Countries Served",
      description: "Global reach"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] opacity-20"></div>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -5,
                scale: 1.02
              }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.15,
                duration: 0.6
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
            >
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                {React.cloneElement(stat.icon, { size: 30 })}
              </motion.div>
              
              <motion.h3 
                className="text-5xl font-bold mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {stat.value}
              </motion.h3>
              
              <motion.p 
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
              
              <motion.p 
                className="text-white/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-xl"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        />
      </div>
    </section>
  );
};

export default Stats;