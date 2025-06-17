import React from "react";
import { Fade } from "react-awesome-reveal";

const testimonials = [
  {
    name: "Sarah M.",
    feedback:
      "This platform helped me avoid scams and find quality services. Truly a game-changer!",
    avatar: "https://i.ibb.co/YvVnsS1/istockphoto-1317804584-612x612.jpg",
  },
  {
    name: "Jason T.",
    feedback:
      "I love how transparent and reliable the reviews are. 10/10 experience!",
    avatar: "https://i.ibb.co/pr2ZHH8y/unnamed.jpg",
  },
  {
    name: "Amira A.",
    feedback:
      "As a business owner, it helped me improve my reputation and customer service.",
    avatar:
      "https://i.ibb.co/ny7B72c/a-beautiful-young-business-woman-in-a-suit-ai-generative-free-photo.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <Fade>
      {" "}
      <section className=" py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold  mb-4">What Our Users Say</h2>
          <p className=" mb-12">
            Real stories from our growing community of reviewers and service
            seekers.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map((user, i) => (
              <div
                key={i}
                className="p-9 px-3 flex flex-col justify-center rounded-xl shadow hover:shadow-blue-300 shadow-blue-300  hover:shadow-lg transition duration-300 hover:scale-105"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-sm  mb-3">“{user.feedback}”</p>
                <h4 className="font-semibold ">{user.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default TestimonialsSection;
