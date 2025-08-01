import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Menu, X, Sun, Moon, Phone, Mail } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Clients', path: '/clients' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91 9897030631</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>anejabareilly@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Serving All India Since 1971 | Pan-India Logistics Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? `bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg ${
                isDark ? 'shadow-gray-800/20' : 'shadow-gray-200/50'
              }`
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-xl">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Aneja Transport
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Trusted Since 1971
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-orange-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`lg:hidden overflow-hidden ${
            isMenuOpen ? 'max-h-[40rem]' : 'max-h-0'
          } transition-all duration-300 bg-white dark:bg-gray-900 border-t dark:border-gray-800`}
        >
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 px-4 rounded-lg mb-2 transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;