import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Caulfield, VIC',
      rating: 5,
      text: 'Dr. Tiles completely transformed our bathroom with beautiful new tiles! The team was incredibly professional, arrived on time, and the installation exceeded our expectations. The craftsmanship is outstanding and the whole bathroom looks amazing. Highly recommended!',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
      service: 'Bathroom Tile Installation'
    },
    {
      name: 'Michael Chen',
      location: 'Glen Waverley, VIC',
      rating: 5,
      text: 'Outstanding service from start to finish! They installed beautiful tiles in our shower with perfect waterproofing. The attention to detail and quality of workmanship was impressive. Will definitely use them for our next renovation project.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      service: 'Shower Tiling & Waterproofing'
    },
    {
      name: 'Emma Williams',
      location: 'Oakleigh, VIC',
      rating: 5,
      text: 'Professional, efficient, and reasonably priced. Dr. Tiles installed our kitchen backsplash and it looks absolutely amazing. The precision and attention to detail was impressive and they left everything clean. Great value for money!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      service: 'Kitchen Tile Installation'
    },
    {
      name: 'David Brown',
      location: 'Bentleigh, VIC',
      rating: 5,
      text: 'Excellent work on our commercial premises. The team was thorough, completed the installation on schedule, and our new floor tiles look fantastic. Their commercial tiling service is top-notch. Very satisfied with the results.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      service: 'Commercial Tiling Project'
    },
    {
      name: 'Lisa Thompson',
      location: 'Clayton, VIC',
      rating: 5,
      text: 'The bathroom renovation was perfect! They installed beautiful new tiles with proper waterproofing and sealing. The craftsmanship is excellent and our bathroom looks brand new. Great local business with outstanding service.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      service: 'Bathroom Renovation'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Our <span className="text-blue-600">Customers</span> Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real reviews from satisfied customers across Melbourne
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Quote size={48} className="text-blue-200 absolute -top-4 -left-4" />
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTestimonial}
                  className="text-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="flex justify-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </motion.div>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    "{testimonials[currentTestimonial].text}"
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-center space-x-4 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-800">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].location}
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-blue-600 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {testimonials[currentTestimonial].service}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </motion.button>
          <motion.button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} className="text-gray-700" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentTestimonial(index);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;