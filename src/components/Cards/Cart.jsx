import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Cart = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-20 flex flex-col items-center text-center px-4">
      <div className="w-full max-w-4xl">
        {" "}
        {/* Limit max width for larger screens */}
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
            <div className="bg-black text-white p-4 space-y-4">
              {" "}
              {/* Added spacing between items */}
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-4 py-2 border-b"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover md:w-32 md:h-32" // Responsive image size
                  />

                  <div className="flex flex-col md:flex-row md:items-center justify-between md:w-full lg:w-full">
                    {" "}
                    {/* Flex for better alignment */}
                    <p>
                      {item.name} - ${item.price} x{" "}
                      <span className="bg-red-500 px-3">{item.quantity}</span>
                    </p>
                    <div className="flex items-center gap-2">
                      {" "}
                      {/* Align buttons next to each other */}
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-300 text-black px-2 rounded"
                      >
                        -
                      </button>
                      <span className="bg-white px-2 text-black font-extrabold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-300 text-black px-2 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="mt-5">
          <p className="text-2xl font-semibold">
            Total Price: <span>${totalPrice.toFixed(2)}</span>
          </p>
        </div>
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
