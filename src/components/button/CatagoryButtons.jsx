import { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CategoryButtons = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Update selected category and close dropdown
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown toggle button for mobile and tablet */}
      <div className="flex justify-center lg:hidden">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 py-2 bg-gray-200 rounded text-gray-800 focus:outline-none"
        >
          <span>{selectedCategory}</span>
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        </button>
      </div>

      {/* Buttons displayed as flex on large screens, dropdown on smaller screens */}
      <div
        className={`${
          isDropdownOpen ? "block" : "hidden"
        } lg:flex justify-center sm:bg-white rounded-lg lg:gap-16 lg:static sm:w-1/3 absolute top-full left-0 lg:bg-white lg:w-full z-10`}
      >
        <Button
          text={"Latest"}
          onClick={() => handleCategorySelect("Latest")}
        />
        <Button text={"Men"} onClick={() => handleCategorySelect("Men")} />
        <Button text={"Women"} onClick={() => handleCategorySelect("Women")} />
        <Button
          text={"Perfume Oil/Attar"}
          onClick={() => handleCategorySelect("Perfume Oil/Attar")}
        />
        <Button
          text={"Body Spray"}
          onClick={() => handleCategorySelect("Body Spray")}
        />
      </div>
    </div>
  );
};

export default CategoryButtons;
