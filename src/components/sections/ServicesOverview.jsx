import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';
import { FaCode, FaMobile, FaShoppingCart, FaPalette } from 'react-icons/fa';

const ServicesOverview = () => {
  const services = [
    {
      icon: <FaCode className="text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your business needs.",
      link: "/web-development",
      highlight: "Custom websites"
    },
    {
      icon: <FaMobile className="text-primary" />,
      title: "App Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      link: "/app-development",
      highlight: "Native apps"
    },
    {
      icon: <FaShoppingCart className="text-primary" />,
      title: "E-Commerce",
      description: "Complete e-commerce solutions including Walmart and Amazon integration.",
      link: "/ecommerce",
      highlight: "Walmart/Amazon"
    },
    {
      icon: <FaPalette className="text-primary" />,
      title: "Graphics Design",
      description: "Stunning designs and user experiences that convert visitors to customers.",
      link: "/graphics-design",
      highlight: "Stunning designs"
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
            Our <span className="text-primary">Services</span>
          </h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            We offer comprehensive digital solutions to help your business thrive in the online world.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.6
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ServiceCard 
                {...service}
                description={
                  <>
                    {service.description.split(service.highlight).map((part, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <span className="font-semibold text-dark">{service.highlight}</span>}
                        {part}
                      </React.Fragment>
                    ))}
                  </>
                }
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute left-0 -bottom-20 w-40 h-40 rounded-full bg-primary/10 blur-xl opacity-70"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        />
      </div>
    </section>
  );
};

export default ServicesOverview;