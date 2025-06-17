import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router";

const FeaturedServices = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://servcheck-server.vercel.app/services");
      const data = await res.json();
      const limited = data.slice(0, 6);
      setItems(limited);
    };

    fetchData();
  }, []);
  return (
    <Fade>
      <div>
        <h1 className="text-3xl font-bold text-center mt-22 mb-8 text-blue-400">
          Featured Services
        </h1>
        <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className=" hover:-translate-y-2 active:-translate-y-2 transition-all duration-300 image-full  shadow-blue-400 hover:shadow-blue-400  active:shadow-blue-400 active:shadow-xl bg-white rounded-lg shadow hover:shadow-xl"
            >
              <img
                src={item.photoUrl}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl text-black font-semibold mb-1">
                  {item.name}
                </h3>
                <h3 className="text-lg text-black  font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-black mb-2">{item.description}</p>
                <div className="flex justify-between text-sm text-black mb-3">
                  <span className="font-medium">{item.category}</span>
                  <span className="font-bold text-green-600">
                    ${item.price}
                  </span>
                </div>
                <Slide>
                  <Link to={`/services/${item._id}`}>
                    <button className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-blue-300 active:bg-blue-300 group">
                      <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                      <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600 group-active:text-blue-600">
                        See Details
                      </span>
                    </button>
                  </Link>
                </Slide>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default FeaturedServices;
