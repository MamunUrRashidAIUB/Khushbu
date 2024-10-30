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

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <SearchBar />
          <PerfumeLogos />
          <CategoryButtons setItems={setItems} />
          <Card items={items} />
        </Route>

        <Route path="/Body-spray" component={BodySpray} />
        <Route path="/Attar" component={Attar} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Login" component={LoginView} />
        <Route path="/search" component={SearchView} />
        <Route path="/wishlist" component={WishlistView} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
