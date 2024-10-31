import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import PerfumeLogos from "./components/PerfumeLogos";
import CategoryButtons from "./components/buttons/CategoryButtons";
import Card from "./components/Cards/Card";
import data from "./Khushbu.json";
import BodySpray from "./components/views/BodySpray";
import Attar from "./components/views/Attar";
import Footer from "./components/Footer";
import Cart from "./components/Cards/Cart";
import LoginView from "./components/auth/views/LoginView";
import SearchView from "./components/search/SearchView";
import WishlistView from "./components/Common/WishlistView";

const App = () => {
  const [items, setItems] = useState(data);
  const [cartItems, setCartItems] = useState([]); // State for cart items

  // Function to add item to cart or update quantity if item already exists
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If item already exists, update the quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // If item doesn't exist, add it with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Function to increase quantity
  const increaseQuantity = (itemId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (itemId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <Navbar size={cartItems.length} />

      <Switch>
        <Route path="/" exact>
          <Hero />
          <SearchBar />
          <PerfumeLogos />
          <CategoryButtons setItems={setItems} />
          <Card items={items} addToCart={addToCart} />{" "}
          {/* Pass addToCart to Card */}
        </Route>

        <Route path="/Body-spray" component={BodySpray} />
        <Route path="/Attar" component={Attar} />
        <Route path="/Cart">
          <Cart
            cartItems={cartItems}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
          {/* Pass cart functions to Cart */}
        </Route>
        <Route path="/Login" component={LoginView} />
        <Route path="/search" component={SearchView} />
        <Route path="/wishlist" component={WishlistView} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
