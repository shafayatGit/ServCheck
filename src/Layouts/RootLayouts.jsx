import React from "react";
import Navber from "../Shared/Navber/Navber";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../Components/ScrollToTop";

const RootLayouts = () => {
  return (
    <div className="">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default RootLayouts;
