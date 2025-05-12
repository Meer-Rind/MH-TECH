import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlayCircle } from 'react-icons/fa';

const ServiceHero = ({ 
  title = '', 
  description = '', 
  serviceType = 'default',
  stats = []
}) => {
  // Enhanced service image mapping with higher quality images
  const getServiceImage = (type) => {
    const images = {
      web: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      mobile: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      ecommerce: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      design: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      marketing: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      default: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    };
    
    return images[String(type).toLowerCase()] || images.default;
  };

  const serviceImage = getServiceImage(serviceType);
  const titleParts = title.split(' ');
  const firstWord = titleParts[0];
  const remainingWords = titleParts.slice(1).join(' ');

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-dark via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-primary to-accent mix-blend-overlay filter blur-[120px]"
      />
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-secondary to-accent mix-blend-overlay filter blur-[120px]"
      />
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 0.5],
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
          className="absolute w-2 h-2 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text content with staggered animations */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full lg:w-1/2"
          >
            {/* Service badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium tracking-wider border border-white/20">
                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Premium {serviceType} Service
              </span>
            </motion.div>

            {/* Title with gradient */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              {firstWord}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {remainingWords}
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed opacity-90 font-light"
            >
              {description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl transition-all duration-300 flex items-center"
              >
                Get a Free Quote
                <FaArrowRight className="ml-3" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center"
              >
                <FaPlayCircle className="mr-3" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats (if provided) */}
            {stats.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-8 pt-6 border-t border-white/10"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mr-3">
                      {stat.value}
                    </div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
          
          {/* Image with parallax effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              type: 'spring',
              stiffness: 60,
              damping: 15,
              duration: 0.8
            }}
            className="w-full lg:w-1/2 relative mt-12 lg:mt-0"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl"
            >
              {/* Image overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
              
              {/* Floating decorative elements */}
              <motion.div 
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm z-20"
              />
              
              {/* Main service image */}
              <img 
                src={serviceImage} 
                alt={title} 
                className="w-full h-full object-cover relative z-0 transition-transform duration-700"
                loading="eager"
              />
            </motion.div>
            
            {/* Floating client logo badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-lg z-20 flex items-center"
            >
              <div className="text-xs font-medium text-dark mr-2">Trusted by:</div>
              <div className="flex space-x-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" 
                  alt="Amazon" 
                  className="h-6 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png" 
                  alt="TikTok" 
                  className="h-6 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Default props
ServiceHero.defaultProps = {
  title: 'Our Service',
  description: 'Professional solutions tailored to your business needs',
  serviceType: 'default',
  stats: [
    { value: '100+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support' },
    { value: '5★', label: 'Ratings' }
  ]
};

export default ServiceHero;