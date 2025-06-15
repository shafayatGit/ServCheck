import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const Services = () => {
  const sampleServices = useLoaderData();
  //   console.log(services);

  const [query, setQuery] = useState("");
  const [services, setServices] = useState(sampleServices);

  const filteredServices = services.filter((service) =>
    `${service.title} ${service.category} ${service.name}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
        All Services
      </h2>

      {/* Search input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by title, category, or company..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {service.description}
              </p>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-blue-600">{service.category}</span>
                <span className="text-green-600 font-bold">
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
