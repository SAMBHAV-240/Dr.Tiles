import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const StickyBookNow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className={`fixed bottom-6 right-6 z-50 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 64
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.button
        onClick={scrollToContact}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 flex items-center space-x-2"
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <Calendar size={20} />
        <span>Get Quote</span>
      </motion.button>
    </motion.div>
  );
};

export default StickyBookNow;