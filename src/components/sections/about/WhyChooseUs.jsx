import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaHeadset, FaClock, FaChartPie } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaTrophy />,
      title: "Proven Expertise",
      description: "10+ years of experience in digital solutions",
      highlight: "10+ years",
      gradient: "from-[#4F46E5] to-[#818CF8]"
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Support",
      description: "24/7 customer support for all our clients",
      highlight: "24/7",
      gradient: "from-[#10B981] to-[#34D399]"
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      description: "We meet deadlines without compromising quality",
      highlight: "100%",
      gradient: "from-[#EC4899] to-[#F472B6]"
    },
    {
      icon: <FaChartPie />,
      title: "Data-Driven Approach",
      description: "Solutions based on analytics and research",
      highlight: "Data-first",
      gradient: "from-[#F59E0B] to-[#FBBF24]"
    }
  ];

  return (
    <section className="relative py-28 bg-[#F9FAFB] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#4F46E5] blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#EC4899] blur-[100px]"></div>
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
            OUR ADVANTAGE
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1F2937] font-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Why <span className="text-[#4F46E5]">Choose</span> Us?
          </motion.h2>
          <motion.p 
            className="text-xl text-[#6B7280] max-w-2xl mx-auto font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            We don't just deliver projects — we build <span className="font-semibold text-[#1F2937]">strategic partnerships</span> that drive measurable success.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.15,
                duration: 0.6
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative h-full"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10`}></div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col border border-[#E5E7EB] group-hover:border-transparent">
                <motion.div 
                  className="flex items-center mb-8"
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mr-5 text-white shadow-lg`}>
                    {React.cloneElement(reason.icon, { size: 20 })}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2937] group-hover:text-[#4F46E5] transition-colors duration-300 font-heading">
                    {reason.title}
                  </h3>
                </motion.div>
                
                <p className="text-[#6B7280] mb-8 flex-grow font-body leading-relaxed">
                  {reason.description.split(reason.highlight).map((part, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="font-bold text-[#1F2937]">{reason.highlight}</span>}
                      {part}
                    </React.Fragment>
                  ))}
                </p>
                
                {/* Animated progress bar */}
                <motion.div 
                  className="w-full bg-[#F3F4F6] h-1.5 rounded-full overflow-hidden"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${reason.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#4F46E5] to-[#EC4899] rounded-2xl p-10 text-white shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
              { number: "100%", label: "Satisfaction Guarantee" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">{stat.number}</div>
                <div className="text-lg opacity-90 font-special tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;