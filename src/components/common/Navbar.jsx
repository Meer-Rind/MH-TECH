import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const services = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'App Development', path: '/app-development' },
    { name: 'E-Commerce', path: '/ecommerce' },
    { name: 'UI/UX Design', path: '/graphics-design' },
  ];

  const toggleMobileDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleDesktopDropdown = () => {
    setDesktopDropdownOpen(!desktopDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.span 
              className="text-2xl font-bold text-dark"
              whileHover={{ 
                scale: 1.05,
                color: '#4F46E5' // primary color
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }}
            >
              MH TECH
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/projects' },
              { name: 'Team', path: '/team' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path} 
                  className="text-dark hover:text-primary font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <motion.span 
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* Services Dropdown */}
            <motion.div 
              className="relative"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <motion.button 
                className="flex items-center text-dark hover:text-primary font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                onClick={toggleDesktopDropdown}
              >
                Services <FiChevronDown className={`ml-1 transition-transform duration-300 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              <AnimatePresence>
                {desktopDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-100"
                  >
                    {services.map((service, index) => (
                      <Link 
                        key={index} 
                        to={service.path}
                        className="block px-4 py-2.5 text-dark hover:bg-primary/5 hover:text-primary transition-colors duration-200 flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="btn-primary px-6 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-dark focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <FiX size={24} className="text-primary" />
              ) : (
                <FiMenu size={24} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-4 pb-6">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Team', path: '/team' },
                ].map((item, index) => (
                  <Link 
                    key={index}
                    to={item.path} 
                    className="text-dark hover:text-primary font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Services Accordion */}
                <div className="border-b border-gray-100 pb-2">
                  <motion.button 
                    onClick={() => toggleMobileDropdown(0)}
                    className="flex items-center text-dark hover:text-primary font-medium w-full justify-between py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <span>Services</span>
                    <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen === 0 ? 'rotate-180' : ''}`} />
                  </motion.button>
                  
                  <AnimatePresence>
                    {dropdownOpen === 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-6 space-y-2 mt-2"
                      >
                        {services.map((service, index) => (
                          <Link 
                            key={index} 
                            to={service.path}
                            className="block py-2 px-4 text-dark hover:text-primary rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <motion.div 
                  whileTap={{ scale: 0.95 }}
                  className="mt-2"
                >
                  <Link 
                    to="/contact" 
                    className="btn-primary w-full text-center py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 block"
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