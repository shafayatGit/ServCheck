import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import ServicesList from "../../Components/ServicesList";
import { serviceDetailsPromise } from "../../API/DetailsAPI";
// import { AuthContext } from "../assets/AuthContext/AuthContext";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8 mb-8 text-blue-800">
        My Services
      </h1>
      <Suspense>
        <ServicesList
          serviceDetailsPromise={serviceDetailsPromise(user.email)}
        ></ServicesList>
      </Suspense>
    </div>
  );
};

export default MyServices;
