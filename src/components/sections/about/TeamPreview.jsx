import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const TeamPreview = () => {
  const teamMembers = [
    {
      name: "Shahmeer Abbas Khan",
      position: "CEO & Founder",
      image: "/images/team/Rind.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/meer-rind/",
        twitter: "#",
        github: "#"
      },
      accentColor: "from-[#4F46E5] to-[#818CF8]"
    },
    {
      name: "Hamza Choudary",
      position: "CTO",
      image: "/images/team/hamza.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      accentColor: "from-[#10B981] to-[#34D399]"
    },
    {
      name: "Mudasir Nawaz",
      position: "Lead Developer",
      image: "/images/team/Nawaz.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      accentColor: "from-[#EC4899] to-[#F472B6]"
    }
  ];

  return (
    <section className="relative py-28 bg-[#F9FAFB] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-[#4F46E5] blur-[100px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-[#EC4899] blur-[100px]"></div>
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
            OUR LEADERSHIP
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1F2937] font-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            The <span className="text-[#4F46E5]">Minds</span> Behind MH TECH
          </motion.h2>
          <motion.p 
            className="text-xl text-[#6B7280] max-w-2xl mx-auto font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our talented team of innovators is dedicated to crafting exceptional digital experiences.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -15 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.15,
                duration: 0.6
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.accentColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10`}></div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col items-center text-center border border-[#E5E7EB] group-hover:border-transparent">
                {/* Profile image with frame */}
                <motion.div 
                  className="w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
                
                {/* Member info */}
                <h3 className="text-2xl font-bold text-[#1F2937] mb-2 group-hover:text-[#4F46E5] transition-colors duration-300 font-heading">
                  {member.name}
                </h3>
                <p className="text-[#6B7280] mb-6 font-medium">{member.position}</p>
                
                {/* Social links */}
                <motion.div 
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href={member.social.linkedin} 
                    className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:text-white hover:bg-[#0A66C2] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaLinkedinIn size={16} />
                  </motion.a>
                  <motion.a 
                    href={member.social.twitter} 
                    className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:text-white hover:bg-[#1DA1F2] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaTwitter size={16} />
                  </motion.a>
                  <motion.a 
                    href={member.social.github} 
                    className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:text-white hover:bg-[#181717] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub size={16} />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/team" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#EC4899] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 group"
          >
            <motion.span
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="font-special tracking-wide"
            >
              Meet The Entire Team
            </motion.span>
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;