import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
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
      id="contact" 
      ref={sectionRef}
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, rgba(243,250,255,1) 0%, rgba(236,248,246,1) 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
            Get in <span className="text-primary-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-neutral-600">
            Have questions or ready to schedule an appointment? Reach out today.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-1">Phone</h4>
                    <a 
                      href="tel:+254720065635" 
                      className="text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      +254 720 065 635
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-1">Email</h4>
                    <a 
                      href="mailto:dianatowett@gmail.com" 
                      className="text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      dianatowett@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-1">Location</h4>
                    <address className="text-neutral-600 not-italic">
                      123 Peaceful Place<br />
                      Nairobi, Kenya
                    </address>
                  </div>
                </div> */}
                
                {/* <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-1">Hours</h4>
                    <p className="text-neutral-600">
                      Mon - Fri: 9AM - 5PM<br />
                      Sat: 9AM - 12PM
                    </p>
                  </div>
                </div> */}
              </div>
              
              <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-100 text-center">
                <h4 className="font-medium text-neutral-800 mb-2">
                  Ready to book a session?
                </h4>
                <p className="text-neutral-600 mb-4">
                  Call directly to schedule your appointment.
                </p>
                <a 
                  href="tel:+254720065635" 
                  className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call to Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;