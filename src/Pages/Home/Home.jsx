import React from "react";
import PartnersSection from "../../Components/PartnersSection";
import WhyChooseUs from "../../Components/WhyChooseUs";
import TestimonialsSection from "../../Components/TestimonialsSection";
import BannerSection from "../../Components/BannerSection";
import FeaturedServices from "../../Components/FeaturedServices";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="mt-10 nuni">
      <BannerSection></BannerSection>

      <FeaturedServices></FeaturedServices>

      <PartnersSection></PartnersSection>
      <WhyChooseUs></WhyChooseUs>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
};

export default Home;
