import React from "react";
import Navber from "../Shared/Navber/Navber";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const RootLayouts = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default RootLayouts;
