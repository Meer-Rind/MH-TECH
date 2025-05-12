import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, tags = [], className = "" }) => {
  // Project-specific images from Unsplash (higher quality)
  const projectImages = {
    "E-commerce Platform": "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "Portfolio Website": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "Mobile Application": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "Dashboard UI": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "Blog System": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "Social Media App": "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  };

  const imageUrl = projectImages[title] || "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.5
      }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      <Link to={`/projects/${id}`} className="block h-full">
        {/* Image with gradient overlay */}
        <div className="relative overflow-hidden h-60">
          <motion.img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
          
          {/* Tags floating on image */}
          <div className="absolute top-4 right-4 flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag, index) => (
              <motion.span 
                key={index}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-primary text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          {/* Floating badge */}
          <motion.div 
            className="absolute -top-5 left-6 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured
          </motion.div>
          
          <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 mb-5 line-clamp-2">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.slice(0, 3).map((tag, index) => (
              <motion.span 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTA with animated arrow */}
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors duration-300"
          >
            View case study
            <motion.span 
              className="ml-2 inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </motion.span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;