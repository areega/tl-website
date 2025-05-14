import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Compassionate Psychological Support for Individuals, Couples, and Families';

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 pb-16 flex items-center"
      style={{
        background: 'linear-gradient(135deg, rgba(236,246,255,1) 0%, rgba(229,244,249,1) 50%, rgba(226,245,237,1) 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-primary-100 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[20%] w-40 h-40 rounded-full bg-secondary-100 opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`max-w-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-neutral-900 mb-6">
              <span className="block text-primary-700">Diana Towett, MA</span>
              <span className="relative overflow-hidden">
                <span className="text-xl sm:text-2xl md:text-3xl font-normal text-neutral-700">
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>
              </span>
            </h1>
            
            <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
              Creating a safe, supportive space for healing and growth. 
              Whether you're facing emotional challenges, relationship difficulties, 
              or seeking personal development, I'm here to walk alongside you on your journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#about" 
                className="btn bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 text-center animate-pulse"
              >
                Learn More
              </a>
              <a 
                href="#contact" 
                className="btn bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book a Session
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="tl1.jpeg" 
                  alt="Diana Towett, Licensed Counselling Psychologist" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                {/* <p className="text-primary-700 font-medium">15+ Years Experience</p> */}
                <p className="text-neutral-600 text-sm">Licensed Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;