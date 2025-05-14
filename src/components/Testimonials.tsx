import React, { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/content';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  const goToPrev = () => {
    setActiveIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveIndex(prev => 
      (prev + 1) % testimonials.length
    );
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(245,251,255,1) 0%, rgba(238,249,247,1) 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary-300"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-secondary-300"></div>
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 rounded-full bg-accent-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
            Client <span className="text-primary-600">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-neutral-600">
            Stories of transformation and healing from those who've walked this path
          </p>
        </div>

        <div className={`max-w-4xl mx-auto relative ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-primary-200">
            <Quote size={60} />
          </div>
          
          {/* Testimonials Carousel */}
          <div className="relative overflow-hidden bg-white rounded-xl shadow-lg p-8 sm:p-10">
            <div
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <blockquote className="mb-6 text-neutral-700 text-lg leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-800">{testimonial.author}</p>
                        <p className="text-neutral-500 text-sm">{testimonial.relationship}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-primary-600 hover:text-primary-800 transition-colors focus:outline-none"
              onClick={goToPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-primary-600 hover:text-primary-800 transition-colors focus:outline-none"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary-600 w-8' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;