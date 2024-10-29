import { useState } from "react";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

const Card = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(8);
  const [Selecteditem, setSelecteditem] = useState(null);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 8);
  };

  const handleQuickview = (item) => {
    setSelecteditem(item);
  };
  const closeModal = () => {
    setSelecteditem(null);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.slice(0, visibleItems).map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded-lg shadow-lg"
          >
            <img src={item.image} alt={item.name} className="object-cover" />
            <h1>{item.price}</h1>
            <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
            <div className="flex gap-2 mt-4">
              <button>
                <FaShoppingCart className="mr-2" />
              </button>
              <button onClick={() => handleQuickview(item)}>
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

      {Selecteditem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
          <button
            onClick={closeModal}
            className="absolute  bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            x
          </button>
          <div className="bg-white  p-6 max-w-lg w-full">
            <img
              src={Selecteditem.image}
              alt={Selecteditem.name}
              className=" object-cover  mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{Selecteditem.name}</h2>
            <p className="text-gray-600 mb-4">{Selecteditem.description}</p>
            <p className="text-lg font-bold mb-4">${Selecteditem.price}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
