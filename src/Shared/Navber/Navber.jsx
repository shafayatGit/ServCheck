import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import { Tooltip } from "react-tooltip";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import { Slide } from "react-awesome-reveal";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <Slide>
      <div className="py-3 mont navbar bg-base-100 shadow-sm border-b border-emerald-600">
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
                          ? "shadow-md shadow-emerald-300"
                          : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                          ? "shadow-md shadow-emerald-300"
                          : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                          ? "shadow-md shadow-emerald-300"
                          : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                          ? "shadow-md shadow-emerald-300"
                          : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                          ? "shadow-md shadow-emerald-300"
                          : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                      className={({ isActive }) =>
                        isActive
                          ? "shadow-md shadow-emerald-300"
                          : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                          ? "shadow-md shadow-emerald-300"
                          : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
                      }
                      to={"/services"}
                    >
                      Services
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex items-center">
            {/* <img
              className="w-10 h-10"
              src="https://i.ibb.co/tMBfjNrN/logo.png"
              alt=""
            /> */}
            <Link
              className="bg-gradient-to-br from-emerald-200 to-emerald-700 bg-clip-text text-transparent
 text-2xl md:text-4xl font-bold"
            >
              ServCheck
            </Link>
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="text-emerald-300 z-100 text-lg menu menu-horizontal px-1 gap-2 font-normal">
            {user ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "shadow-md shadow-emerald-300"
                        : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                        ? "shadow-md shadow-emerald-300"
                        : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                        ? "shadow-md shadow-emerald-300"
                        : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                        ? "shadow-md shadow-emerald-300"
                        : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                        ? "shadow-md shadow-emerald-300"
                        : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                    className={({ isActive }) =>
                      isActive
                        ? "shadow-md shadow-emerald-300"
                        : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
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
                        ? "shadow-md shadow-emerald-300"
                        : "hover:shadow-lg hover:shadow-emerald-300  active:shadow-lg active:shadow-emerald-300"
                    }
                    to={"/services"}
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
                  className="relative inline-flex items-center px-7 py-1 md:px-12 md:py-3 overflow-hidden text-lg font-medium text-emerald-400 border-2 border-emerald-600 rounded-full hover:text-white group hover:bg-gray-50 active:text-white  active:bg-gray-50"
                >
                  <span class="absolute left-0 block w-full h-0 transition-all bg-emerald-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 group-active:translate-x-0 ease">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="relative">LogOut</span>
                </button>
              </NavLink>
            </div>
          ) : (
            <div className="flex gap-3">
              <NavLink to={"login"}>
                <button className="relative inline-flex items-center px-7 py-1 md:px-12 md:py-3 overflow-hidden text-lg font-medium text-emerald-400 border-2 border-emerald-600 rounded-full hover:text-white group hover:bg-gray-50 active:text-white  active:bg-gray-50">
                  <span class="absolute left-0 block w-full h-0 transition-all bg-emerald-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 group-active:translate-x-0 ease">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="relative">Login</span>
                </button>
              </NavLink>
              <NavLink to={"/register"}>
                <button className=" hidden relative md:inline-flex items-center px-7 py-1 md:px-12 md:py-3 overflow-hidden text-lg font-medium text-emerald-400 border-2 border-emerald-600 rounded-full hover:text-white group hover:bg-gray-50 active:text-white  active:bg-gray-50">
                  <span class="absolute left-0 block w-full h-0 transition-all bg-emerald-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 group-active:translate-x-0 ease">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="relative">Register</span>
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </Slide>
  );
};

export default Navbar;
