import data from "../../Khushbu.json";

const CategoryButtons = ({ setItems }) => {
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  const filterItems = (cat) => {
    const newItems = data.filter((item) => item.category === cat);
    setItems(newItems);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-4">
      <button
        onClick={() => setItems(data)} // Reset to show all items
        className="bg-white uppercase text-gray-500 font-bold lg:py-2 px-8 rounded-full border border-gray-300 hover:border-gray-600"
      >
        All
      </button>
      {uniqueCategories.map((category, index) => (
        <button
          onClick={() => filterItems(category)} // Trigger filtering on click
          className="bg-white uppercase text-gray-500 font-bold lg:py-2 px-8 rounded-full border border-gray-300 hover:border-gray-600"
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
