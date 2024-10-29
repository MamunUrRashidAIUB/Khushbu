import data from "../../Khushbu.json";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

const BodySpray = () => {
  // Filter items to include only those with the "Attar" category
  const attarItems = data.filter((item) => item.category === "Body Spray");

  return (
    <div className="flex mt-20 flex-wrap gap-4 justify-center">
      {attarItems.map((item, index) => (
        <div key={index} className="border border-gray-200 p-4 shadow-lg">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover  w-24 h-24 mb-4"
          />
          <h1 className="text-lg font-bold text-gray-800 mb-2">
            ${item.price}
          </h1>
          <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
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
  );
};

export default BodySpray;
