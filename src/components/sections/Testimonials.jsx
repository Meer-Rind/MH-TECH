import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaRegStar, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MH TECH completely transformed our digital presence. Their e-commerce solution increased our online sales by 220% within just six months. The team's attention to detail and technical expertise is unmatched.",
      name: "Sarah Johnson",
      position: "CEO, Luxe Fashion",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      quote: "The mobile app developed by MH TECH exceeded all our expectations. User engagement metrics are through the roof, and we've seen a 40% increase in repeat orders. Their UX design approach is truly customer-centric.",
      name: "Michael Chen",
      position: "Founder, QuickBites",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "Food Delivery App"
    },
    {
      quote: "Working with MH TECH on our corporate rebranding was a game-changer. They captured our vision perfectly and delivered a stunning design system that has become our competitive advantage in the market.",
      name: "Emily Rodriguez",
      position: "Marketing Director, TechStart",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "Brand Identity"
    },
    {
      quote: "The Walmart integration MH TECH implemented streamlined our operations and expanded our reach dramatically. Their technical expertise in marketplace APIs is impressive, and their support is top-notch.",
      name: "David Wilson",
      position: "Operations Manager, HomeGoods",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "Marketplace Integration"
    },
    {
      quote: "Our new website by MH TECH has significantly reduced bounce rates and increased lead generation. Their data-driven approach to design and development delivered measurable business results.",
      name: "Jennifer Lee",
      position: "Digital Director, FinanceCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "Corporate Website"
    },
    {
      quote: "MH TECH's cloud solution optimized our infrastructure costs by 35% while improving performance. Their team is knowledgeable, responsive, and truly partners in our success.",
      name: "Robert Taylor",
      position: "CTO, SaaSPlatform",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 5,
      project: "Cloud Migration"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <section className="relative py-28 bg-[#1F2937] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#EC4899]/20 blur-[120px]"
      />
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#10B981]/20 to-[#4F46E5]/20 blur-[120px]"
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5],
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5
          }}
          className="absolute rounded-full bg-[#4F46E5]"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium tracking-wider border border-white/20 font-[Poppins]">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mr-2 animate-pulse"></span>
              Client Testimonials
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[ClashDisplay]"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#EC4899]">Industry Leaders</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-[Inter]"
          >
            Hear from businesses that have transformed their operations and achieved remarkable results with our solutions.
          </motion.p>
        </motion.div>
        
        {/* Testimonials grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              className={`bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#4F46E5]/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#4F46E5]/10 relative overflow-hidden`}
            >
              {/* Gradient accent */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#EC4899] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="flex mb-6">
                <div className="text-[#4F46E5] mr-4">
                  <FaQuoteLeft size={32} className="opacity-80" />
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
                className="text-gray-300 mb-8 text-lg leading-relaxed font-[Inter]"
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
                    className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-[#4F46E5]/20"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-[#4F46E5]/30 transition-all duration-300" />
                </motion.div>
                
                <div className="font-[Inter]">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm mb-1">{testimonial.position}</p>
                  <p className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#10B981]">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-[#4F46E5] to-[#EC4899] text-white hover:shadow-xl transition-all duration-300 font-[Poppins]"
          >
            Read More Success Stories
            <FaArrowRight className="ml-3" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;