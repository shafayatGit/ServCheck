import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    description: "",
    level: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.location ||
      !formData.description
    ) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        location: "",
        description: "",
        level: "",
      });
    }, 800);
  };

  return (
    <section className="bg-gradient-to-r py-16 px-6 mt-20 lg:px-20">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto text-center">
        <Fade>
          <h2 className="text-4xl bg-gradient-to-br from-emerald-300 to-emerald-700 bg-clip-text text-transparent font-bold text-center mb-6 ">
            Get in Touch
          </h2>
        </Fade>

        <Fade>
          <form
            onSubmit={handleSubmit}
            className=" shadow-lg rounded-xl p-8 space-y-6"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border placeholder:text-gray-500 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border placeholder:text-gray-500 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Location */}
            <input
              type="text"
              name="location"
              placeholder="Location (e.g., Mirpur 10, Dhaka)"
              value={formData.location}
              onChange={handleChange}
              className="border placeholder:text-gray-500 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none w-full"
            />

            {/* Level */}
            {/* <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="border placeholder:text-gray-500 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none w-full"
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select> */}

            {/* Description */}
            <textarea
              name="description"
              placeholder="Description..."
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className="border placeholder:text-gray-500 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none w-full"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative inline-flex items-center px-7 py-1 md:px-12 md:py-3 overflow-hidden text-lg font-medium text-emerald-400 border-2 border-emerald-600 rounded-full hover:text-white group hover:bg-gray-50 active:text-white  active:bg-gray-50"
            >
              <span class="absolute left-0 block w-full h-0 transition-all bg-emerald-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 group-active:translate-x-0 ease">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative">Send Message</span>
            </button>
          </form>
        </Fade>
      </div>
    </section>
  );
}
