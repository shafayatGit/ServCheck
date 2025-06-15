import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const Services = () => {
  const sampleServices = useLoaderData();
  //   console.log(services);

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
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300"
          >
            <img
              src={service.photoUrl}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {service.description}
              </p>
              <div className="flex justify-between text-sm text-gray-700 mb-3">
                <span className="font-medium">{service.category}</span>
                <span className="font-bold text-green-600">
                  ${service.price}
                </span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                See Details
              </button>
            </div>
          </div>
        ))}
        {filteredServices.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No services found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Services;
