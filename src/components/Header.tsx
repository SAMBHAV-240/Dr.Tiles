import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../assets/logo.jpg'; // Ensure this path is correct

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+61497067290';
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Dr. Tiles Logo"
              className="w-14 h-14 object-contain rounded-md shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Dr. Tiles</h1>
              <p className="text-xs text-gray-600 font-medium">Where Quality Matters</p>
            </div>
          </div>

         <nav className="hidden md:flex items-center space-x-8">
  {['Home', 'Services', 'About', 'Testimonials', 'FAQ', 'Contact'].map((section) => (
    <button
      key={section}
      onClick={() => scrollToSection(section)}
      className="text-gray-700 hover:text-blue-600 transition-colors font-medium capitalize"
    >
      {section}
    </button>
  ))}

  {/* Instagram Link */}
  <a
    href="https://www.instagram.com/dr._tiles/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5 mr-1"
    >
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2.1.3 2.6.6.6.3 1 .7 1.3 1.3.3.5.5 1.4.6 2.6.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2.1-.6 2.6-.3.6-.7 1-1.3 1.3-.5.3-1.4.5-2.6.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2.1-.3-2.6-.6-.6-.3-1-.7-1.3-1.3-.3-.5-.5-1.4-.6-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2.1.6-2.6.3-.6.7-1 1.3-1.3.5-.3 1.4-.5 2.6-.6C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.5.2 4.3.5 3.4 1c-.9.5-1.7 1.3-2.2 2.2-.5.9-.8 2.1-1 3.6C0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 5 .2 1.5.5 2.7 1 3.6.5.9 1.3 1.7 2.2 2.2.9.5 2.1.8 3.6 1C8.3 24 8.7 24 12 24s3.7 0 5-.1c1.5-.2 2.7-.5 3.6-1 .9-.5 1.7-1.3 2.2-2.2.5-.9.8-2.1 1-3.6.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.2-1.5-.5-2.7-1-3.6-.5-.9-1.3-1.7-2.2-2.2-.9-.5-2.1-.8-3.6-1C15.7 0 15.3 0 12 0z" />
      <path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4z" />
      <circle cx="18.4" cy="5.6" r="1.44" />
    </svg>
    Instagram
  </a>
</nav>

          {/* Call Now Button */}
          <div className="hidden lg:block">
            <button
              onClick={handleCallNow}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 text-sm"
            >
              <Phone size={18} />
              <span>+61 497 067 290</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {['home', 'services', 'about', 'testimonials', 'faq', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium capitalize"
                >
                  {section}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={handleCallNow}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 w-full justify-center text-sm"
                >
                  <Phone size={18} />
                  <span>Call +61 497 067 290</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
