import React from 'react';
import { Users, Award, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our passionate designers bring decades of combined experience to every project"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description: "Recognized for excellence in design innovation and client satisfaction"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Touch",
      description: "We listen, understand, and create spaces that truly reflect your personality"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Modern interior design workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <defs>
            <pattern id="aboutPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#166534" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 animate-slide-up">
            About Maison Élan
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We believe that exceptional design has the power to transform not just spaces, 
            but the way people live, work, and feel within them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-slide-left">
            <h3 className="text-3xl font-bold text-green-900 mb-6">Our Design Philosophy</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Maison Élan, we approach each project as a unique story waiting to be told. 
              Our philosophy centers on creating harmonious environments that seamlessly blend 
              functionality with aesthetic beauty.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe in sustainable design practices, timeless elegance, and the importance 
              of understanding our clients' lifestyles to create truly personalized spaces that 
              stand the test of time.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden animate-slide-right shadow-xl">
            {/* Decorative SVG */}
            <div className="absolute top-4 right-4 opacity-20">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <path d="M30 5 L50 25 L30 45 L10 25 Z" fill="#166534" />
                <path d="M30 15 L40 25 L30 35 L20 25 Z" fill="white" />
              </svg>
            </div>
            
            <div className="text-center relative z-10">
              <h4 className="text-2xl font-bold text-green-900 mb-4">Our Mission</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                "To create spaces that inspire, comfort, and elevate the human experience 
                through thoughtful design and meticulous attention to detail."
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group animate-fade-in-up bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-800 text-white rounded-full mb-6 group-hover:bg-green-900 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-green-900 mb-3 group-hover:text-green-800 transition-colors duration-300">{feature.title}</h4>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;