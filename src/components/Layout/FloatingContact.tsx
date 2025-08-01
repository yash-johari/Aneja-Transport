import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Contact Options */}
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/919897030631" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </motion.a>

            {/* Call Button */}
            <motion.a
              href="tel:+919897030631" 
              className="flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span className="whitespace-nowrap">Call Now</span>
            </motion.a>
          </motion.div>
        )}

        {/* Main Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
            isOpen 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FloatingContact;