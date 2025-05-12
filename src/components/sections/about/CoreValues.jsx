import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "We constantly explore new technologies and creative approaches to solve problems.",
      gradient: "from-[#4F46E5] to-[#818CF8]"
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and goals.",
      gradient: "from-[#10B981] to-[#34D399]"
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description: "We maintain transparency and honesty in all our business dealings.",
      gradient: "from-[#EC4899] to-[#F472B6]"
    },
    {
      icon: <FaChartLine />,
      title: "Excellence",
      description: "We strive for perfection in every project we undertake.",
      gradient: "from-[#F59E0B] to-[#FBBF24]"
    }
  ];

  return (
    <section className="relative py-28 bg-[#F9FAFB] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#4F46E5] blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#EC4899] blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block text-[#EC4899] font-special tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            OUR PHILOSOPHY
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1F2937] font-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            The <span className="text-[#4F46E5]">Values</span> That Define Us
          </motion.h2>
          <motion.p 
            className="text-xl text-[#6B7280] max-w-3xl mx-auto font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            These fundamental principles guide every decision we make and every solution we create at MH TECH.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.1,
                duration: 0.6
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10`}></div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col items-center text-center border border-[#E5E7EB] group-hover:border-transparent">
                <motion.div 
                  className={`flex justify-center items-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} text-white shadow-lg`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {React.cloneElement(value.icon, { size: 28 })}
                </motion.div>
                
                <h3 className="text-2xl font-semibold mb-4 text-[#1F2937] group-hover:text-[#4F46E5] transition-colors duration-300 font-heading">
                  {value.title}
                </h3>
                
                <p className="text-[#6B7280] font-body leading-relaxed">
                  {value.description}
                </p>
                
                <motion.div 
                  className="w-16 h-1 bg-[#4F46E5] mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated decorative element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-[#10B981]/10 blur-3xl -z-10"
        ></motion.div>
      </div>
    </section>
  );
};

export default CoreValues;