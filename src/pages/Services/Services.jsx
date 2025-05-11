import React from 'react';
import ServiceCard from '../../components/ui/ServiceCard';
import { FaCode, FaMobile, FaShoppingCart, FaPalette } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your business needs.",
      link: "/web-development"
    },
    {
      icon: <FaMobile />,
      title: "App Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      link: "/app-development"
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      description: "Complete e-commerce solutions including Walmart, Amazon, and TikTok Shop integration.",
      link: "/ecommerce"
    },
    {
      icon: <FaPalette />,
      title: "Graphics & UI/UX",
      description: "Stunning designs and user experiences that convert visitors to customers.",
      link: "/graphics-design"
    }
  ];

  return (
    <div className="section-padding">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;