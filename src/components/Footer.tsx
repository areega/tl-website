import React from 'react';
import { Heart, Facebook, Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* About Column */}
            <div>
              <h3 className="font-display text-xl font-bold mb-4 text-primary-300">
                Diana Towett
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Licensed Counselling Psychologist dedicated to providing compassionate, 
                client-centered therapeutic services to individuals, couples, and families.
              </p>
              <div className="flex space-x-4 mt-6">
                <a 
                  href="#" 
                  className="bg-neutral-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="bg-neutral-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="bg-neutral-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:dianatowett@gmail.com" 
                  className="bg-neutral-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-200">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#about" 
                    className="text-neutral-400 hover:text-primary-300 transition-colors"
                  >
                    About Diana
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    className="text-neutral-400 hover:text-primary-300 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#sessions" 
                    className="text-neutral-400 hover:text-primary-300 transition-colors"
                  >
                    Session Information
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq" 
                    className="text-neutral-400 hover:text-primary-300 transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-neutral-400 hover:text-primary-300 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-200">
                Contact Information
              </h3>
              <address className="text-neutral-400 not-italic space-y-2">
                {/* <p>123 Peaceful Place</p>
                <p>Nairobi, Kenya</p> */}
                <p className="mt-4">
                  <a 
                    href="tel:+254720065635" 
                    className="hover:text-primary-300 transition-colors"
                  >
                    +254 720 065 635
                  </a>
                </p>
                <p>
                  <a 
                    href="mailto:dianatowett@gmail.com" 
                    className="hover:text-primary-300 transition-colors"
                  >
                    dianatowett@gmail.com
                  </a>
                </p>
              </address>
            </div>
          </div>
          
          <hr className="border-neutral-800 my-10" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Diana Towett. All rights reserved.
            </p>
            
            <div className="flex items-center">
              <p className="text-neutral-500 text-sm mr-1">
                Made with
              </p>
              <Heart className="w-4 h-4 text-accent-500 mx-1" />
              <p className="text-neutral-500 text-sm ml-1">
                for mental wellness
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="bg-neutral-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors mt-4 md:mt-0"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;