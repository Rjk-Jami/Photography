import React from 'react';

const OurServices = () => {
const services = [
    {
      title: "Wedding Photography",
      description: "Capturing the raw emotion, timeless moments, and genuine narrative of your special day with an artistic touch.",
      icon: "💍", // Modern Icon for Commitment/Wedding
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Wedding Cinematography",
      description: "Crafting a cinematic, high-definition film that tells the beautiful, flowing story of your wedding day.",
      icon: "🎬", // Modern Icon for Filmmaking/Cinema
      gradient: "from-pink-500 to-blue-600"
    },
    {
      title: "Pre & Post Wedding Shoots",
      description: "Creative and relaxed photography sessions to celebrate your journey and bond before and after the matrimonial event.",
      icon: "💖", // Modern Icon for Love/Affection
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Wedding & Events Photography",
      description: "Capturing timeless memories of your special celebrations with a focus on candid moments and elegant details.",
      icon: "🎉", // Modern Icon for Celebration/Events
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Drone & Aerial Photography",
      description: "Stunning, elevated perspectives from above with high-resolution aerial shots for breathtaking and unique views.",
      icon: "🛰️", // Modern Icon for Advanced Aerial/Satellite View
      gradient: "from-gray-500 to-slate-700"
    },
    {
      title: "Food & Product Photography",
      description: "High-impact visuals for mouth-watering, detailed food presentations and captivating e-commerce product shots.",
      icon: "📦", // Modern Icon for Product/Commercial Goods
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      title: "Outdoor Photography",
      description: "Stunning portraits and candid shots utilizing natural light and beautiful, scenic locations as the perfect backdrop.",
      icon: "🌳", // Modern Icon for Nature/Scenery
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Photo Album Creation",
      description: "Preserve your memories in beautifully designed photo albums, crafted with artistic layouts, premium quality, and a personal storytelling touch for every occasion.",
      icon: "🖼️", // Modern Icon for Picture Frame/Album
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      title: "Event Management",
      description: "Comprehensive planning, logistics, and on-site execution to ensure your entire event runs flawlessly from start to finish.",
      icon: "📋", // Modern Icon for Clipboard/Planning
      gradient: "from-gray-600 to-slate-700"
    },
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Capturing your most precious moments with creativity and passion
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              // --- Card Height/Width Modification ---
              // The `h-60` class makes the card shorter (fixed height)
              // The `p-6` reduces padding to make the content tighter
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-60" 
              // Removed default height/min-height implicit in original design
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative p-6"> {/* Reduced p-8 to p-6 for a tighter card */}
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl text-white mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description - Text size reduced for a better fit */}
                <p className="text-sm text-gray-600 leading-snug group-hover:text-gray-700 transition-colors duration-300"> 
                  {service.description}
                </p>

                {/* Learn More Button (Moved to bottom right to fit the space better) */}
                
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default OurServices;