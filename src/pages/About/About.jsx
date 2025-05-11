import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../../components/sections/about/AboutHero';
import OurStory from '../../components/sections/about/OurStory';
import CoreValues from '../../components/sections/about/CoreValues';
import TeamPreview from '../../components/sections/about/TeamPreview';
import WhyChooseUs from '../../components/sections/about/WhyChooseUs';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />
      <OurStory />
      <CoreValues />
      <TeamPreview />
      <WhyChooseUs />
    </motion.div>
  );
};

export default About;