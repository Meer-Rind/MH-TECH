import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const TeamMembers = () => {
  const team = [
    {
      name: "Shahmeer Abbas Khan",
      position: "CEO & Founder",
      bio: "With over 5 years of experience in the tech industry, Shahmeer leads MH TECH with vision and passion.",
      image: "/images/team/Rind.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/meer-rind/",
        twitter: "#",
        github: "https://github.com/Meer-Rind",
        email: "mailto:meer@example.com"
      }
    },
    // ... rest of your team data
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ 
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: index * 0.1
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-80">
                <motion.img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                
                {/* Social links overlay */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <a href={member.social.linkedin} className="p-3 bg-white rounded-full hover:bg-[#0077b5] hover:text-white transition-all">
                    <FaLinkedin size={16} />
                  </a>
                  <a href={member.social.twitter} className="p-3 bg-white rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all">
                    <FaTwitter size={16} />
                  </a>
                  <a href={member.social.github} className="p-3 bg-white rounded-full hover:bg-[#333] hover:text-white transition-all">
                    <FaGithub size={16} />
                  </a>
                  <a href={member.social.email} className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all">
                    <FaEnvelope size={16} />
                  </a>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <a 
                    href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View full profile
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;