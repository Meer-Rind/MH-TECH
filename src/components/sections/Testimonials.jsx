import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MH TECH transformed our e-commerce business with their Walmart integration. Our sales increased by 150% within 3 months!",
      name: "Sarah Johnson",
      position: "CEO, Fashion Boutique",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      quote: "The mobile app they developed for our food delivery service exceeded our expectations. The user experience is flawless.",
      name: "Michael Chen",
      position: "Founder, QuickBites",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      quote: "Their branding and design work helped us establish a strong identity in a competitive market. Highly recommended!",
      name: "Emily Rodriguez",
      position: "Marketing Director, TechStart",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
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
      
      <div className="container mx-auto max-w-7xl relative z-10">
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it — hear from our satisfied clients about their experiences.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-primary mb-5">
                <FaQuoteLeft size={28} className="opacity-80" />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.2 }}
                className="text-gray-700 mb-8 text-lg leading-relaxed"
              >
                "{testimonial.quote}"
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.3 }}
                className="flex items-center"
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-primary/20"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-primary/30 transition-all duration-300" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Read More Testimonials
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;