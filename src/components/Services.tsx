import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Droplets, Building } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Tile Installation',
      description: 'Expert tile installation for all surfaces using premium materials and professional techniques. We handle ceramic, porcelain, natural stone, and specialty tiles with precision craftsmanship for lasting results.',
      features: ['All tile types', 'Precision installation', 'Surface preparation', 'Quality guarantee']
    },
    {
      icon: Shield,
      title: 'Bathroom & Kitchen Tiling',
      description: 'Specialized tiling services for wet areas and high-use spaces. Our expertise in waterproofing and moisture management ensures durable, beautiful installations that stand the test of time.',
      features: ['Wet area expertise', 'Waterproofing included', 'Custom layouts', 'Premium finishes']
    },
    {
      icon: Droplets,
      title: 'Waterproofing & Sealing',
      description: 'Comprehensive waterproofing solutions and premium sealing services. We provide moisture barriers and protective treatments to ensure your tiled surfaces remain durable and water-resistant.',
      features: ['Moisture barriers', 'Premium sealants', 'Waterproof guarantee', 'Long-term protection']
    },
    {
      icon: Building,
      title: 'Grout Repairs & Renovation',
      description: 'Professional grout repair, replacement, and surface preparation services. We restore damaged grout lines and prepare surfaces for new installations with meticulous attention to detail.',
      features: ['Grout replacement', 'Surface preparation', 'Repair services', 'Renovation prep']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Professional <span className="text-blue-600">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive tile installation and renovation solutions tailored to your specific needs, 
            delivered by experienced professionals using premium materials and expert techniques
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <service.icon size={32} className="text-blue-600" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
          >
            Get Your Free Quote Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;