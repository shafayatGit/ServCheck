import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import ServicesList from "../../Components/ServicesList";
import { serviceDetailsPromise } from "../../API/DetailsAPI";
// import { AuthContext } from "../assets/AuthContext/AuthContext";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  console.log(user.accessToken);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8 mb-8 text-blue-800">
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
  );
};

export default MyServices;
