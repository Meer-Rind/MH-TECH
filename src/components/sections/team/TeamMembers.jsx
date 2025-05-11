import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const TeamMembers = () => {
  const team = [
    {
      name: "Shahmeer Abbas Khan ",
      position: "CEO & Founder",
      bio: "With over 5 years of experience in the tech industry, John leads MH TECH with vision and passion.",
      image: "/images/team/Rind.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/meer-rind/",
        twitter: "#",
        github: "https://github.com/Meer-Rind"
      }
    },
    // ... rest of your team data
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ 
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: index * 0.1
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-72">
                <motion.img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <div className="p-6 md:p-7">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1 text-gray-800">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.position}</p>
                  </div>
                  <motion.div 
                    className="flex space-x-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-[#0077b5] transition-colors">
                      <FaLinkedin size={18} />
                    </a>
                    <a href={member.social.twitter} className="text-gray-500 hover:text-[#1DA1F2] transition-colors">
                      <FaTwitter size={18} />
                    </a>
                    <a href={member.social.github} className="text-gray-500 hover:text-[#333] transition-colors">
                      <FaGithub size={18} />
                    </a>
                  </motion.div>
                </div>
                <p className="text-gray-600 mb-0 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;