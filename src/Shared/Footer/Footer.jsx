import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h1
            className="bg-gradient-to-br from-emerald-200 to-emerald-700 bg-clip-text text-transparent
 text-2xl md:text-4xl font-bold mb-3"
          >
            ServCheck
          </h1>
          <p className="text-sm text-gray-300">
            ServCheck is your trusted platform for reading and writing genuine
            service reviews. Empowering users to make smart decisions, and
            helping businesses build reputation.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2
            className="bg-gradient-to-br from-emerald-200 to-emerald-700 bg-clip-text text-transparent
 text-2xl font-bold  mb-4"
          >
            Useful Links
          </h2>
          <ul
            className="space-y-2 text-sm bg-gradient-to-br from-emerald-200 to-emerald-700 bg-clip-text text-transparent
 "
          >
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2
            className="bg-gradient-to-br from-emerald-200 to-emerald-700 bg-clip-text text-transparent
 text-2xl font-bold mb-4"
          >
            Follow Us
          </h2>
          <div className="flex space-x-4 text-gray-300">
            <Link className="hover:text-emerald-700 transition text-xl">
              <FaFacebookF />
            </Link>
            <Link className="hover:text-emerald-700 transition text-xl">
              <FaTwitter />
            </Link>
            <Link className="hover:text-emerald-700 transition text-xl">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Contact or Support */}
        <div>
          <h2
            className="bg-gradient-to-br from-emerald-200 to-emerald-700 bg-clip-text text-transparent
 text-2xl font-bold mb-4"
          >
            Support
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              Email:{" "}
              <a
                href="mailto:support@servicescope.com"
                className="hover:text-white"
              >
                support@servcheck.com
              </a>
            </li>
            <li>Phone: +880-123-456789</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ServCheck. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
