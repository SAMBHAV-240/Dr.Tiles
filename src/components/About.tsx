import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield, Calendar, MapPin } from 'lucide-react';
import image from '../assets/transformations/image.jpg';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '500+', text: 'Happy Customers' },
    { icon: Clock, number: '5+', text: 'Years Experience' },
    { icon: Award, number: '100%', text: 'Satisfaction Rate' },
    { icon: Calendar, number: '7', text: 'Days a Week' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Choose <span className="text-blue-600">Dr. Tiles</span>?
            </motion.h2>
            
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Dr. Tiles has been Australia's trusted tiling specialist for over 5 years. 
                We pride ourselves on delivering exceptional results using premium materials, 
                expert craftsmanship, and professional installation techniques.
              </motion.p>

              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Operating 7 days a week, we're committed to providing convenient, reliable tiling services 
                when you need it most. Our team of experienced professionals is fully licensed, 
                insured, and dedicated to exceeding your expectations with every project.
              </motion.p>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed professionals with comprehensive insurance coverage for your protection.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">100% Workmanship Guarantee</h3>
                    <p className="text-gray-600">We stand behind our craftsmanship with a complete workmanship guarantee on every project.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">7 Days a Week Service</h3>
                    <p className="text-gray-600">Available when you need us most, including weekends and holidays.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Local Melbourne Business</h3>
                    <p className="text-gray-600">Based in Clayton, VIC, serving Melbourne and surrounding areas with pride.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={image}
              alt="Professional Dr. Tiles installation team at work using premium materials and tools" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <stat.icon size={24} className="text-blue-600" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;