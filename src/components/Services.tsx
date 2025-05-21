import React, { useEffect, useRef, useState } from 'react';
import { services } from '../data/content';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
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
      { threshold: 0.1 }
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

  const IconComponent = ({ iconName }: { iconName: string }) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={32} /> : null;
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, rgba(243,250,255,1) 0%, rgba(236,248,246,1) 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
            How I Can <span className="text-primary-900">Help</span>
          </h2>
          <div className="w-24 h-1 bg-primary-800 mx-auto mb-6"></div>
          <p className="text-neutral-600">
            Comprehensive therapeutic services tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="bg-primary-100 text-primary-900 p-3 rounded-full inline-flex mb-4">
                  <IconComponent iconName={service.icon} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;