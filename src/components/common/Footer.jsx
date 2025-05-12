import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const services = [
    { name: 'Web Development', path: '/web-development', icon: 'fa-code' },
    { name: 'App Development', path: '/app-development', icon: 'fa-mobile-screen' },
    { name: 'E-Commerce Solutions', path: '/ecommerce', icon: 'fa-cart-shopping' },
    { name: 'UI/UX Design', path: '/graphics-design', icon: 'fa-pen-ruler' },
    { name: 'Branding', path: '/graphics-design', icon: 'fa-palette' },
  ];

  const company = [
    { name: 'About Us', path: '/about', icon: 'fa-info-circle' },
    { name: 'Our Team', path: '/team', icon: 'fa-users' },
    { name: 'Projects', path: '/projects', icon: 'fa-briefcase' },
    { name: 'Careers', path: '/careers', icon: 'fa-user-tie' },
    { name: 'Contact Us', path: '/contact', icon: 'fa-envelope' },
  ];

  const ecommercePlatforms = [
    { name: 'Walmart Account Management', icon: 'fa-walmart' },
    { name: 'TikTok Shop Integration', icon: 'fa-tiktok' },
    { name: 'eBay Store Setup', icon: 'fa-ebay' },
    { name: 'Amazon FBA Services', icon: 'fa-amazon' },
    { name: 'Multi-channel Listing', icon: 'fa-layer-group' },
  ];

  const socialLinks = [
    { icon: 'fa-brands fa-facebook-f', url: '#', color: 'hover:bg-[#1877F2]' },
    { icon: 'fa-brands fa-twitter', url: '#', color: 'hover:bg-[#1DA1F2]' },
    { icon: 'fa-brands fa-linkedin-in', url: '#', color: 'hover:bg-[#0077B5]' },
    { icon: 'fa-brands fa-instagram', url: '#', color: 'hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]' },
    { icon: 'fa-brands fa-youtube', url: '#', color: 'hover:bg-[#FF0000]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container mx-auto px-5">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <Link to="/" className="inline-block">
              <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MH TECH
              </h3>
            </Link>
            <p className="text-light/70 leading-relaxed">
              Transforming ideas into digital reality with cutting-edge technology and creative solutions.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  className={`w-9 h-9 flex items-center justify-center bg-white/5 rounded-full text-light hover:text-white transition-all ${social.color}`}
                  whileHover={{ y: -3 }}
                >
                  <i className={social.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-white/10">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link 
                    to={service.path} 
                    className="text-light/70 hover:text-primary transition-colors flex items-start group"
                  >
                    <i className={`fas ${service.icon} text-xs mt-1.5 mr-3 text-primary`} />
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-white/10">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link 
                    to={item.path} 
                    className="text-light/70 hover:text-primary transition-colors flex items-start group"
                  >
                    <i className={`fas ${item.icon} text-xs mt-1.5 mr-3 text-primary`} />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* E-commerce */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-white/10">E-commerce</h4>
            <ul className="space-y-3">
              {ecommercePlatforms.map((platform, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="text-light/70 hover:text-primary transition-colors flex items-start group"
                >
                  <i className={`fab ${platform.icon} text-xs mt-1.5 mr-3 text-primary`} />
                  <span className="group-hover:translate-x-1 transition-transform">{platform.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-light/50 text-sm order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} MH TECH. All rights reserved.
          </p>
          <div className="flex space-x-6 order-1 md:order-2">
            <Link to="/privacy" className="text-light/70 hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-light/70 hover:text-primary text-sm transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;