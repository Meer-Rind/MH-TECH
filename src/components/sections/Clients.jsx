import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { 
      name: "Walmart", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/1200px-Walmart_Spark.svg.png",
      description: "Global retail corporation with e-commerce integration"
    },
    { 
      name: "TikTok", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png",
      description: "Leading short-form video platform with shopping features"
    },
    { 
      name: "eBay", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png",
      description: "Pioneering online auction and shopping website"
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
      description: "World's largest e-commerce and cloud computing company"
    },
    { 
      name: "Shopify", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1200px-Shopify_logo_2018.svg.png",
      description: "Complete commerce platform for online stores"
    },
    { 
      name: "Etsy", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Etsy_logo.svg/1200px-Etsy_logo.svg.png",
      description: "Global marketplace for unique and creative goods"
    },
    { 
      name: "Target", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/1200px-Target_logo.svg.png",
      description: "American retail corporation with strong e-commerce"
    },
    { 
      name: "Best Buy", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Best_Buy_Logo.svg/1200px-Best_Buy_Logo.svg.png",
      description: "Multinational consumer electronics retailer"
    }
  ];

  return (
    <section className="relative py-28 bg-[#F9FAFB] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#4F46E5] blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#EC4899] blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
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
            TRUSTED BY INDUSTRY LEADERS
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1F2937] font-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#EC4899]">Valued Partners</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-[#6B7280] max-w-3xl mx-auto font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Collaborating with global brands to deliver exceptional digital commerce solutions
          </motion.p>
        </motion.div>
        
        {/* Client logos grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    duration: 0.6
                  }
                }
              }}
              whileHover={{
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 to-[#EC4899]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"></div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col items-center border border-[#E5E7EB] group-hover:border-transparent">
                {/* Logo container */}
                <motion.div 
                  className="relative mb-6 w-full flex justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </motion.div>
                
                {/* Client info */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2 group-hover:text-[#4F46E5] transition-colors duration-300">
                    {client.name}
                  </h3>
                  <p className="text-sm text-[#6B7280] opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2 font-body">
                    {client.description}
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#10B981]/10 group-hover:bg-[#10B981]/20 transition-colors duration-500 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#1F2937] mb-6 font-heading">
            Ready to join our network of partners?
          </h3>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#EC4899] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span className="font-special tracking-wide">Become a Partner</span>
            <svg 
              className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;