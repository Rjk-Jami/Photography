import React, { useState, useEffect } from 'react';

// এটি ধরে নেওয়া হচ্ছে যে Tailwind CSS আপনার প্রোজেক্টে সেটআপ করা আছে।
// কাস্টম কীফ্রেম অ্যানিমেশন (যেমন: fade-in-up) ব্যবহারের জন্য 
// আপনি Tailwind-এর কনফিগারেশন ফাইলে (tailwind.config.js) এটি যোগ করে নিতে পারেন,
// অথবা নিচের মতো <style> ট্যাগ ব্যবহার করতে পারেন।

const TestimonialSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    // const [direction, setDirection] = useState(1); // 1: Next, -1: Prev - For complex slide animation

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "Marketing Director, TechCorp",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            text: "Their creativity transformed our brand identity. The photography and marketing campaigns exceeded all expectations. Truly remarkable work!",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "CEO, StartupXYZ",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            text: "The team's attention to detail and innovative approach helped us stand out in a crowded market. Highly recommended for any creative project.",
            rating: 5
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            position: "Creative Director, FashionCo",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            text: "Working with them was a game-changer. Their video production and branding expertise brought our vision to life beautifully.",
            rating: 4
        },
        {
            id: 4,
            name: "David Thompson",
            position: "Founder, InnovateLabs",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            text: "Outstanding results! The digital marketing strategies they implemented increased our engagement by 300% in just three months.",
            rating: 5
        },
        {
            id: 5,
            name: "Priya Patel",
            position: "Product Manager, DesignHub",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
            text: "The level of professionalism and creativity is unmatched. They delivered exactly what we needed, on time and beyond expectations.",
            rating: 5
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        if (isHovered) return; // হোভার করলে স্লাইড বন্ধ হবে

        const interval = setInterval(() => {
            // setDirection(1); // স্লাইডের দিক সেট করার প্রয়োজন নেই যদি না জটিল ট্রানজিশন ব্যবহার করা হয়
            setCurrentTestimonial((prev) => 
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 5000); // 5 সেকেন্ড পর পর স্লাইড পরিবর্তন হবে

        return () => clearInterval(interval);
    }, [isHovered, testimonials.length]);

    const nextTestimonial = () => {
        // setDirection(1);
        setCurrentTestimonial(current => 
            current === testimonials.length - 1 ? 0 : current + 1
        );
    };

    const prevTestimonial = () => {
        // setDirection(-1);
        setCurrentTestimonial(current => 
            current === 0 ? testimonials.length - 1 : current - 1
        );
    };

    const goToTestimonial = (index) => {
        // setDirection(index > currentTestimonial ? 1 : -1);
        setCurrentTestimonial(index);
    };

    // Star Rating Renderer
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={`text-2xl transition-colors duration-300 ${
                    index < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
            >
                ★
            </span>
        ));
    };

    // Component for the smoothly animating testimonial card
    // key prop change forces re-render and re-applies the animation
    const TestimonialCard = ({ testimonial }) => (
        <div 
            key={testimonial.id} // এই key prop পরিবর্তন হলেই রেন্ডার হবে এবং অ্যানিমেশন পুনরায় শুরু হবে
            className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in-up"
        >
            {/* Client Image and Quote Badge */}
            <div className="flex-shrink-0">
                <div className="relative">
                    <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-serif shadow-lg transform rotate-3 transition-transform duration-500 hover:rotate-6">
                        ❝
                    </div>
                </div>
            </div>

            {/* Testimonial Text and Info */}
            <div className="flex-1 text-center lg:text-left">
                <div className="mb-4 flex justify-center lg:justify-start">
                    {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
                    "{testimonial.text}"
                </p>
                
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
                        {testimonial.name}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                        {testimonial.position}
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        // Main Container with Animated Background Shapes
        <div 
            className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 py-20 px-4 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)} // হোভার করলে স্লাইড বন্ধ হবে
            onMouseLeave={() => setIsHovered(false)} // হোভার ছেড়ে দিলে স্লাইড আবার শুরু হবে
        >
            {/* ⚠️ NOTE: Tailwind Keyframes for Animation 
               এটি নেক্সট/ভিট (Next/Vite) এর মতো পরিবেশে কাজ নাও করতে পারে।
               সেরা ফল পেতে এই CSS কোডটি আপনার গ্লোবাল CSS ফাইলে যোগ করুন অথবা 
               tailwind.config.js-এ কাস্টম অ্যানিমেশন হিসেবে যোগ করুন।
            */}
            <style jsx global>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.7s ease-out forwards;
                }
            `}</style>

            {/* Background Animated Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Box 1 */}
                <div 
                    className={`absolute -top-20 -left-20 w-64 h-64 bg-blue-300 rounded-3xl transform rotate-45 transition-all duration-1000 ease-in-out ${
                        isHovered ? '-translate-x-40 -translate-y-40 rotate-12 opacity-10' : 'opacity-30'
                    }`}
                ></div>
                
                {/* Floating Box 2 */}
                <div 
                    className={`absolute -bottom-32 -right-32 w-80 h-80 bg-purple-300 rounded-full transform -rotate-45 transition-all duration-1000 ease-in-out ${
                        isHovered ? 'translate-x-40 translate-y-40 -rotate-12 opacity-10' : 'opacity-30'
                    }`}
                ></div>
            </div>

            {/* Content Wrapper */}
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className='text-3xl md:text-5xl font-extrabold text-gray-800 mb-4'>
                        What <span className='text-blue-600'>Our Clients</span> Say ✨
                    </h1>
                    <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Hear from the people we've helped achieve their creative and business goals.
                    </p>
                </div>

                {/* Testimonial Slider Main Card */}
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-12 relative border border-white/30 transition-all duration-500 hover:shadow-3xl">
                    
                    {/* Testimonial Card - Using <div key> for smooth transition */}
                    <TestimonialCard testimonial={testimonials[currentTestimonial]} />

                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevTestimonial}
                        className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110 shadow-lg border border-white/20 z-20"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={nextTestimonial}
                        className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-white hover:bg-purple-500 transition-all duration-300 hover:scale-110 shadow-lg border border-white/20 z-20"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator and Progress Bar */}
                <div className="mt-12 flex flex-col items-center">
                    
                    {/* Dots */}
                    <div className="flex justify-center space-x-3 mb-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                                    index === currentTestimonial 
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8 shadow-md' 
                                        : 'bg-gray-300 hover:bg-blue-400'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Progress Bar (Visual indicator of auto-slide time) */}
                    <div className="w-full max-w-md">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            {/* Note: This progress bar is a simple indicator of position, not time. 
                                A time-based one would require more complex animation/state. */}
                            <div 
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{ 
                                    width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` 
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;