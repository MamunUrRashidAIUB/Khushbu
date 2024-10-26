import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm(""); // Clear the search input after submission
  };

  return (
    <form onSubmit={handleSearch} className="flex  justify-center">
      {" "}
      {/* Add or adjust margin-top */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 h-10 w-8/12 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="h-10 w-24 p-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
