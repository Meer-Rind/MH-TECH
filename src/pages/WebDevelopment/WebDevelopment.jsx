import React from 'react';
import ServiceHero from '../../components/sections/services/ServiceHero';
import ServiceDetails from '../../components/sections/services/ServiceDetails';
import ServiceProcess from '../../components/sections/services/ServiceProcess';
import RelatedProjects from '../../components/sections/services/RelatedProjects';
import ServiceFAQ from '../../components/sections/services/ServiceFAQ';
import DownloadButton from '../../components/DownloadButton';


const webDevData = {
  title: "Web Development",
  description: "We build high-performance, scalable web applications that drive business growth and enhance user engagement.",
  image: "/images/services/web-dev.jpg",
  features: [
    "Custom Web Application Development",
    "E-commerce Solutions",
    "CMS Development (WordPress, Shopify, etc.)",
    "API Integration & Development",
    "Progressive Web Apps (PWAs)",
    "Website Maintenance & Support"
  ],
  process: [
    {
      title: "Discovery",
      description: "We analyze your requirements and business objectives"
    },
    {
      title: "Planning",
      description: "Creating architecture and selecting the right tech stack"
    },
    {
      title: "Design",
      description: "UI/UX design tailored to your brand and users"
    },
    {
      title: "Development",
      description: "Agile development with regular updates"
    },
    {
      title: "Testing",
      description: "Rigorous testing for performance and security"
    },
    {
      title: "Deployment",
      description: "Smooth launch with post-launch support"
    }
  ],
  faqs: [
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern technologies like React, Next.js, Node.js, Python Django, Laravel, and more depending on project requirements."
    },
    {
      question: "How long does a typical web development project take?",
      answer: "Timelines vary based on complexity, but most projects range from 4-12 weeks. We'll provide a detailed timeline after our initial consultation."
    }
  ]
};

const WebDevelopment = () => {
  return (
    <div>
      
      <ServiceHero 
        title={webDevData.title} 
        description={webDevData.description} 
        image={webDevData.image}
      />
      <ServiceDetails 
        title="Our Web Development Services"
        features={webDevData.features}
      />
      <ServiceProcess 
        process={webDevData.process}
      />
      <RelatedProjects category="web-development" />
      <ServiceFAQ faqs={webDevData.faqs} />
      <DownloadButton 
  downloadUrl="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID" 
  fileName="Web_Development_Portfolio.pdf"
/>
    </div>
  );
};

export default WebDevelopment;