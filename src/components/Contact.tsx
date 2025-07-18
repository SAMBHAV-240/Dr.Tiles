import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    serviceType: '',
    preferredDate: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('https://dr-tiles-backend.onrender.com/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Thank you for your inquiry! We'll get back to you within 2 hours during business hours.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        suburb: '',
        serviceType: '',
        preferredDate: '',
        message: '',
      });
    } else {
      alert("Something went wrong. Please try again later.");
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert("There was an issue submitting your request. Please try again.");
  }
};

  const handleCallNow = () => {
    window.location.href = 'tel:+61497067290';
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
            Get Your <span className="text-blue-600">Free Quote</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to start your tiling project? Contact us for a free, no-obligation quote
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                We're here to help transform your space with professional tiling services. 
                Contact us today for a free consultation and quote. Operating 7 days a week 
                for your convenience.
              </motion.p>
            </div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone size={24} className="text-blue-600" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <button 
                    onClick={handleCallNow}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    +61 497 067 290
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail size={24} className="text-blue-600" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a 
                    href="mailto:info@drtiles.com.au"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    info@drtiles.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin size={24} className="text-blue-600" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">3/34 Beddoe Avenue<br />Clayton VIC 3168</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock size={24} className="text-blue-600" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-800">Operating Hours</h4>
                  <p className="text-gray-600">7 days a week<br />7:00 AM - 7:00 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-blue-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-800 mb-2">Service Areas</h4>
              <p className="text-gray-600 text-sm">
                Clayton, Caulfield, Glen Waverley, Oakleigh, Bentleigh, and surrounding Melbourne suburbs. 
                Contact us to confirm service availability in your area.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-gray-50 rounded-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-2">
                    Suburb *
                  </label>
                  <input
                    type="text"
                    id="suburb"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your suburb"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="tile-installation">Tile Installation</option>
                    <option value="bathroom-kitchen-tiling">Bathroom & Kitchen Tiling</option>
                    <option value="waterproofing-sealing">Waterproofing & Sealing</option>
                    <option value="grout-repairs-renovation">Grout Repairs & Renovation</option>
                    <option value="multiple-services">Multiple Services</option>
                    <option value="other">Other (please specify in message)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your tiling project, property size, tile preferences, design ideas, or any other details that would help us provide an accurate quote..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send size={20} />
                <span>Get My Free Quote</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                We'll respond within 2 hours during business hours with a detailed quote. 
                For urgent requests, please call +61 497 067 290.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;