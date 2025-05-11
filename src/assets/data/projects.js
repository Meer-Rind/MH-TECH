// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "E-commerce Platform for Fashion Brand",
    description: "A complete e-commerce solution with custom CMS and payment integration.",
    image: "/images/projects/ecommerce-fashion.jpg",
    tags: ["E-commerce", "Web Development", "UI/UX"],
    category: "web-development",
    details: {
      client: "Fashion Brand Inc.",
      date: "June 2023",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Responsive design for all devices",
        "Secure payment gateway integration",
        "Custom CMS for easy content management",
        "Product catalog with advanced filtering",
        "User account management system"
      ],
      challenge: "The client needed a modern e-commerce platform that could handle high traffic during seasonal sales while providing an excellent user experience.",
      solution: "We developed a performant React frontend with a Node.js backend, implementing server-side rendering for SEO benefits and using MongoDB for flexible product data management."
    }
  },
  {
    id: 2,
    title: "Mobile App for Food Delivery",
    description: "iOS and Android app with real-time tracking and payment system.",
    image: "/images/projects/food-delivery.jpg",
    tags: ["App Development", "Mobile", "UI/UX"],
    category: "app-development",
    details: {
      client: "QuickBites Delivery",
      date: "March 2023",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      features: [
        "Real-time order tracking",
        "In-app payment system",
        "Restaurant discovery",
        "User reviews and ratings",
        "Push notifications"
      ],
      challenge: "Creating a cross-platform app that performs as well as native apps while maintaining a single codebase.",
      solution: "We used React Native with carefully optimized native modules for performance-critical components, achieving near-native performance on both platforms."
    }
  }
  // Add more projects with similar detail structures
];