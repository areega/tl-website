import React, { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Laptop } from 'lucide-react';

const SessionInfo: React.FC = () => {
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

  return (
    <section 
      id="sessions" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
            Session <span className="text-primary-600">Information</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-neutral-600">
            Flexible options to fit your schedule and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Virtual Sessions */}
          <div 
            className={`bg-primary-50 rounded-xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Laptop className="w-10 h-10 text-primary-600 mr-4" />
                <h3 className="text-2xl font-semibold text-neutral-800">
                  Virtual Sessions
                </h3>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-white p-1 rounded-full mr-3 mt-1">
                    <div className="bg-primary-500 w-3 h-3 rounded-full"></div>
                  </div>
                  <p className="text-neutral-700">
                    <span className="font-medium">Convenient access</span> from anywhere with internet connection
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-1 rounded-full mr-3 mt-1">
                    <div className="bg-primary-500 w-3 h-3 rounded-full"></div>
                  </div>
                  <p className="text-neutral-700">
                    <span className="font-medium">Secure video platform</span> ensuring privacy and confidentiality
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-1 rounded-full mr-3 mt-1">
                    <div className="bg-primary-500 w-3 h-3 rounded-full"></div>
                  </div>
                  <p className="text-neutral-700">
                    <span className="font-medium">Same quality care</span> as in-person sessions
                  </p>
                </li>
              </ul>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-neutral-500 mr-2" />
                  <span className="text-neutral-600">50 minutes session duration</span>
                </div>
              </div>
            </div>
          </div>

          {/* In-Person Sessions */}
          <div 
            className={`bg-secondary-50 rounded-xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-10 h-10 text-secondary-600 mr-4" />
                <h3 className="text-2xl font-semibold text-neutral-800">
                  In-Person Sessions
                </h3>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-white p-1 rounded-full mr-3 mt-1">
                    <div className="bg-secondary-500 w-3 h-3 rounded-full"></div>
                  </div>
                  <p className="text-neutral-700">
                    <span className="font-medium">Comfortable office</span> in a peaceful, private setting
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-1 rounded-full mr-3 mt-1">
                    <div className="bg-secondary-500 w-3 h-3 rounded-full"></div>
                  </div>
                  <p className="text-neutral-700">
                    <span className="font-medium">Easy access</span> with convenient parking and amenities
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-1 rounded-full mr-3 mt-1">
                    <div className="bg-secondary-500 w-3 h-3 rounded-full"></div>
                  </div>
                  <p className="text-neutral-700">
                    <span className="font-medium">Face-to-face connection</span> for deeper therapeutic work
                  </p>
                </li>
              </ul>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-neutral-500 mr-2" />
                    <span className="text-neutral-600">50 minutes for individual sessions</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-neutral-500 mr-2" />
                    <span className="text-neutral-600">75 minutes for couples sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionInfo;