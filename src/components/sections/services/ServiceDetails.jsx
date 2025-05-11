import React from 'react';
import { motion } from 'framer-motion';

const ServiceDetails = ({ title, features }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 100,
            damping: 10,
            duration: 0.6
          }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {title} <span className="text-primary">Features</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="bg-primary bg-opacity-10 p-2.5 rounded-full mr-4 flex-shrink-0">
                  <svg 
                    className="w-6 h-6 text-primary" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button className="px-8 py-3 rounded-lg font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg">
            Get Started With {title}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;