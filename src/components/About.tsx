import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
            About <span className="text-primary-600">Diana</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-neutral-600">
            Compassionate care from a licensed professional with a passion for healing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="tl1.jpeg" 
                  alt="Diana Towett in her office" 
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-50 p-5 rounded-full shadow-lg text-primary-700">
                <Award size={36} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-display font-semibold mb-6 text-neutral-800">
              My name is Diana Towett
            </h3>
            
            <div className="mb-6 p-4 border-l-4 border-primary-500 bg-primary-50 rounded-r-lg">
              <p className="italic text-neutral-700 leading-relaxed">
                "I believe that healing is possible, and even the most difficult seasons can become opportunities for transformation."
              </p>
            </div>
            
            <p className="text-neutral-700 mb-6 leading-relaxed">
              As a licensed Counselling Psychologist with a passion for walking alongside children, women, and families as they navigate life's challenges, I offer a safe and supportive space to explore, reflect, and rebuild.
            </p>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              Whether you're facing emotional pain, trauma, relationship struggles, or simply feeling overwhelmed, my approach is compassionate, client-centered, and tailored to meet the unique needs of every individual I work with.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 p-2 rounded-full text-primary-600 mr-4">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Education</h4>
                  <p className="text-neutral-600">MA in Counselling Psychology from Daystar University</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 p-2 rounded-full text-primary-600 mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Licensed Professional</h4>
                  <p className="text-neutral-600">Licensed by the Counselors and Psychologists Board of Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 p-2 rounded-full text-primary-600 mr-4">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Approach</h4>
                  <p className="text-neutral-600">Compassionate, client-centered therapy tailored to your unique needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;