import React from 'react';
import Hero from '../../components/sections/Hero';
import ServicesOverview from '../../components/sections/ServicesOverview';
import FeaturedProjects from '../../components/sections/FeaturedProjects';
import Stats from '../../components/sections/Stats';
import Testimonials from '../../components/sections/Testimonials';
import Clients from '../../components/sections/Clients';
import CTA from '../../components/sections/CTA';
// import Footer from '../../components/common/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <Stats />
      <Testimonials />
      <Clients />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;