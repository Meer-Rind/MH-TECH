import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  const milestones = [
    { 
      year: "2015", 
      event: "Founded with 3 team members",
      highlight: "Humble beginnings in a small office"
    },
    { 
      year: "2017", 
      event: "Expanded to e-commerce solutions",
      highlight: "First major client acquisition"
    },
    { 
      year: "2019", 
      event: "Launched mobile app development services",
      highlight: "Team grew to 15 members"
    },
    { 
      year: "2022", 
      event: "Partnered with Walmart and TikTok Shop",
      highlight: "Recognized as Top Developer by Clutch"
    }
  ];

  return (
    <section className="relative py-28 bg-[#F9FAFB] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#4F46E5] blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#EC4899] blur-[100px]"></div>
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
            OUR ORIGIN STORY
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1F2937] font-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Building <span className="text-[#4F46E5]">Tomorrow</span>, Today
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.8
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.p 
              className="text-xl text-[#6B7280] leading-relaxed font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="font-semibold text-[#4F46E5]">MH TECH</span> was founded in 2015 with a vision to bridge the gap between businesses and cutting-edge technology. 
              What began as a passionate trio of developers has blossomed into an award-winning digital innovation agency.
            </motion.p>
            
            <motion.p 
              className="text-xl text-[#6B7280] leading-relaxed font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              We've empowered over <span className="font-bold text-[#1F2937]">200+ clients</span> across 15 industries to transform their digital presence and 
              achieve measurable business growth through our tailored solutions.
            </motion.p>
            
            <motion.p 
              className="text-xl text-[#6B7280] leading-relaxed font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our journey reflects a commitment to <span className="font-bold text-[#1F2937]">continuous innovation</span>, 
              <span className="font-bold text-[#1F2937]"> strategic partnerships</span>, and an unwavering dedication to 
              our clients' success stories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-special tracking-wide"
              >
                Read Client Success Stories
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.8,
              delay: 0.2
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-10 top-0 h-full w-1 bg-gradient-to-b from-[#4F46E5] via-[#EC4899] to-[#10B981] rounded-full"></div>
            
            <div className="space-y-8 pl-16">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ 
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-14 top-6 w-8 h-8 rounded-full bg-white border-4 border-[#4F46E5] shadow-lg flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-[#4F46E5] group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-[#E5E7EB] group-hover:border-transparent relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 to-[#EC4899]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    
                    <h3 className="text-3xl font-bold text-[#4F46E5] mb-2 font-heading">{item.year}</h3>
                    <p className="text-lg text-[#1F2937] font-medium mb-2">{item.event}</p>
                    <p className="text-[#6B7280] font-body">{item.highlight}</p>
                    
                    {/* Decorative element */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#EC4899]/10 group-hover:bg-[#EC4899]/20 transition-colors duration-500 -z-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;