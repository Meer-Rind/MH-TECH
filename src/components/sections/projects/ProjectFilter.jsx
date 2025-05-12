import React from 'react';
import { motion } from 'framer-motion';

const ProjectFilter = ({ filter, setFilter }) => {
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'app-development', name: 'App Development' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'graphics-design', name: 'Graphics Design' }
  ];

  return (
    <div className="bg-light py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 font-sans ${
                filter === category.id 
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                  : 'bg-white text-dark hover:bg-light shadow-md'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;