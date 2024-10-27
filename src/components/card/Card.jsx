import src from "gsap/src";
import React from "react";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

const Card = ({ image, name, price, onAddToCart, onQuickView, onWishlist }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={image} alt={name} className="h-48 object-cover rounded" />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="mt-2 text-gray-600">${price ? price.toFixed(2) : "N/A"}</p>
      <div className="flex gap-2 mt-4">
        <button
          onClick={onAddToCart}
          className="px-4 py-2 text-black rounded flex items-center"
        >
          <FaShoppingCart className="mr-2" /> 
        </button>
        <button
          onClick={onQuickView}
          className="px-4 py-2 text-gray-800 rounded  flex items-center"
        >
          <FaEye className="mr-2" />
        </button>
        <button
          onClick={onWishlist}
          className="px-4 py-2  text-black rounded  flex items-center"
        >
          <FaHeart className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default Card;

