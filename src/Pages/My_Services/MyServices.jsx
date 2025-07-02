import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import ServicesList from "../../Components/ServicesList";
import { serviceDetailsPromise } from "../../API/DetailsAPI";
import { Slide } from "react-awesome-reveal";
// import { AuthContext } from "../assets/AuthContext/AuthContext";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  console.log(user.accessToken);
  return (
    <Slide>
      {" "}
      <div className="max-w-7xl mx-auto  nuni">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-emerald-200 to-emerald-600 bg-clip-text text-transparent mt-8 mb-8 text-center">
          My Services
        </h1>
        <Suspense
          fallback={
            <div className="w-full h-dvh mx-auto flex justify-center items-center">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          }
        >
          <ServicesList
            serviceDetailsPromise={serviceDetailsPromise(
              user.email,
              user.accessToken
            )}
          ></ServicesList>
        </Suspense>
      </div>
    </Slide>
  );
};

export default MyServices;
