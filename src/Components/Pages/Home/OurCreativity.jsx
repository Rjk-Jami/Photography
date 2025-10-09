import React from 'react';

const OurCreativity = () => {
    // 1. Updated Data: Replaced "Web Design" with "Photo Retouching"
    const creativityItems = [
        {
            id: 1,
            title: "Photography",
            description: "Capturing moments that tell your story through artistic lenses and creative composition.",
            icon: " 📸",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            title: "Brand Identity",
            description: "Crafting memorable brand experiences that resonate with your audience.",
            icon: "🎨",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            id: 3,
            title: " Marketing",
            description: "Strategic campaigns that drive engagement and deliver measurable results.",
            icon: "🚀",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            id: 4,
            title: "Video Production",
            description: "Creating compelling visual narratives that captivate and inspire action.",
            icon: "🎥",
            gradient: "from-orange-500 to-red-500"
        },
        {
            // NEW: Photography-focused service replacement
            id: 5,
            title: "Photo Retouching",
            description: "Perfecting images with professional editing, color grading, and detailed enhancement.",
            icon: "✨", // Sparkles icon for editing/enhancement
            gradient: "from-indigo-500 to-purple-500"
        },
        {
            id: 6,
            title: "Film & Documentary",
            description: "Creating high-impact cinematic short films and documentary features with compelling narratives.",
            icon: "🎬", // Clapperboard icon for film/movie content
            gradient: "from-teal-500 to-blue-500"
        }
    ];

    return (
        <div className="min-h-screen bg-white py-20 px-4">
            <div className="max-w-full mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className='text-2xl md:text-4xl font-extrabold text-gray-900 mb-4'>
                        Our <span className='text-blue-500'>Creativity</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        We blend artistic vision with technical precision to deliver exceptional results across all our disciplines.
                    </p>
                </div>

                {/* 2. Main Content Layout: Cards on the left, Image on the right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Right Column: Meaningful Image (occupies more space on large screens) */}
                    {/* 🚀 FIX: Removed 'sticky top-20' and added 'lg:sticky lg:top-20' */}
                    <div className="order-1 lg:order-2 lg:sticky lg:top-20">
                        <div className="lg:h-[700px] h-[400px] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1656666273502-9950992a6702?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyZWF0aXZpdHklMjBwaG90b2dyYXBoZXJ8ZW58MHx8MHx8fDA%3D"
                                alt="A creative, abstract image representing the art of photography and creativity, such as a double-exposed portrait or a dramatic landscape."
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Optional: Overlay text for a modern touch */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-8">
                                <p className="text-white text-3xl font-light italic border-l-4 border-indigo-400 pl-4">
                                    "Art is not what you see, but what you make others see."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Left Column: Creativity Cards (occupies less space on large screens) */}
                    <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {creativityItems.map((item) => (
                            <div
                                key={item.id}
                                className="group relative bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-t-4 border-transparent hover:border-indigo-500"
                            >
                                {/* Icon */}
                                <div className={`text-4xl mb-4 transform group-hover:scale-105 transition-transform duration-500 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCreativity;