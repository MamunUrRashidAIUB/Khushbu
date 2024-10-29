import { useState } from "react";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

const CardA = ({ item, onQuickView }) => {
  const [Selecteditem, setSelecteditem] = useState(null);
  const handleQuickview = (item) => {
    setSelecteditem(item);
  };
  const closeModal = () => {
    setSelecteditem(null);
  };
  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-lg">
      <img src={item.image} alt={item.name} className="object-cover   mb-4" />
      <h1 className="text-lg font-bold text-gray-800 mb-2">${item.price}</h1>
      <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
      <div className="flex gap-2 mt-4">
        <button>
          <FaShoppingCart className="mr-2" />
        </button>
        <button onClick={onQuickView}>
          <FaEye onClick={() => handleQuickview(item)} className="mr-2" />
        </button>
        <button>
          <FaHeart className="mr-2" />
        </button>
      </div>
      {Selecteditem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
          <button
            onClick={closeModal}
            className="absolute  bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            x
          </button>
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <img
              src={Selecteditem.image}
              alt={Selecteditem.name}
              className=" object-cover rounded-md mb-4"
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

export default CardA;
