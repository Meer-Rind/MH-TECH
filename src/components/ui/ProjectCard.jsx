import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, tags = [], className = "" }) => {
  // Project-specific images from Unsplash
  const projectImages = {
    "E-commerce Platform": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "Portfolio Website": "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "Mobile Application": "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "Dashboard UI": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "Blog System": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "Social Media App": "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  };

  const imageUrl = projectImages[title] || "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className={`group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <Link to={`/projects/${id}`} className="block h-full">
        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <motion.img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <motion.span 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 text-gray-800 text-sm px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-4 inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-300"
          >
            View Project
            <motion.span 
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;