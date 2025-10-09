import React from 'react';

const OurDedication = () => {
    const meaningfulContent = {
        title: "Rooted in Purpose, Growing with Passion",
        story: (
            <>
                <p className="mb-4 text-gray-600 leading-relaxed">
                    At <span className="font-semibold text-blue-600">Chitromul</span>, dedication is more than a value — it’s our very identity. Like roots that hold a tree steady and nurture its growth, our unwavering commitment fuels everything we do. We are devoted to nurturing creativity, telling meaningful stories, and building a platform where ideas take shape and flourish.
                </p>
                <p className="mb-4 text-gray-600 leading-relaxed">
                    Every project we undertake is a reflection of that promise. We don’t just aim to complete tasks — we aim to craft impact. Our team pushes boundaries, embraces innovation, and dives deep into every detail with care and precision. This relentless pursuit of excellence is what transforms visions into reality and stories into movements.
                </p>
                <p className="font-semibold text-blue-600">
                    Chitromul is not just an organization — it’s a dedication to creativity, culture, and change.
                </p>
            </>
        )
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:py-32 bg-gray-50">
            <div className="max-w-full mx-auto">
                <h1 className="md:text-4xl text-2xl text-center font-semibold mb-5">
                    Our Dedication
                </h1>

                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
                            Our Story
                        </h2>

                        <h3 className="text-4xl mb-20 lg:text-5xl font-extrabold text-gray-900 border-l-4 border-blue-500 pl-4">
                            {meaningfulContent.title}
                        </h3>

                        <div className="text-lg">
                            {meaningfulContent.story}
                        </div>

                        <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
                            Discover Our Values
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1603207757545-de4fffdb404c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVkaWNhdGlvbiUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Symbol of dedication and growth"
                            className="w-full h-full rounded-lg shadow-2xl transition duration-500 ease-in-out hover:shadow-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurDedication;
