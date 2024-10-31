import { Link, NavLink } from "react-router-dom";
import {
  FaHeart,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaAngleRight,
  FaTimes,
} from "react-icons/fa";
import logo from "../components/logo.png";
import brandsData from "../Khushbu.json";
import { useState } from "react";

const Navbar = ({ size }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubmenuOpen2, setIsSubmenuOpen2] = useState(false);
  const [isSubmenuOpen3, setIsSubmenuOpen3] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);
  const toggleSubmenu2 = () => setIsSubmenuOpen2(!isSubmenuOpen2);
  const toggleSubmenu3 = () => setIsSubmenuOpen3(!isSubmenuOpen3);

  const uniqueBrands = [...new Set(brandsData.map((brand) => brand.name))];

  return (
    <nav className="bg-white text-black p-4 shadow fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hamburger Menu Icon for Small Screens */}
        <div className="flex lg:hidden">
          <FaBars onClick={toggleMenu} className="text-xl cursor-pointer" />
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
            <li className="relative group">
              <div onMouseEnter={() => setIsSubmenuOpen(true)}>
                <NavLink
                  to="/Perfume"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "hover:text-gray-400"
                  }
                  aria-label="Perfume"
                >
                  Perfume
                </NavLink>
              </div>
              {isSubmenuOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-gray-500 text-white shadow-md z-10"
                  onMouseEnter={() => setIsSubmenuOpen(true)}
                  onMouseLeave={() => setIsSubmenuOpen(false)}
                >
                  <NavLink
                    to="/brands/men"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-black"
                  >
                    Men
                  </NavLink>
                  <NavLink
                    to="/brands/women"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-black"
                  >
                    Women
                  </NavLink>
                </div>
              )}
            </li>

            <li>
              <NavLink
                to="/Body-spray"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-gray-400"
                }
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
              >
                Attar
              </NavLink>
            </li>

            <li className="relative group">
              <div onMouseEnter={() => setIsSubmenuOpen2(true)}>
                <NavLink
                  to="/mini-perfumes"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "hover:text-gray-400"
                  }
                >
                  Mini Perfumes
                </NavLink>
              </div>
              {isSubmenuOpen2 && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-gray-500 text-white shadow-md z-10"
                  onMouseEnter={() => setIsSubmenuOpen2(true)}
                  onMouseLeave={() => setIsSubmenuOpen2(false)}
                >
                  <NavLink
                    to="/brands/men"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-black"
                  >
                    Men
                  </NavLink>
                  <NavLink
                    to="/brands/women"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-black"
                  >
                    Women
                  </NavLink>
                </div>
              )}
            </li>

            <li className="relative group">
              <div onMouseEnter={() => setIsSubmenuOpen3(true)}>
                <NavLink
                  to="/brands"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "hover:text-gray-400"
                  }
                >
                  Brands
                </NavLink>
              </div>
              {isSubmenuOpen3 && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-gray-500 text-white shadow-md z-auto"
                  onMouseEnter={() => setIsSubmenuOpen3(true)}
                  onMouseLeave={() => setIsSubmenuOpen3(false)}
                >
                  {uniqueBrands.map((brand, index) => (
                    <NavLink
                      key={index}
                      to={`/brands/${brand.toLowerCase()}`}
                      className="block text-lg px-2 py-1 hover:bg-gray-200 hover:text-black"
                    >
                      {brand}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <NavLink to="/wishlist">
            <FaHeart
              aria-label="Favorites"
              className="text-xl cursor-pointer hover:text-gray-400"
            />
          </NavLink>

          <NavLink to="/search">
            <FaSearch
              aria-label="Search"
              className="text-xl cursor-pointer hover:text-gray-400"
            />
          </NavLink>

          <NavLink to="/Login">
            <FaUser
              aria-label="User Profile"
              className="text-xl cursor-pointer hover:text-gray-400"
            />
          </NavLink>

          <NavLink className="flex gap-1" to="/Cart">
            <FaShoppingCart
              aria-label="Shopping Cart"
              className="text-xl cursor-pointer hover:text-gray-400"
            />
            <span className="bg-black rounded-full text-white px-1">
              {size}
            </span>
          </NavLink>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-2/3 bg-gray-500 text-white text-xs transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FaTimes onClick={toggleMenu} className="text-xl cursor-pointer" />
        </div>
        <div className="flex flex-col p-10 h-full space-y-8">
          <div className="flex items-center justify-between">
            <NavLink to="/Perfume" className="text-xl" onClick={toggleMenu}>
              Perfume
            </NavLink>
            <FaAngleRight
              onClick={toggleSubmenu}
              className="text-xl cursor-pointer"
            />
          </div>
          {isSubmenuOpen && (
            <div className="flex flex-col space-y-4 ml-6">
              <NavLink
                to="/brands/men"
                className="text-lg"
                onClick={toggleMenu}
              >
                Men
              </NavLink>
              <NavLink
                to="/brands/women"
                className="text-lg"
                onClick={toggleMenu}
              >
                Women
              </NavLink>
            </div>
          )}
          <NavLink to="/Body-spray" className="text-xl" onClick={toggleMenu}>
            Body Spray
          </NavLink>
          <NavLink to="/attar" className="text-xl" onClick={toggleMenu}>
            Attar
          </NavLink>
          <div className="flex justify-between items-center">
            <NavLink
              to="/mini-perfumes"
              className="text-xl"
              onClick={toggleMenu}
            >
              Mini Perfumes
            </NavLink>
            <FaAngleRight
              onClick={toggleSubmenu2}
              className="text-xl cursor-pointer"
            />
          </div>
          {isSubmenuOpen2 && (
            <div className="flex flex-col space-y-4 ml-6">
              <NavLink
                to="/brands/men"
                className="text-lg"
                onClick={toggleMenu}
              >
                Men
              </NavLink>
              <NavLink
                to="/brands/women"
                className="text-lg"
                onClick={toggleMenu}
              >
                Women
              </NavLink>
            </div>
          )}
          <div className="flex justify-between items-center">
            <NavLink to="/brands" className="text-xl" onClick={toggleMenu}>
              Brands
            </NavLink>
            <FaAngleRight
              onClick={toggleSubmenu3}
              className="text-xl cursor-pointer"
            />
          </div>
          {isSubmenuOpen3 && (
            <div className="flex flex-col space-y-4 ml-6">
              {uniqueBrands.map((brand, index) => (
                <NavLink
                  key={index}
                  to={`/brands/${brand.toLowerCase()}`}
                  className="text-lg"
                  onClick={toggleMenu}
                >
                  {brand}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
