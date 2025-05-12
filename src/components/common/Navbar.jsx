import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(false);

  const services = [
    { name: 'Web Development', path: '/web-development', icon: 'fa-code' },
    { name: 'App Development', path: '/app-development', icon: 'fa-mobile-screen' },
    { name: 'E-Commerce', path: '/ecommerce', icon: 'fa-cart-shopping' },
    { name: 'UI/UX Design', path: '/graphics-design', icon: 'fa-pen-ruler' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-5 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <span className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MH TECH
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link 
                  to={item.path} 
                  className="relative font-medium text-dark hover:text-primary transition-colors group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            
            {/* Services Dropdown */}
            <motion.div 
              className="relative"
              onMouseEnter={() => setDesktopDropdown(true)}
              onMouseLeave={() => setDesktopDropdown(false)}
            >
              <button className="flex items-center font-medium text-dark hover:text-primary transition-colors group">
                Services 
                <i className={`fas fa-chevron-down ml-2 text-xs transition-transform ${desktopDropdown ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
              
              <AnimatePresence>
                {desktopDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-xl shadow-2xl py-3 z-50 border border-gray-100"
                  >
                    {services.map((service) => (
                      <Link 
                        key={service.name} 
                        to={service.path}
                        className="flex items-center px-5 py-3 text-dark hover:bg-gray-50 hover:text-primary transition-all group"
                      >
                        <i className={`fas ${service.icon} text-primary mr-3 w-5 text-center`} />
                        <span>{service.name}</span>
                        <i className="fas fa-arrow-right ml-auto text-xs opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-200"></div>
              <Link 
                to="/contact" 
                className="relative px-6 py-2.5 bg-primary text-white font-medium rounded-full hover:shadow-xl transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-dark focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`w-6 flex flex-col items-end space-y-1.5 transition-all ${isOpen ? 'space-y-0' : ''}`}>
              <span className={`block h-0.5 bg-dark transition-all ${isOpen ? 'w-6 rotate-45 translate-y-1.5' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-dark transition-all ${isOpen ? 'opacity-0' : 'w-5'}`}></span>
              <span className={`block h-0.5 bg-dark transition-all ${isOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-4'}`}></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-1 pt-4 pb-6">
                {navLinks.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link 
                      to={item.path} 
                      className="block py-3 px-5 text-dark hover:bg-gray-50 rounded-lg transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Services Accordion */}
                <div className="border-t border-gray-100 pt-2">
                  <motion.button 
                    onClick={() => setMobileDropdown(mobileDropdown === 'services' ? null : 'services')}
                    className="flex items-center justify-between w-full py-3 px-5 text-dark hover:bg-gray-50 rounded-lg transition-colors font-medium"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <span>Services</span>
                    <i className={`fas fa-chevron-down text-xs transition-transform ${mobileDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </motion.button>
                  
                  <AnimatePresence>
                    {mobileDropdown === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-8 space-y-1"
                      >
                        {services.map((service, index) => (
                          <motion.div
                            key={service.name}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                          >
                            <Link 
                              to={service.path}
                              className="flex items-center py-2.5 px-5 text-dark hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              <i className={`fas ${service.icon} text-primary mr-3 w-5 text-center`} />
                              {service.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-2"
                >
                  <Link 
                    to="/contact" 
                    className="block mt-2 py-3 px-5 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full hover:shadow-lg transition-all text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;