import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Cart = ({ cartItems }) => {
  // Accept cartItems as a prop
  return (
    <div className="mt-20 flex justify-center items-center text-center">
      <div>
        <h1 className="text-7xl pb-10">Cart</h1>
        <div className="flex justify-center pb-10">
          <FaShoppingCart className="text-9xl" />
        </div>

        {cartItems.length === 0 ? ( // Check if cart is empty
          <>
            <h2>The Cart is currently empty</h2>
            <p>
              You have no items in your cart. To save an item for later, click
              the heart icon next to the product.
            </p>
          </>
        ) : (
          <>
            <h2>Your Cart Items:</h2>
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <p>
                    {item.name} - ${item.price}
                  </p>
                  <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        <NavLink to="/">
          <button className="mt-10 bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
            Return to Shop
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
