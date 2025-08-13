import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-xl">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Aneja Transport</h3>
                <p className="text-sm text-gray-400">Trusted Since 1971</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Three generations of trusted transport services across India. 
              From Bareilly to nationwide, we deliver your goods with care and reliability.
            </p>
            <div className="flex space-x-4">
              {/* Replace # with actual social media links */}
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link>
              <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</Link>
              <Link to="/fleet" className="text-gray-400 hover:text-white transition-colors duration-200">Fleet</Link>
              <Link to="/clients" className="text-gray-400 hover:text-white transition-colors duration-200">Clients</Link>
              <Link to="/faqs" className="text-gray-400 hover:text-white transition-colors duration-200">FAQs</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-500">Our Services</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <span className="text-gray-400">Full Truck Load (FTL) Services</span>
              <span className="text-gray-400">Part Load & Shared Cargo Solutions</span>
              <span className="text-gray-400">Warehousing & Distribution</span>
              <span className="text-gray-400">Logistics & Supply Chain Management</span>
              <span className="text-gray-400">Containerised Transportation</span>
              <span className="text-gray-400">Specialised Industrial Transport</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-500">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    Leechi Bagh, NH24 Qila, Bareilly<br />
                    Uttar Pradesh - 243003, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">+91 9897030631</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">anejabareilly@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Aneja Transport. All rights reserved. | 
              <span className="ml-1">GSTIN: 09AFCPK8705M1Z2</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>ISO Certified Transport</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;