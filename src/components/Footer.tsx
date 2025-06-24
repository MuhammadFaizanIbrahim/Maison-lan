import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Elegant interior design" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-green-900/90"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <defs>
            <pattern id="footerPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="1" className="animate-pulse" />
              <circle cx="40" cy="40" r="10" fill="white" opacity="0.3" className="animate-ping" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2 animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="white" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="36" height="36" rx="8" fill="url(#footerLogoGradient)" className="animate-pulse" />
                  <rect x="8" y="8" width="24" height="2" fill="#166534" opacity="0.9" />
                  <rect x="8" y="14" width="18" height="2" fill="#166534" opacity="0.7" />
                  <rect x="8" y="20" width="20" height="2" fill="#166534" opacity="0.8" />
                  <rect x="8" y="26" width="16" height="2" fill="#166534" opacity="0.6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Maison Élan</h3>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Creating extraordinary living and working environments that reflect 
              your unique vision and lifestyle. Transform your space with our 
              expert design team.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Portfolio', 'Contact'].map((link, index) => (
                <li key={index} className="animate-fade-in" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-green-100 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Home Interiors', 'Commercial Design', 'Renovation', 'Consultation'].map((service, index) => (
                <li key={index} className="animate-fade-in" style={{ animationDelay: `${500 + index * 100}ms` }}>
                  <span className="text-green-100">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p className="text-green-100 text-sm">
            © {currentYear} Maison Élan. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service'].map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="text-green-100 hover:text-white text-sm transition-all duration-300 hover:underline animate-fade-in"
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;