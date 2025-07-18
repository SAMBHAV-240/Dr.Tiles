import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does a typical tile installation take?',
      answer: 'The duration depends on the size of the area and complexity of the installation. Typically, a standard bathroom takes 2-3 days, while kitchen backsplashes take 1-2 days. Larger commercial projects may take 1-2 weeks. We provide accurate time estimates during our free consultation based on your specific project requirements.'
    },
    {
      question: 'What types of tiles do you work with?',
      answer: 'We work with all types of tiles including ceramic, porcelain, natural stone (marble, granite, travertine), glass, and specialty tiles. Our experienced team has expertise in handling different materials and can recommend the best options for your specific application and budget. All our materials meet Australian quality standards.'
    },
    {
      question: 'Do you provide a warranty on your installation work?',
      answer: 'Yes, we offer a comprehensive workmanship warranty on all our installations. We provide a 12-month warranty on standard installations and a 24-month warranty on waterproofing work. If any issues arise due to our workmanship, we\'ll return to address them at no additional cost.'
    },
    {
      question: 'Do you provide design consultation services?',
      answer: 'Yes, we offer comprehensive design consultation to help you choose the right tiles, layouts, and finishes for your project. Our experienced team can provide advice on tile selection, color coordination, pattern layouts, and practical considerations for different areas of your home or business.'
    },
    {
      question: 'Do you handle surface preparation and waterproofing?',
      answer: 'Absolutely! Proper surface preparation and waterproofing are crucial for long-lasting tile installations. We handle all aspects including substrate preparation, waterproof membrane installation, and moisture management. This ensures your tiles are installed on a solid, properly prepared foundation.'
    },
    {
      question: 'Are you insured and licensed?',
      answer: 'Yes, Dr. Tiles is fully licensed and carries comprehensive public liability insurance. All our installers are qualified tradespeople with years of experience in professional tiling. We provide insurance certificates upon request for commercial clients and comply with all Australian building standards.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We service Melbourne and surrounding suburbs including Clayton, Caulfield, Glen Waverley, Oakleigh, Bentleigh, and the broader southeastern Melbourne area. Contact us to confirm if we service your specific location - we may be able to accommodate areas outside our standard service zone.'
    },
    {
      question: 'Do you offer emergency repair services?',
      answer: 'Yes, we offer emergency repair services for urgent situations such as water damage or safety hazards. While full installations require proper scheduling, we can provide temporary solutions and emergency repairs. Contact us immediately for urgent situations.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, all major credit cards (Visa, Mastercard, American Express), EFTPOS, and bank transfers. For residential projects, payment is typically due upon completion. For larger commercial projects, we can arrange progress payments and provide detailed invoicing.'
    },
    {
      question: 'Can you match existing tiles for repairs or extensions?',
      answer: 'We make every effort to match existing tiles for repair work or room extensions. Our team has extensive experience in sourcing discontinued tiles and finding close matches. We can also provide creative solutions using complementary tiles to create seamless transitions when exact matches aren\'t available.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
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
            Frequently Asked <span className="text-blue-600">Questions</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Get answers to common questions about our professional tile cleaning services
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} className="text-blue-600 flex-shrink-0" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div 
                      className="px-6 pb-5"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.p 
                        className="text-gray-600 leading-relaxed"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Still have questions? We're here to help!
          </motion.p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Contact Us Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;