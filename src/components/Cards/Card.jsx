import { useState } from "react"; // Import useState to manage state
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

const Card = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(8); // State to manage number of visible items

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 8); // Increase the visible items by 8 on button click
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.slice(0, visibleItems).map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover rounded-full"
            />
            <h1>{item.price}</h1>
            <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
            <div className="flex gap-2 mt-4">
              <button>
                <FaShoppingCart className="mr-2" />
              </button>
              <button>
                <FaEye className="mr-2" />
              </button>
              <button>
                <FaHeart className="mr-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {visibleItems < items.length && ( // Check if there are more items to show
        <button
          onClick={handleShowMore}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Card;
