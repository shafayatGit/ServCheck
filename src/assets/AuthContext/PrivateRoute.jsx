import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useNavigate } from "react-router";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();

  if (loading && user !== null) {
    return (
      <div className="w-full h-dvh mx-auto flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (user) return children;
  // else {
  //   Swal.fire({
  //     text: "You Have to Login First!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Login",
  //   }).then((res) => {
  //     console.log(res);
  //     if (res.isConfirmed === true) {
  //       return <Navigate to={"/login"}></Navigate>;
  //     }
  //   });
  // }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
