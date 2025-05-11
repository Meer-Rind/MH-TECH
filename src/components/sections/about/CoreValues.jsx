import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    {
      icon: <FaLightbulb className="text-primary" />,
      title: "Innovation",
      description: "We constantly explore new technologies and creative approaches to solve problems."
    },
    {
      icon: <FaUsers className="text-primary" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and goals."
    },
    {
      icon: <FaHandshake className="text-primary" />,
      title: "Integrity",
      description: "We maintain transparency and honesty in all our business dealings."
    },
    {
      icon: <FaChartLine className="text-primary" />,
      title: "Excellence",
      description: "We strive for perfection in every project we undertake."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-dark">Our Core Values</h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            These principles guide everything we do at MH TECH and shape our company culture.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                <motion.div 
                  className="flex justify-center items-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {React.cloneElement(value.icon, { size: 24 })}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;