import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'sessions', label: 'Sessions', href: '#sessions' },
  // { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <span className={`font-display font-bold text-xl sm:text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-primary-900' : 'text-primary-900'
            }`}>
              Diana Towett
              <span className="block text-xs sm:text-sm font-primary font-normal text-neutral-600">
                Licensed Counselling Psychologist
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary-900 ${
                  isScrolled ? 'text-neutral-700' : 'text-neutral-800'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+254720065635"
              className="flex items-center text-sm font-medium text-white bg-primary-900 hover:bg-primary-700 px-4 py-2 rounded-full transition-all duration-300"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-neutral-800 hover:text-primary-900 transition-colors"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-neutral-800 hover:text-primary-900 transition-colors py-2 border-b border-neutral-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+254720065635"
              className="flex items-center justify-center text-white bg-primary-900 hover:bg-primary-700 px-4 py-3 rounded-full transition-all duration-300 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;