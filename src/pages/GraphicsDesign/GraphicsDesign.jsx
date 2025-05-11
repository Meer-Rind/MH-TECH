import React from 'react';
import ServiceHero from '../../components/sections/services/ServiceHero';
import ServiceDetails from '../../components/sections/services/ServiceDetails';
import ServiceProcess from '../../components/sections/services/ServiceProcess';
import RelatedProjects from '../../components/sections/services/RelatedProjects';
import ServiceFAQ from '../../components/sections/services/ServiceFAQ';
import DownloadButton from '../../components/DownloadButton';


const designData = {
  title: "Graphics & UI/UX Design",
  description: "Stunning visual designs and intuitive user experiences that elevate your brand and engage your audience.",
  image: "/images/services/design.jpg",
  features: [
    "Brand Identity Design",
    "UI/UX for Web & Mobile",
    "Marketing Materials",
    "Social Media Graphics",
    "Packaging Design",
    "Motion Graphics"
  ],
  process: [
    {
      title: "Discovery",
      description: "Understanding your brand and target audience"
    },
    {
      title: "Research",
      description: "Market and competitor analysis"
    },
    {
      title: "Concept Development",
      description: "Creating initial design concepts"
    },
    {
      title: "Design",
      description: "Developing the visual elements"
    },
    {
      title: "Testing",
      description: "User testing and feedback"
    },
    {
      title: "Delivery",
      description: "Final files and style guides"
    }
  ],
  faqs: [
    {
      question: "What design tools do you use?",
      answer: "We use industry-standard tools like Adobe Creative Suite, Figma, Sketch, and Blender for 3D designs."
    },
    {
      question: "Do you provide branding guidelines?",
      answer: "Yes, we deliver comprehensive brand guidelines with all branding projects."
    }
  ]
};

const GraphicsDesign = () => {
  return (
    <div>
     
      <ServiceHero 
        title={designData.title} 
        description={designData.description} 
        image={designData.image}
      />
      <ServiceDetails 
        title="Our Design Services"
        features={designData.features}
      />
      <ServiceProcess 
        process={designData.process}
      />
      <RelatedProjects category="graphics-design" />
      <ServiceFAQ faqs={designData.faqs} />
       <DownloadButton 
  downloadUrl="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID" 
  fileName="Graphic_Design_Portfolio.pdf"
/>
    </div>
    
  );
};

export default GraphicsDesign;