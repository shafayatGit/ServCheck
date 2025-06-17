import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Real Reviews from Real People",
    description:
      "Discover what customers are saying before you commit. 100% verified feedback.",
    image:
      "https://i.ibb.co/dsZrFCYb/Importance-of-Social-Media-Images-For-Digital-Marketing-7-Tips-For-Amazing-Pictures.png",
  },
  {
    title: "Empower Your Service Choices",
    description:
      "Compare services and make informed decisions with confidence.",
    image: "https://i.ibb.co/cKrTDv75/slider2.jpg",
  },
  {
    title: "Grow Your Business with Trust",
    description:
      "Boost your credibility by collecting genuine reviews from real users.",
    image: "https://i.ibb.co/spT6Jrm2/slider3.webp",
  },
];

const BannerSection = () => {
  return (
    <section className="max-w-6xl relative mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-[80vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl text-white drop-shadow-lg font-bold">
                    {slide.title}
                  </h1>
                  <p className="mb-5 text-yellow-100 drop-shadow">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSection;
