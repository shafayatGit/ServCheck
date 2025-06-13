import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../assets/AuthContext/AuthContext";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10" src="logo.png" alt="" />
          <Link className=" text-xl">ServCheck</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user ? (
            <>
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Services</NavLink>
              </li>
              <li>
                <NavLink>Add Service</NavLink>
              </li>
              <li>
                <NavLink>My Services</NavLink>
              </li>
              <li>
                <NavLink>My Reviews</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Services</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3 items-center">
            <Link>
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                className="h-12 w-12 rounded-full cursor-pointer"
                src={user.photoURL}
              ></img>
              <Tooltip id="my-tooltip"></Tooltip>
            </Link>
            <NavLink>
              <button onClick={logOutUser} className="btn">
                Logout
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
