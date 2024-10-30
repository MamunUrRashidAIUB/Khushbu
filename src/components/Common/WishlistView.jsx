import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const WishlistView = () => {
  return (
    <div className="mt-20 flex justify-center items-center text-center">
      <div>
        <h1 className="text-7xl pb-10">Wishlist</h1>
        <div className="flex justify-center pb-10">
          <FaShoppingCart className="text-9xl " />
        </div>

        <h2> The wish list is cureently empty</h2>
        <p>
          You have no items in your wish list. To save an item for later, click
          the heart icon next to the product.
        </p>
        <NavLink to="/">
          <button className="mt-10 bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
            Return to Shop
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default WishlistView;
