import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaHeadset, FaClock, FaChartPie } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaTrophy className="text-primary" />,
      title: "Proven Expertise",
      description: "10+ years of experience in digital solutions",
      highlight: "10+ years"
    },
    {
      icon: <FaHeadset className="text-primary" />,
      title: "Dedicated Support",
      description: "24/7 customer support for all our clients",
      highlight: "24/7"
    },
    {
      icon: <FaClock className="text-primary" />,
      title: "On-Time Delivery",
      description: "We meet deadlines without compromising quality",
      highlight: "100%"
    },
    {
      icon: <FaChartPie className="text-primary" />,
      title: "Data-Driven Approach",
      description: "Solutions based on analytics and research",
      highlight: "Data-first"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">
            Why Choose <span className="text-primary">MH TECH</span>?
          </h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            We go beyond just delivering projects — we build <span className="font-medium text-dark">partnerships</span> that drive success.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.15,
                duration: 0.6
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(reason.icon, { size: 20 })}
                  </div>
                  <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                </motion.div>
                
                <p className="text-gray-600 mb-4 flex-grow">
                  {reason.description.split(reason.highlight).map((part, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="font-bold text-dark">{reason.highlight}</span>}
                      {part}
                    </React.Fragment>
                  ))}
                </p>
                
                <motion.div 
                  className="w-full bg-gray-100 h-1 rounded-full overflow-hidden mt-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;