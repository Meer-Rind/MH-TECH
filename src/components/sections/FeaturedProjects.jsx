import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Luxury E-commerce Platform",
      description: "A high-end retail solution with AR product visualization and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["E-commerce", "Web Development", "UI/UX"],
      link: "/projects/ecommerce-platform",
      stats: "↑ 220% conversion",
      accentColor: "from-[#4F46E5] to-[#818CF8]"
    },
    {
      title: "Food Ecosystem App",
      description: "From farm to table - a complete food delivery and sustainability tracking application.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["App Development", "Mobile", "UI/UX"],
      link: "/projects/food-delivery-app",
      stats: "1M+ downloads",
      accentColor: "from-[#10B981] to-[#34D399]"
    },
    {
      title: "Global Corporate Portal",
      description: "Enterprise solution with multilingual support and advanced content management.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Web Development", "UI/UX", "Enterprise"],
      link: "/projects/corporate-website",
      stats: "↓ 40% support calls",
      accentColor: "from-[#EC4899] to-[#F472B6]"
    }
  ];

  return (
    <section className="relative py-28 bg-[#F9FAFB] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#4F46E5] blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#EC4899] blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
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
            OUR PORTFOLIO
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6 font-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#EC4899]">Innovative</span> Case Studies
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#6B7280] max-w-2xl mx-auto font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Each project represents our commitment to blending cutting-edge technology with exceptional design.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.6
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10`}></div>
              
              <ProjectCard 
                {...project}
                className="bg-white group-hover:shadow-xl group-hover:border-transparent transition-all duration-500 border border-[#E5E7EB]"
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#EC4899] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 group font-special tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <svg 
              className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;