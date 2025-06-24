import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll be in touch soon.');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Modern office interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 animate-float">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="25" fill="#166534" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 animate-float-delayed">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <rect x="10" y="10" width="60" height="60" rx="15" fill="#fbbf24" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 animate-slide-up">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Ready to transform your space? Let's discuss your vision and create 
            something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-left">
            <h3 className="text-2xl font-bold text-green-900 mb-8">
              Let's Start a Conversation
            </h3>
            
            <div className="space-y-6 mb-8">
              {[
                { icon: Phone, title: "Phone", info: "(555) 123-4567" },
                { icon: Mail, title: "Email", info: "hello@elegantspaces.com" },
                { icon: MapPin, title: "Location", info: "123 Design Street\nNew York, NY 10001" }
              ].map((contact, index) => (
                <div key={index} className="flex items-center animate-fade-in-right bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 hover:bg-green-200 transition-colors duration-300 hover:scale-110 transform">
                    <contact.icon className="w-6 h-6 text-green-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">{contact.title}</p>
                    <p className="text-gray-700 whitespace-pre-line">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Map Placeholder */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl h-64 flex items-center justify-center relative overflow-hidden group hover:bg-white/90 transition-colors duration-300 shadow-lg">
              {/* Map Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="City map view" 
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              
              {/* Animated Map Background */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 300 200">
                  <path d="M0,100 Q75,50 150,100 T300,100" stroke="#166534" strokeWidth="2" fill="none" className="animate-pulse" />
                  <path d="M0,120 Q75,70 150,120 T300,120" stroke="#fbbf24" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
                </svg>
              </div>
              
              <div className="text-center relative z-10">
                <MapPin className="w-12 h-12 text-green-800 mx-auto mb-4 animate-bounce" />
                <p className="text-green-900 font-semibold">Our Studio Location</p>
                <p className="text-gray-700">Visit us for a consultation</p>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden animate-slide-right shadow-xl">
            {/* Decorative SVG */}
            <div className="absolute top-0 right-0 opacity-5">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="#166534" className="animate-pulse" />
              </svg>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <label htmlFor="name" className="block text-sm font-semibold text-green-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all duration-300 hover:border-green-300 bg-white/80"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="email" className="block text-sm font-semibold text-green-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all duration-300 hover:border-green-300 bg-white/80"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <label htmlFor="phone" className="block text-sm font-semibold text-green-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all duration-300 hover:border-green-300 bg-white/80"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                  <label htmlFor="service" className="block text-sm font-semibold text-green-900 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all duration-300 hover:border-green-300 bg-white/80"
                  >
                    <option value="">Select a service</option>
                    <option value="home-interiors">Home Interiors</option>
                    <option value="commercial-design">Commercial Design</option>
                    <option value="renovation">Renovation</option>
                  </select>
                </div>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <label htmlFor="message" className="block text-sm font-semibold text-green-900 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all duration-300 resize-none hover:border-green-300 bg-white/80"
                  placeholder="Describe your vision, timeline, and any specific requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-800 text-white font-semibold py-4 rounded-lg hover:bg-green-900 transition-all duration-300 flex items-center justify-center group transform hover:scale-105 animate-fade-in-up shadow-lg hover:shadow-xl"
                style={{ animationDelay: '700ms' }}
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;