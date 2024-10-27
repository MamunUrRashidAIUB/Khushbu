
import { Link } from "react-router-dom";

const Card = ({ image, name, price, onAddToCart, onQuickView, onWishlist }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="mt-2 text-gray-600">${price ? price.toFixed(2) : "N/A"}</p>
      <div className="flex gap-2 mt-4">
        <button
          onClick={onAddToCart}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onClick={onQuickView}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Quick View
        </button>
        <button
          onClick={onWishlist}
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default Card;
