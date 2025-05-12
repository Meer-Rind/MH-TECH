import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../../assets/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
// import '@fontsource/clash-display';
// import '@fontsource/inter';
// import '@fontsource/poppins';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-dark mb-6 font-heading"
          >
            Project Not Found
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-[#4338CA] transition-all duration-300 shadow-lg hover:shadow-xl font-medium font-sans"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-light"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center text-primary hover:text-[#4338CA] transition-colors group font-medium"
          >
            <motion.span
              whileHover={{ x: -3 }}
              className="flex items-center"
            >
              <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </motion.span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight font-heading">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors font-sans"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Image */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] transition-all duration-500 mb-10 border-2 border-white/10"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="prose max-w-none"
            >
              <h2 className="text-3xl font-bold text-dark mb-6 font-heading">Project Overview</h2>
              <p className="text-lg text-dark/80 leading-relaxed mb-8 font-sans">{project.description}</p>
              
              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-light/50 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-semibold text-dark mb-6 font-heading">Key Features</h3>
                <ul className="space-y-4">
                  {[
                    "Responsive design for all devices",
                    "Secure payment gateway integration",
                    "Custom CMS for easy content management",
                    "Advanced analytics dashboard",
                    "Multi-language support"
                  ].map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-start group"
                    >
                      <div className="bg-primary/10 p-1.5 rounded-full mr-4 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg text-dark/80 group-hover:text-dark transition-colors font-sans">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Meta Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-light/50 backdrop-blur-sm sticky top-6"
            >
              <h3 className="text-2xl font-semibold text-dark mb-6 font-heading">Project Details</h3>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="text-sm font-medium text-dark/60 uppercase tracking-wider mb-2 font-sans">Category</h4>
                  <p className="text-lg text-dark capitalize font-medium font-sans">{project.category.replace('-', ' ')}</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                >
                  <h4 className="text-sm font-medium text-dark/60 uppercase tracking-wider mb-2 font-sans">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'GraphQL'].map((tech, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                        className="px-3 py-1.5 bg-light text-dark rounded-full text-sm font-medium hover:bg-light/80 transition-colors font-sans"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75 }}
                >
                  <h4 className="text-sm font-medium text-dark/60 uppercase tracking-wider mb-2 font-sans">Date</h4>
                  <p className="text-lg text-dark font-medium font-sans">June 2023</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="text-sm font-medium text-dark/60 uppercase tracking-wider mb-2 font-sans">Client</h4>
                  <p className="text-lg text-dark font-medium font-sans">Fashion Brand Inc.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="pt-6 border-t border-light"
                >
                  <Link
                    to="/contact" 
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg transition-all duration-300 shadow-md hover:from-[#4338CA] hover:to-[#D43F8D] font-medium font-sans"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact About Similar Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;