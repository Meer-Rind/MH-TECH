import React from 'react';
import { motion } from 'framer-motion';

const ServiceProcess = ({ process }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light">
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
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-heading">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-dark/60 max-w-2xl mx-auto font-sans">
              A structured approach to deliver exceptional results
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent transform -translate-x-1/2"></div>
            
            {/* Process steps */}
            <div className="space-y-16 md:space-y-24">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  {/* Content card */}
                  <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-light/50"
                    >
                      <div className="flex items-center mb-4">
                        <div className="mr-4">
                          {step.icon && (
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                              {step.icon}
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-dark font-sans">{step.title}</h3>
                      </div>
                      <p className="text-dark/80 leading-relaxed font-sans">{step.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Step number */}
                  <div className="md:w-1/2 flex justify-center md:justify-start md:px-8 relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-2xl shadow-lg relative z-10 border-4 border-white"
                    >
                      {index + 1}
                    </motion.div>
                    {index < process.length - 1 && (
                      <div className="md:hidden absolute bottom-0 transform translate-y-16 w-1 h-16 bg-gradient-to-b from-primary to-accent"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess;