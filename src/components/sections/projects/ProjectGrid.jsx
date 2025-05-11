import React from 'react';
import ProjectCard from '../../ui/ProjectCard';

const ProjectGrid = ({ filter }) => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with custom CMS and payment integration.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["E-commerce", "Web Development", "UI/UX"],
      category: "ecommerce",
      link: "/projects/ecommerce-platform"
    },
    {
      id: 2,
      title: "Food Delivery App",
      description: "iOS and Android app with real-time tracking and payment system.",
      image: "/images/projects/food-app.jpg",
      tags: ["App Development", "Mobile", "UI/UX"],
      category: "app-development",
      link: "/projects/food-delivery-app"
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Modern corporate website with CMS and multilingual support.",
      image: "/images/projects/corporate.jpg",
      tags: ["Web Development", "UI/UX"],
      category: "web-development",
      link: "/projects/corporate-website"
    },
    {
      id: 4,
      title: "Brand Identity",
      description: "Complete branding package including logo, colors, and style guide.",
      image: "/images/projects/branding.jpg",
      tags: ["Graphics Design", "Branding"],
      category: "graphics-design",
      link: "/projects/brand-identity"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                {...project}
                className="transition-transform duration-300 hover:scale-[1.02]"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-500">
              No projects found in this category
            </h3>
            <p className="mt-2 text-gray-400">
              Try selecting a different filter
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;