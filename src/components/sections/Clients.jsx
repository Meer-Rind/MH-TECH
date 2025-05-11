import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { 
      name: "Walmart", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/1200px-Walmart_Spark.svg.png" 
    },
    { 
      name: "TikTok", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png" 
    },
    { 
      name: "eBay", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png" 
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" 
    },
    { 
      name: "Shopify", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1200px-Shopify_logo_2018.svg.png" 
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
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
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our <span className="text-primary">Partners</span>
          </h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Trusted by leading brands and platforms worldwide.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -5,
                scale: 1.05
              }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: index * 0.1,
                duration: 0.6
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute left-0 -bottom-20 w-60 h-60 rounded-full bg-primary/10 blur-xl opacity-50"
        />
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute right-0 -top-10 w-40 h-40 rounded-full bg-secondary/10 blur-xl opacity-50"
        />
      </div>
    </section>
  );
};

export default Clients;