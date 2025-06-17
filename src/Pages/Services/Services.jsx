import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const Services = () => {
  const sampleServices = useLoaderData();
  console.log(sampleServices);

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "Marketing",
    "Web Development",
    "App Development",
    "DevOps",
    "Writing",
  ];

  const filteredServices = sampleServices.filter((service) => {
    const matchesSearch = `${service.title} ${service.category} ${service.name}`
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        All Services
      </h2>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
        >
          {categories.map((cat) => (
            <option className="text-black" key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service._id}
            className="hover:-translate-y-2 active:-translate-y-2 transition-all duration-300 image-full  shadow-blue-400 hover:shadow-blue-400  active:shadow-blue-400 active:shadow-xl bg-white rounded-lg shadow hover:shadow-xl"
          >
            <img
              src={service.photoUrl}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl text-black font-semibold mb-1">
                {service.name}
              </h3>
              <h3 className="text-lg text-black  font-semibold mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-black mb-2">{service.description}</p>
              <div className="flex justify-between text-sm text-black mb-3">
                <span className="font-medium">{service.category}</span>
                <span className="font-bold text-green-600">
                  ${service.price}
                </span>
              </div>
              <Link to={`/services/${service._id}`}>
                <button className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-blue-300 active:bg-blue-300 group">
                  <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600 group-active:text-blue-600">
                    See Details
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
        {filteredServices.length === 0 && (
          <p className="text-center text-black col-span-full">
            No services found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Services;
