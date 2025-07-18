import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import before1 from '../assets/transformations/before1.jpg';
import after1 from '../assets/transformations/after1.jpg';
import before2 from '../assets/transformations/before2.jpg';
import after2 from '../assets/transformations/after2.jpg';
import before3 from '../assets/transformations/before3.jpg';
import after3 from '../assets/transformations/after3.jpg';
import before4 from '../assets/transformations/before4.jpg';
import after4 from '../assets/transformations/after4.jpg';

const BeforeAfter: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      before: before1,
      after: after1,
      title: "Kitchen Tile Installation",
      description: "Complete kitchen backsplash installation with premium ceramic tiles",
      location: "Melbourne, VIC"
    },
    {
      before: before2,
      after: after2,
      title: "Bathroom Floor Installation",
      description: "Complete bathroom floor tiling with waterproofing and premium finishes",
      location: "Sydney, NSW"
    },
    {
      before: before3,
      after: after3,
      title: "Commercial Tiling Project",
      description: "Large-scale commercial tiling installation with durable materials",
      location: "Brisbane, QLD"
    },
    {
      before: before4,
      after: after4,
      title: "Shower Tiling & Waterproofing",
      description: "Complete shower renovation with waterproofing and premium tile installation",
      location: "Perth, WA"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-gray-50">
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
            Real <span className="text-blue-600">Transformations</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            See the incredible results from our professional tile cleaning services
            See the incredible results from our professional tiling services
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative group">
                      <img 
                        src={slide.before} 
                        alt={`Before tiling work - ${slide.title}`}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative group">
                      <img 
                        src={slide.after} 
                        alt={`After professional tiling work - ${slide.title}`}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        AFTER
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{slide.title}</h3>
                    <p className="text-gray-600 mb-2">{slide.description}</p>
                    <p className="text-blue-600 font-medium">{slide.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </motion.button>
          <motion.button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} className="text-gray-700" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;