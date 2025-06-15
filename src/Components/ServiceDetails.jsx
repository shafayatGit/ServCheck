import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const Servicedata = useLoaderData();
  //   console.log(Servicedata);
  const { id } = useParams();
  //   console.log(id);

  const singleService = Servicedata.find((service) => service._id === id);
  //   console.log(singleService);
  const { name, category, description, title, price, photoUrl } = singleService;
  return (
    <div>
      <div className=" px-5 max-w-6xl mx-auto mt-24 card card-side bg-base-100 flex items-center flex-col md:flex-row shadow shadow-blue-300 hover:scale-105 active:scale-105 transition ease-in-out hover:shadow-2xl hover:shadow-blue-300 active:shadow-2xl active:shadow-blue-300 work">
        <figure>
          <img className="rounded-xl h-86" src={photoUrl} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">
              Service Name: <br />
              <span className="border-2 mt-2 text-sm border-blue-400 rounded-full bg-blue-200 px-3 py-1 text-black">
                {" "}
                {title}
              </span>
            </h2>
            <h2 className="text-xl font-semibold">
              Category: <br />
              <span className="border-2 mt-2 text-sm border-blue-400 rounded-full bg-blue-200 px-3 py-1 text-black">
                {category}
              </span>
            </h2>
          </div>
          <h2 className="text-xl font-semibold">
            Description:{" "}
            <span className="text-sm font-medium">{description}</span>
          </h2>
          <div className="flex justify-between">
            {/* <h2 className="text-xl font-semibold">
              Meeting Location: <br />{" "}
              <span className="border-2 mt-2 text-sm border-blue-400 rounded-full bg-blue-200 px-3 py-1 text-black">
                {meetingLocation}
              </span>
            </h2> */}
            <h2 className="text-xl font-semibold">
              price: <br />
              <span className="border-2 mt-2 text-sm border-blue-400 rounded-full bg-blue-200 px-3 py-1 text-black">
                {price}
              </span>
            </h2>
          </div>
          {/* <h2 className="text-xl font-semibold">
            Starting Date: <span className="text-blue-600">{startDate}</span>
          </h2> */}

          <div className="flex justify-between">
            {" "}
            <Link to={"/services"}>
              <button className="mt-3 relative font-semibold rounded text-lg px-5 py-2.5 overflow-hidden group bg-blue-400 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 active:bg-gradient-to-r active:from-blue-500 active:to-blue-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-blue-800 active:ring-2 active:ring-offset-2 active:ring-blue-800 transition-all ease-out duration-300">
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 group-active:-translate-x-40 ease"></span>
                <span class="relative">All Services</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
