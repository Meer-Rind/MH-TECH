import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with custom CMS and payment integration.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["E-commerce", "Web Development", "UI/UX"],
      link: "/projects/ecommerce-platform"
    },
    {
      title: "Food Delivery App",
      description: "iOS and Android app with real-time tracking and payment system.",
      image: "/images/projects/food-app.jpg",
      tags: ["App Development", "Mobile", "UI/UX"],
      link: "/projects/food-delivery-app"
    },
    {
      title: "Corporate Website",
      description: "Modern corporate website with CMS and multilingual support.",
      image: "/images/projects/corporate.jpg",
      tags: ["Web Development", "UI/UX"],
      link: "/projects/corporate-website"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
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
          <h2 className="text-4xl font-bold text-dark mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore some of our recent work that helped our clients achieve their business goals.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.6
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a 
            href="/projects" 
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;