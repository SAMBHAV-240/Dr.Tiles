import React from 'react'; 
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:+61497067290';
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Hexagon className="w-10 h-10 text-blue-400 fill-blue-900" />
                <span className="absolute inset-0 flex items-center justify-center text-blue-400 font-bold text-sm">Dr</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Tiles</h3>
                <p className="text-gray-400 text-sm">Where Quality Matters</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Australia's trusted tiling specialist, providing professional installation services 
              with guaranteed results across Melbourne and surrounding areas.
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p><strong>ABN:</strong> 44 362 692 696</p>
              <p>Licensed & Fully Insured</p>
              <p>Operating 7 Days a Week</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Tile Installation</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Bathroom & Kitchen Tiling</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Waterproofing & Sealing</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Grout Repairs & Renovation</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Free Quotes</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <button 
                  onClick={handleCallNow}
                  className="hover:text-blue-400 transition-colors"
                >
                  +61 497 067 290
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a 
                  href="mailto:info@drtiles.com.au"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@drtiles.com.au
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>3/34 Beddoe Avenue</p>
                  <p>Clayton VIC 3168</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram size={16} />
                <a 
                  href="https://www.instagram.com/dr._tiles/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  @dr._tiles
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/dr._tiles/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Dr. Tiles. All rights reserved. | ABN: 44 362 692 696
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              Professional tiling services across Melbourne, Victoria
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
