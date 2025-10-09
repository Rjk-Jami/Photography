import React from 'react';

const LatestWork = () => {
    const latestWork = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop",
            title: "Sunset Portraits",
            category: "Portrait Photography",
            type: "photography"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
            title: "Urban Fashion",
            category: "Fashion Photography",
            type: "photography"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
            title: "Brand Identity",
            category: "Brand Design",
            type: "branding"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            title: "Digital Campaign",
            category: "Marketing",
            type: "marketing"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
            title: "Cinematic Short",
            category: "Film Production",
            type: "movies"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            title: "Data Analytics",
            category: "Digital Marketing",
            type: "marketing"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=300&fit=crop",
            title: "Product Launch",
            category: "Commercial Photography",
            type: "photography"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            title: "Corporate Identity",
            category: "Brand Strategy",
            type: "branding"
        }
    ];

    // Duplicate the items for seamless loop
    const duplicatedWork = [...latestWork, ...latestWork];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-4 relative overflow-hidden">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className='text-2xl md:text-4xl font-bold text-gray-800 mb-6'>
                    Latest <span className='text-blue-500'>Work</span>
                </h1>
                <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Explore our recent creative projects that showcase our passion for innovation and excellence.
                    Each piece tells a unique story of collaboration and artistic vision.
                </p>
            </div>

            {/* Marquee Container with Gradient Shadows */}
            <div className="relative max-w-full mx-auto">
                {/* Left Gradient Shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>

                {/* Right Gradient Shadow */}
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

                {/* Top Marquee - Left to Right */}
                <div className="marquee-container mb-8">
                    <div className="marquee-track">
                        {duplicatedWork.map((work, index) => (
                            <div key={`${work.id}-${index}`} className="work-item group">
                                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 mx-4">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-96 h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <h3 className="text-white text-xl font-bold mb-2">{work.title}</h3>
                                            <p className="text-gray-300">{work.category}</p>
                                            <span className="inline-block mt-2 px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                                                {work.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Marquee - Right to Left */}
                <div className="marquee-container">
                    <div className="marquee-track-reverse">
                        {duplicatedWork.map((work, index) => (
                            <div key={`${work.id}-reverse-${index}`} className="work-item group">
                                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 mx-4">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-96 h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <h3 className="text-white text-xl font-bold mb-2">{work.title}</h3>
                                            <p className="text-gray-300">{work.category}</p>
                                            <span className="inline-block mt-2 px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                                                {work.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* CSS for Marquee */}
            <style jsx>{`
                .marquee-container {
                    overflow: hidden;
                    position: relative;
                    padding: 20px 0;
                    width: 100%;
                }

                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee 60s linear infinite;
                }

                .marquee-track-reverse {
                    display: flex;
                    width: max-content;
                    animation: marquee-reverse 60s linear infinite;
                }

                .work-item {
                    flex-shrink: 0;
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes marquee-reverse {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                /* Pause animation when hovering over any card */
                .marquee-container:hover .marquee-track {
                    animation-play-state: paused;
                }

                .marquee-container:hover .marquee-track-reverse {
                    animation-play-state: paused;
                }

                /* Smooth hover effects for individual cards */
                .work-item:hover {
                    transform: translateY(-8px);
                }
            `}</style>
        </div>
    );
};

export default LatestWork;