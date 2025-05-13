import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';
import { 
  FaCode, 
  FaMobileAlt, 
  FaShoppingBag, 
  FaPalette, 
  FaChartLine, 
  FaServer,
  FaArrowRight
} from 'react-icons/fa';

const ServicesOverview = () => {
  const services = [
    {
      icon: <FaCode className="text-primary" size={28} />,
      title: "Web Development",
      description: "Custom websites and web applications with cutting-edge technologies for optimal performance.",
      link: "/web-development",
      highlight: "cutting-edge technologies",
      features: ["React/Next.js", "Tailwind CSS", "Node.js", "API Integration"],
      gradient: "from-[#4F46E5] to-[#4F46E5]/80"
    },
    {
      icon: <FaMobileAlt className="text-primary" size={28} />,
      title: "App Development",
      description: "Native and cross-platform mobile solutions that deliver seamless user experiences.",
      link: "/app-development",
      highlight: "seamless user experiences",
      features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"],
      gradient: "from-[#10B981] to-[#10B981]/80"
    },
    {
      icon: <FaShoppingBag className="text-primary" size={28} />,
      title: "E-Commerce Solutions",
      description: "Complete online stores with Walmart, Amazon, and Shopify integrations to maximize sales.",
      link: "/ecommerce",
      highlight: "maximize sales",
      features: ["Shopify", "Walmart API", "Amazon SP-API", "Custom Checkouts"],
      gradient: "from-[#EC4899] to-[#EC4899]/80"
    },
    {
      icon: <FaPalette className="text-primary" size={28} />,
      title: "UI/UX Design",
      description: "Beautiful interfaces and intuitive user experiences that drive engagement and conversions.",
      link: "/graphics-design",
      highlight: "drive engagement",
      features: ["Figma", "Adobe XD", "User Testing", "Prototyping"],
      gradient: "from-[#4F46E5] to-[#EC4899]"
    },
    {
      icon: <FaChartLine className="text-primary" size={28} />,
      title: "Digital Marketing",
      description: "Data-driven strategies to increase visibility and grow your business online.",
      link: "/digital-marketing",
      highlight: "grow your business",
      features: ["SEO", "PPC", "Social Media", "Content Strategy"],
      gradient: "from-[#EC4899] to-[#10B981]"
    },
    {
      icon: <FaServer className="text-primary" size={28} />,
      title: "Cloud Solutions",
      description: "Scalable infrastructure and hosting solutions for businesses of all sizes.",
      link: "/cloud-solutions",
      highlight: "Scalable infrastructure",
      features: ["AWS", "Google Cloud", "Azure", "DevOps"],
      gradient: "from-[#4F46E5] to-[#10B981]"
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
    <section className="relative py-28 bg-light overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-[120px]"
      />
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/10 to-primary/10 blur-[120px]"
      />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.2, 0],
            scale: [0.5, 1, 0.5],
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
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
            <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-md text-sm font-medium tracking-wider text-primary border border-primary/20 font-poppins">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              OUR EXPERTISE
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight font-clash-display"
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Solutions</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-dark/70 max-w-3xl mx-auto leading-relaxed font-inter"
          >
            End-to-end services designed to transform your digital presence and drive business growth.
          </motion.p>
        </motion.div>
        
        {/* Services grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
            >
              <ServiceCard 
                {...service}
                className="h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-gray-200/50 bg-white"
              />
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
          <motion.a 
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all duration-300 hover:shadow-primary/30 font-poppins"
          >
            Explore All Services
            <FaArrowRight className="ml-3" />
          </motion.a>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-dark/70 mt-6 font-inter"
          >
            Need something custom? <a href="/contact" className="text-primary hover:underline font-medium">Let's discuss your project</a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;