import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MH TECH completely transformed our digital presence. Their e-commerce solution increased our online sales by 220% within just six months. The team's attention to detail and technical expertise is unmatched.",
      name: "Sarah Johnson",
      position: "CEO, Luxe Fashion",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      quote: "The mobile app developed by MH TECH exceeded all our expectations. User engagement metrics are through the roof, and we've seen a 40% increase in repeat orders. Their UX design approach is truly customer-centric.",
      name: "Michael Chen",
      position: "Founder, QuickBites",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "Food Delivery App"
    },
    {
      quote: "Working with MH TECH on our corporate rebranding was a game-changer. They captured our vision perfectly and delivered a stunning design system that has become our competitive advantage in the market.",
      name: "Emily Rodriguez",
      position: "Marketing Director, TechStart",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "Brand Identity"
    },
    {
      quote: "The Walmart integration MH TECH implemented streamlined our operations and expanded our reach dramatically. Their technical expertise in marketplace APIs is impressive, and their support is top-notch.",
      name: "David Wilson",
      position: "Operations Manager, HomeGoods",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "Marketplace Integration"
    },
    {
      quote: "Our new website by MH TECH has significantly reduced bounce rates and increased lead generation. Their data-driven approach to design and development delivered measurable business results.",
      name: "Jennifer Lee",
      position: "Digital Director, FinanceCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "Corporate Website"
    },
    {
      quote: "MH TECH's cloud solution optimized our infrastructure costs by 35% while improving performance. Their team is knowledgeable, responsive, and truly partners in our success.",
      name: "Robert Taylor",
      position: "CTO, SaaSPlatform",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "Cloud Migration"
    }
  ];

  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"
      />
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-secondary/10 blur-3xl -z-10"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 100,
            damping: 10,
            duration: 0.6
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Client Voices</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Industry Leaders</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Hear from businesses that have transformed their operations and achieved remarkable results with our solutions.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex mb-6">
                <div className="text-primary mr-4">
                  <FaQuoteLeft size={28} className="opacity-80" />
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    i < testimonial.rating ? (
                      <FaStar key={i} className="text-amber-400 w-5 h-5" />
                    ) : (
                      <FaRegStar key={i} className="text-amber-400 w-5 h-5" />
                    )
                  ))}
                </div>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-gray-300 mb-8 text-lg leading-relaxed"
              >
                "{testimonial.quote}"
              </motion.p>
              
              <div className="flex items-start">
                <motion.div 
                  className="relative shrink-0"
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
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm mb-1">{testimonial.position}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.project}</p>
                </div>
              </div>
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
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            Read More Success Stories
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;