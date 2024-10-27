import { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CategoryButtons = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      {/* Dropdown toggle button for mobile and tablet */}
      <div className="flex justify-center lg:hidden">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 py-2 bg-gray-200 rounded text-gray-800 focus:outline-none"
        >
          <span>Categories</span>
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        </button>
      </div>

      {/* Buttons displayed as flex on large screens, dropdown on smaller screens */}
      <div
        className={`${
          isDropdownOpen ? "block" : "hidden"
        } lg:flex lg:justify-center lg:gap-16 lg:static absolute top-full left-0 w-full bg-slate-500 z-10 shadow-lg lg:shadow-none`}
      >
        <Button text={"Latest"} />
        <Button text={"Men"} />
        <Button text={"Women"} />
        <Button text={"Perfume Oil/Attar"} />
        <Button text={"Body Spray"} />
      </div>
    </div>
  );
};

export default CategoryButtons;
