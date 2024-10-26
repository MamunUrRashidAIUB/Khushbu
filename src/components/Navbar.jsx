// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import {
  FaHeart,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes, // Import the close icon
} from "react-icons/fa";
import logo from "../components/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-black p-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hamburger Menu Icon for Small Screens */}
        <div className="flex lg:hidden">
          <FaBars onClick={toggle} className="text-xl cursor-pointer" />
        </div>

        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center flex-1 justify-center lg:justify-start"
        >
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex flex-1 pr-32">
          <ul className="flex space-x-4 font-extrabold md:text-xs">
            <li>
              <NavLink
                to="/Perfume"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-gray-400"
                }
                aria-label="Perfume"
              >
                Perfume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Body-spray"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-gray-400"
                }
                aria-label="Body Spray"
              >
                Body Spray
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/attar"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-gray-400"
                }
                aria-label="Attar"
              >
                Attar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mini-perfumes"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-gray-400"
                }
                aria-label="Mini Perfumes"
              >
                Mini Perfumes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-gray-400"
                }
                aria-label="Brands"
              >
                Brands
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <FaHeart
            aria-label="Favorites"
            className="text-xl cursor-pointer hover:text-gray-400"
          />
          <FaSearch
            aria-label="Search"
            className="text-xl cursor-pointer hover:text-gray-400"
          />
          <FaUser
            aria-label="User Profile"
            className="text-xl cursor-pointer hover:text-gray-400"
          />
          <FaShoppingCart
            aria-label="Shopping Cart"
            className="text-xl cursor-pointer hover:text-gray-400"
          />
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-1/2 bg-gray-500 text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <FaTimes onClick={toggle} className="text-xl cursor-pointer" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-10  h-full space-y-8">
          <NavLink
            to="/Perfume"
            className="text-xl"
            aria-label="Perfume"
            onClick={toggle}
          >
            Perfume
          </NavLink>
          <NavLink
            to="/Body-spray"
            className="text-xl"
            aria-label="Body Spray"
            onClick={toggle}
          >
            Body Spray
          </NavLink>
          <NavLink
            to="/attar"
            className="text-xl"
            aria-label="Attar"
            onClick={toggle}
          >
            Attar
          </NavLink>
          <NavLink
            to="/mini-perfumes"
            className="text-xl"
            aria-label="Mini Perfumes"
            onClick={toggle}
          >
            Mini Perfumes
          </NavLink>
          <NavLink
            to="/brands"
            className="text-xl"
            aria-label="Brands"
            onClick={toggle}
          >
            Brands
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
