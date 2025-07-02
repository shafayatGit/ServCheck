import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router";

const slides = [
  {
    title: "Real Reviews from Real People",
    description:
      "Discover what customers are saying before you commit. 100% verified feedback.",
    image:
      "https://i.ibb.co/dsZrFCYb/Importance-of-Social-Media-Images-For-Digital-Marketing-7-Tips-For-Amazing-Pictures.png",
    text_1: "All Services",
    text_2: "Add Your Service",
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
    <Zoom>
      <section className="max-w-7xl relative mx-auto">
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
                className="hero min-h-screen "
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                  <div className="max-w-2xl">
                    <h1 className="mb-5 text-4xl md:text-6xl bg-gradient-to-br from-emerald-200 to-emerald-600 bg-clip-text text-transparent font-bold">
                      {slide.title}
                    </h1>
                    <p className="mb-5 font-medium text-lg bg-gradient-to-br from-emerald-200 to-emerald-400 bg-clip-text text-transparent drop-shadow">
                      {slide.description}
                    </p>
                    <div className="nuni flex flex-col md:flex-row gap-4 justify-center items-center">
                      <Slide>
                        <Link to={"/services"}>
                          <button className="">
                            <a class="codepen-button shadow-xl shadow-emerald-300">
                              <span>All Services</span>
                            </a>
                          </button>
                        </Link>
                      </Slide>
                      <Slide>
                        <Link to={"/addService"}>
                          <button>
                            <a class="codepen-button shadow-xl shadow-emerald-300">
                              <span>Add Your Service</span>
                            </a>
                          </button>
                        </Link>
                      </Slide>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Zoom>
  );
};

export default BannerSection;
