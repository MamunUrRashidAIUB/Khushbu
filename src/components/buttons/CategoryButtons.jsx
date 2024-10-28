import data from "../../Khushbu.json";
const CategoryButtons = () => {
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {uniqueCategories.map((category, index) => (
        <button
          onClick={() => console.log(category)}
          className="bg-white uppercase sm: py-0  sm:justify-center  text-gray-500 font-bold lg:py-2 px-8 rounded-full border border-gray-300 hover:border-gray-600"
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
