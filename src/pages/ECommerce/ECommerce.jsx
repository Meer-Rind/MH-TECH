import React from 'react';
import ServiceHero from '../../components/sections/services/ServiceHero';
import ServiceDetails from '../../components/sections/services/ServiceDetails';
import ServiceProcess from '../../components/sections/services/ServiceProcess';
import RelatedProjects from '../../components/sections/services/RelatedProjects';
import ServiceFAQ from '../../components/sections/services/ServiceFAQ';
import DownloadButton from '../../components/DownloadButton';


const ecommerceData = {
  title: "E-Commerce Solutions",
  description: "Complete e-commerce solutions including Walmart, TikTok Shop, eBay, and Amazon account management and store setup.",
  image: "/images/services/ecommerce.jpg",
  features: [
    "Walmart Marketplace Integration",
    "TikTok Shop Setup",
    "eBay Store Development",
    "Amazon FBA Services",
    "Multi-channel Inventory Management",
    "Payment Gateway Integration"
  ],
  process: [
    {
      title: "Platform Selection",
      description: "Choosing the right e-commerce platforms for your business"
    },
    {
      title: "Account Setup",
      description: "Creating and optimizing seller accounts"
    },
    {
      title: "Store Design",
      description: "Creating attractive, conversion-optimized storefronts"
    },
    {
      title: "Product Listing",
      description: "Optimized listings with SEO-rich descriptions"
    },
    {
      title: "Integration",
      description: "Connecting with payment, shipping, and inventory systems"
    },
    {
      title: "Launch & Marketing",
      description: "Going live with promotional strategies"
    }
  ],
  faqs: [
    {
      question: "Which e-commerce platforms do you specialize in?",
      answer: "We specialize in Walmart, TikTok Shop, eBay, and Amazon, but can work with any e-commerce platform."
    },
    {
      question: "Do you handle ongoing account management?",
      answer: "Yes, we offer complete account management services including order processing and customer service."
    }
  ]
};

const ECommerce = () => {
  return (
    <div>
     

      <ServiceHero 
        title={ecommerceData.title} 
        description={ecommerceData.description} 
        image={ecommerceData.image}
      />
      <ServiceDetails 
        title="Our E-Commerce Services"
        features={ecommerceData.features}
      />
      <ServiceProcess 
        process={ecommerceData.process}
      />
      
      <RelatedProjects category="ecommerce" />
      <ServiceFAQ faqs={ecommerceData.faqs} />
       <DownloadButton 
  downloadUrl="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID" 
  fileName="E-Commerce_Guide.pdf"
/>
    </div>
  );
};

export default ECommerce;