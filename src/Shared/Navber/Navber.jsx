import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="py-3 mont navbar bg-base-100 shadow-sm border-b border-blue-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-300 font-bold border-b border-blue-400"
                        : ""
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-300 font-bold border-b border-blue-400"
                        : ""
                    }
                    to={"/services"}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-300 font-bold border-b border-blue-400"
                        : ""
                    }
                    to={"/addService"}
                  >
                    Add Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-300 font-bold border-b border-blue-400"
                        : ""
                    }
                    to={"/myServices"}
                  >
                    My Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-300 font-bold border-b border-blue-400"
                        : ""
                    }
                    to={"/myReviews"}
                  >
                    My Reviews
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-300 font-bold border-b border-blue-400"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/services"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-300 font-bold border-b border-blue-400"
                        : ""
                    }
                  >
                    Services
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/tMBfjNrN/logo.png"
            alt=""
          />
          <Link className=" text-2xl">ServCheck</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          {user ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 font-bold border-b border-blue-400"
                      : ""
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 font-bold border-b border-blue-400"
                      : ""
                  }
                  to={"/services"}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 font-bold border-b border-blue-400"
                      : ""
                  }
                  to={"/addService"}
                >
                  Add Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 font-bold border-b border-blue-400"
                      : ""
                  }
                  to={"/myServices"}
                >
                  My Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 font-bold border-b border-blue-400"
                      : ""
                  }
                  to={"/myReviews"}
                >
                  My Reviews
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 font-bold border-b border-blue-400"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/services"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 font-bold border-b border-blue-400"
                      : ""
                  }
                >
                  Services
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3 items-center">
            <img
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              className="h-12 w-12 rounded-full cursor-pointer"
              src={user.photoURL}
            ></img>
            <Tooltip id="my-tooltip"></Tooltip>

            <NavLink>
              <button
                onClick={logOutUser}
                className="btn rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-blue-400  text-white"
              >
                <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 group-active:h-64 group-active:-translate-y-32 ease"></span>
                <span class="relative text-white transition duration-300 group-hover:text-white group-active:text-white ease">
                  Logout
                </span>
              </button>
            </NavLink>
          </div>
        ) : (
          <>
            <NavLink to={"login"}>
              <button className="btn">Login</button>
            </NavLink>
            <NavLink to={"register"}>
              <button className="btn">Register</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
