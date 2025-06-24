import React from 'react';
import { Home, Building, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Home Interiors",
      description: "Transform your living spaces into personalized sanctuaries that reflect your style and enhance your daily life.",
      features: ["Living Room Design", "Bedroom Styling", "Kitchen Planning", "Bathroom Renovation"]
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Commercial Design",
      description: "Create inspiring work environments that boost productivity and leave lasting impressions on clients and employees.",
      features: ["Office Spaces", "Retail Design", "Restaurant Interiors", "Hotel Design"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Renovation",
      description: "Breathe new life into existing spaces with comprehensive renovation services that maximize potential and value.",
      features: ["Complete Remodeling", "Space Planning", "Fixture Updates", "Structural Changes"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Beautiful modern living room" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 animate-spin-slow opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#166534" strokeWidth="2" fill="none" strokeDasharray="10,5" />
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 animate-pulse opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <rect x="10" y="10" width="60" height="60" rx="10" fill="#fbbf24" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 animate-slide-up">
            Our Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            From concept to completion, we offer comprehensive design solutions 
            tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/95 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Decorative SVG Corner */}
              <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <path d="M60 0 L60 60 L0 60 Z" fill="#166534" />
                </svg>
              </div>
              
              <div className="text-green-800 mb-6 group-hover:text-green-900 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-green-900 mb-4 group-hover:text-green-800 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700 animate-slide-right"
                    style={{ animationDelay: `${(index * 200) + (featureIndex * 100)}ms` }}
                  >
                    <div className="w-2 h-2 bg-green-800 rounded-full mr-3 animate-pulse"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="text-green-800 font-semibold hover:text-green-900 transition-all duration-300 group-hover:underline transform hover:translate-x-2">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;