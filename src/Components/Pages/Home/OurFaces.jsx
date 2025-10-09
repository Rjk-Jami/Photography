import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./OurFaces.css";

const teamMembers = [
  {
    name: "Arefin Rahman",
    passion: "Portrait Photographer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
  {
    name: "Mehazabien Noor",
    passion: "Visual Storyteller",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
  },
  {
    name: "Tanvir Hasan",
    passion: "Creative Director",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80",
  },
  {
    name: "Rafa Rahman",
    passion: "Documentary Photographer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    name: "Nafis Alom",
    passion: "Street Photographer",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&q=80",
  },
];

const OurFaces = () => {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 relative">
      <div className="max-w-full mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-900">
          The Faces Behind <span className="text-blue-600">Chitromul</span> 📸
        </h1>
        <p className="text-lg text-gray-600 mb-16">
          Meet the team shaping our vision.
        </p>

        {/* --- Slider Container --- */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-44" // more bottom space for dots
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group shadow-lg transition-all duration-500 bg-white hover:shadow-2xl rounded-xl overflow-hidden relative">
                {/* Image Container */}
                <div className="relative overflow-hidden w-full" style={{ height: "420px" }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />

                  {/* Overlay for default state text slide-in */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-white bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-700 translate-y-[100%] group-hover:translate-y-0">
                    <h3 className="text-3xl font-bold mb-1">{member.name}</h3>
                    <p className="text-lg font-light text-blue-300">
                      {member.passion}
                    </p>
                  </div>
                </div>

                {/* Hidden below text (default state) */}
                <div className="p-5 bg-gray-100 text-center group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-md text-gray-600">{member.passion}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination Element */}
          <div className="swiper-pagination-custom  bottom-20 left-10 right-0 z-10 flex justify-center mt-32"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default OurFaces;
