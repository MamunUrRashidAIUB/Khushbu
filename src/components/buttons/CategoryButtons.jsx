import data from "../../Khushbu.json";
const CategoryButtons = () => {
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  return (
    <div className="flex flex-wrap gap-4">
      {uniqueCategories.map((category, index) => (
        <button
        onClick={() => console.log(category)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
