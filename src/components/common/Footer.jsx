import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const services = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'App Development', path: '/app-development' },
    { name: 'E-Commerce Solutions', path: '/ecommerce' },
    { name: 'UI/UX Design', path: '/graphics-design' },
    { name: 'Branding', path: '/graphics-design' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const ecommercePlatforms = [
    { name: 'Walmart Account Management' },
    { name: 'TikTok Shop Integration' },
    { name: 'eBay Store Setup' },
    { name: 'Amazon FBA Services' },
    { name: 'Multi-channel Listing' },
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold tracking-tight">MH TECH</h3>
            <p className="text-gray-300 leading-relaxed">
              Transforming ideas into digital reality with cutting-edge technology and creative solutions.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:-translate-y-1">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:-translate-y-1">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:-translate-y-1">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:-translate-y-1">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:-translate-y-1">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-700 w-max">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-start group"
                  >
                    <span className="w-1 h-1 mt-2.5 mr-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-700 w-max">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-start group"
                  >
                    <span className="w-1 h-1 mt-2.5 mr-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* E-commerce */}
          <div>
            <h4 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-700 w-max">E-commerce Specialties</h4>
            <ul className="space-y-3">
              {ecommercePlatforms.map((platform, index) => (
                <li 
                  key={index} 
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-start group"
                >
                  <span className="w-1 h-1 mt-2.5 mr-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {platform.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MH TECH. All rights reserved. 
            <span className="mx-2">|</span>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;