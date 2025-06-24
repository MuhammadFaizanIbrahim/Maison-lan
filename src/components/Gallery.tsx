import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      title: "Modern Living Room",
      category: "Residential",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Luxury Bedroom Suite",
      category: "Residential",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Executive Office",
      category: "Commercial",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Contemporary Kitchen",
      category: "Residential",
      image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Boutique Hotel Lobby",
      category: "Commercial",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Spa Bathroom",
      category: "Residential",
      image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Elegant interior design showcase" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-50/90"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 200 200">
          <defs>
            <pattern id="galleryPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="25" height="25" fill="#166534" className="animate-pulse" />
              <rect x="25" y="25" width="25" height="25" fill="#fbbf24" className="animate-pulse" style={{ animationDelay: '1s' }} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#galleryPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 animate-slide-up">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Explore our collection of beautifully designed spaces that showcase 
            our commitment to excellence and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Animated Decorative Elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-lg backdrop-blur-sm animate-float"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-green-800/10 rounded-full animate-pulse"></div>
                
                {/* SVG Decoration */}
                <div className="absolute top-6 right-6 opacity-30 animate-spin-slow">
                  <svg width="30" height="30" viewBox="0 0 30 30">
                    <circle cx="15" cy="15" r="10" stroke="white" strokeWidth="2" fill="none" />
                    <circle cx="15" cy="15" r="5" fill="white" />
                  </svg>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-green-800 hover:text-white transform scale-90 group-hover:scale-100">
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-800 font-medium bg-green-100 px-3 py-1 rounded-full animate-pulse">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-green-900 group-hover:text-green-800 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-green-800 text-white font-semibold rounded-full hover:bg-green-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-bounce-in">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;