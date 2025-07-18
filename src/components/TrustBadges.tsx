import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, CheckCircle, Clock } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage for your peace of mind'
    },
    {
      icon: Star,
      title: '4.9★ Rating',
      description: 'Consistently rated excellent by our customers'
    },
    {
      icon: CheckCircle,
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction or we return to make it right'
    },
    {
      icon: Clock,
      title: '7 Days a Week',
      description: 'Available when you need us most'
    }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div 
              key={index} 
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <badge.icon size={24} className="text-white" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{badge.title}</h3>
              <p className="text-blue-100 text-sm">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;