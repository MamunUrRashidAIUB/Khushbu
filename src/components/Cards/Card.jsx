import { useState } from "react";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

const Card = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(8);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 8);
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
      {visibleItems < items.length && (
        <button
          onClick={handleShowMore}
          className=" mt-4 bg-white uppercase text-gray-500 font-bold lg:py-2 px-8 rounded-full border border-gray-300 hover:border-gray-600"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Card;
