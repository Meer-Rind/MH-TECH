// 1. Import React and motion from framer-motion
import React from 'react';
import { motion } from 'framer-motion';

// 2. Define the ServiceHero component with destructured props and default values
const ServiceHero = ({ 
  title = '', 
  description = '', 
  serviceType = 'default' 
}) => {
  // 3. Helper function to get the appropriate service image
  const getServiceImage = (type) => {
    // 4. Object mapping service types to their respective images
    const images = {
      web: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      mobile: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      ecommerce: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      design: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      marketing: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      default: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    };
    
    // 5. Safely get the image URL with fallback to default
    return images[String(type).toLowerCase()] || images.default;
  };

  // 6. Get the service image URL
  const serviceImage = getServiceImage(serviceType);

  // 7. Split title for gradient effect
  const titleParts = title.split(' ');
  const firstWord = titleParts[0];
  const remainingWords = titleParts.slice(1).join(' ');

  return (
    // 8. Main section container
    <section className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      
      {/* 9. Decorative background elements */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary opacity-10 mix-blend-overlay filter blur-[100px]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-secondary opacity-10 mix-blend-overlay filter blur-[100px]" />
      
      {/* 10. Content container */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* 11. Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: 'spring',
              stiffness: 100,
              damping: 10,
              duration: 0.8
            }}
            className="w-full lg:w-1/2"
          >
            {/* 12. Service type badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium tracking-wide border border-white/20">
                Premium {serviceType} Service
              </span>
            </motion.div>

            {/* 13. Main title with gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {firstWord}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {remainingWords}
              </span>
            </h1>
            
            {/* 14. Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed opacity-90"
            >
              {description}
            </motion.p>

            {/* 15. Call-to-action buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center">
                Get a Free Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button className="px-8 py-3.5 rounded-full font-semibold bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>
          
          {/* 16. Right column - Image */}
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
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              {/* 17. Image overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"></div>
              
              {/* 18. Main service image */}
              <img 
                src={serviceImage} 
                alt={title} 
                className="w-full h-full object-cover rounded-2xl shadow-xl relative z-0 hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-secondary/10 blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 19. Export the component
export default ServiceHero;