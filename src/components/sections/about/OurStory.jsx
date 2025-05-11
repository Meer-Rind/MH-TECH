import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
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
            className="space-y-6"
          >
            <motion.h2 
              className="text-4xl font-bold text-dark"
              whileInView={{ 
                opacity: 1,
                x: 0,
                transition: { delay: 0.1 }
              }}
            >
              Our <span className="text-primary">Journey</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              MH TECH was founded in 2015 with a vision to bridge the gap between businesses and technology. 
              What started as a small team of passionate developers has now grown into a full-service digital agency.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              We've helped over <span className="font-semibold text-dark">200 clients</span> across various industries establish their digital presence and 
              achieve their business goals through innovative solutions.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our journey has been marked by <span className="font-semibold text-dark">continuous learning</span>, adaptation to new technologies, 
              and an unwavering commitment to client success.
            </motion.p>
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
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            
            <div className="space-y-10 pl-12">
              {[
                { year: "2015", event: "Founded with 3 team members" },
                { year: "2017", event: "Expanded to e-commerce solutions" },
                { year: "2019", event: "Launched mobile app development services" },
                { year: "2022", event: "Partnered with Walmart and TikTok Shop" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-1.5 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-primary mb-2">{item.year}</h3>
                    <p className="text-gray-600">{item.event}</p>
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