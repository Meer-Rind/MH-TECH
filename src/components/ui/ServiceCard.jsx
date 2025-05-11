import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, link }) => {
  // Service-specific images from Unsplash
  const serviceImages = {
    "Web Development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "UI/UX Design": "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "Mobile App": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "SEO": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "Digital Marketing": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "Consulting": "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  };

  const imageUrl = serviceImages[title] || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.5
      }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className="group relative h-full bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/30" />
      </div>
      
      {/* Icon container with hover effect */}
      <motion.div 
        className="relative z-10 w-16 h-16 mb-6 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300"
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        {React.cloneElement(icon, { size: 28 })}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* CTA Button */}
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-auto"
        >
          <a 
            href={link} 
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-300"
          >
            Learn more
            <motion.span 
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Bottom accent bar */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 overflow-hidden z-10"
        initial={{ scaleX: 0.9 }}
        whileInView={{ scaleX: 1 }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.3, duration: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;