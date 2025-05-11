import React from 'react';
import ServiceHero from '../../components/sections/services/ServiceHero';
import ServiceDetails from '../../components/sections/services/ServiceDetails';
import ServiceProcess from '../../components/sections/services/ServiceProcess';
import RelatedProjects from '../../components/sections/services/RelatedProjects';
import ServiceFAQ from '../../components/sections/services/ServiceFAQ';
import DownloadButton from '../../components/DownloadButton';


const appDevData = {
  title: "App Development",
  description: "We build high-performance mobile applications that deliver seamless user experiences across iOS and Android platforms.",
  image: "/images/services/app-dev.jpg",
  features: [
    "Native iOS & Android Development",
    "Cross-platform App Development",
    "UI/UX Design for Mobile",
    "API Integration",
    "App Store Optimization",
    "Maintenance & Updates"
  ],
  process: [
    {
      title: "Requirement Analysis",
      description: "Understanding your business goals and target audience"
    },
    {
      title: "Prototyping",
      description: "Creating wireframes and interactive prototypes"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful interfaces"
    },
    {
      title: "Development",
      description: "Building the app with clean, maintainable code"
    },
    {
      title: "Testing",
      description: "Ensuring quality across devices and platforms"
    },
    {
      title: "Deployment",
      description: "Publishing to app stores and post-launch support"
    }
  ],
  faqs: [
    {
      question: "Do you develop both iOS and Android apps?",
      answer: "Yes, we develop for both platforms using native (Swift/Kotlin) and cross-platform (React Native/Flutter) technologies."
    },
    {
      question: "How much does app development cost?",
      answer: "Costs vary based on complexity, features, and platforms. We provide detailed quotes after understanding your requirements."
    }
  ]
};

const AppDevelopment = () => {
  return (
    <div>
     
      <ServiceHero 
        title={appDevData.title} 
        description={appDevData.description} 
        image={appDevData.image}
      />
      <ServiceDetails 
        title="Our App Development Services"
        features={appDevData.features}
      />
      <ServiceProcess 
        process={appDevData.process}
      />
      <RelatedProjects category="app-development" />
      <ServiceFAQ faqs={appDevData.faqs} />
       <DownloadButton 
  downloadUrl="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID" 
  fileName="App_Development_Case_Studies.pdf"
/>
    </div>
  );
};

export default AppDevelopment;