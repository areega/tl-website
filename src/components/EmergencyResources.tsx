import React, { useEffect, useRef, useState } from 'react';
import { emergencyContacts } from '../data/content';
import { AlertCircle, Phone } from 'lucide-react';

const EmergencyResources: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
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

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`max-w-4xl mx-auto border-2 border-accent-500 bg-accent-50 rounded-xl overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-accent-500 text-white p-4 flex items-center">
            <AlertCircle className="w-6 h-6 mr-3 animate-pulse" />
            <h2 className="text-xl font-semibold">
              Emergency Mental Health Resources
            </h2>
          </div>
          
          <div className="p-6">
            <p className="text-neutral-700 mb-6">
              If you're experiencing a mental health emergency or crisis situation, 
              please contact one of these resources immediately:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div 
                  key={index}
                  className="border border-neutral-200 bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium text-neutral-800 mb-1">
                    {contact.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-2">
                    {contact.description}
                  </p>
                  <a 
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center text-accent-600 hover:text-accent-800 font-medium"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-sm text-neutral-600 italic">
              Note: These resources are for emergencies only. If you're having thoughts of harming yourself or others, 
              please call emergency services immediately or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyResources;