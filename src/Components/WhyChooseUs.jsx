import React from "react";
import { FaStar, FaLock, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaStar className="text-yellow-400 text-3xl" />,
    title: "Verified Reviews",
    desc: "Every review is manually or algorithmically verified for authenticity.",
  },
  {
    icon: <FaUsers className="text-blue-500 text-3xl" />,
    title: "Trusted by Thousands",
    desc: "Used by a growing community of real users and businesses worldwide.",
  },
  {
    icon: <FaLock className="text-green-500 text-3xl" />,
    title: "Data Privacy",
    desc: "We prioritize user privacy and ensure secure data handling.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className=" mb-12">
          Discover why thousands of users trust our platform for honest reviews
          and feedback.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 flex flex-col justify-center rounded-xl shadow hover:shadow-lg transition duration-300 hover:scale-105"
            >
              <div className="mb-4 mx-auto">{item.icon}</div>
              <h3 className="text-xl font-semibold ">{item.title}</h3>
              <p className="text-sm  mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
