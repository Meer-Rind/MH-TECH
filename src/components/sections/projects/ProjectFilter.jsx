import React from 'react';

const ProjectFilter = ({ filter, setFilter }) => {
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'app-development', name: 'App Development' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'graphics-design', name: 'Graphics Design' }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${
                filter === category.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;