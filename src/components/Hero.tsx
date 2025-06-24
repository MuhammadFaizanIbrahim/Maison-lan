import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Luxurious modern interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
      </div>
      
      {/* Floating SVG Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-20">
            <defs>
              <linearGradient id="floatGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="50" fill="url(#floatGradient1)" />
            <circle cx="60" cy="60" r="30" fill="white" opacity="0.3" />
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-30">
            <defs>
              <linearGradient id="floatGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="60" height="60" rx="15" fill="url(#floatGradient2)" />
            <rect x="20" y="20" width="40" height="40" rx="10" fill="white" opacity="0.4" />
          </svg>
        </div>

        <div className="absolute top-1/3 right-1/4 animate-pulse">
          <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-25">
            <polygon points="30,5 55,50 5,50" fill="#ffffff" />
            <polygon points="30,15 45,40 15,40" fill="white" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up drop-shadow-2xl">
          Transforming Spaces
          <span className="block text-amber-400 animate-slide-up-delayed">with Style</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed drop-shadow-lg">
          Create extraordinary living and working environments that reflect your unique vision and lifestyle
        </p>
        
        <button
          onClick={scrollToContact}
          className="group inline-flex items-center px-8 py-4 bg-green-800 text-white text-lg font-semibold rounded-full hover:bg-green-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-in"
        >
          Get a Free Consultation
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative SVG Pattern */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f3f4f6" />
              <stop offset="50%" stopColor="#e5e7eb" />
              <stop offset="100%" stopColor="#f3f4f6" />
            </linearGradient>
          </defs>
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" className="animate-wave" />
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;