import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // console.log(user);

  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-dvh mx-auto flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (user) return children;
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
