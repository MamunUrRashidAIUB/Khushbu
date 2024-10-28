import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import PerfumeLogos from "./components/PerfumeLogos";
import CategoryButtons from "./components/buttons/CategoryButtons";
import Card from "./components/Cards/Card";
import data from "./Khushbu.json";

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
      </Switch>
    </>
  );
};

export default App;
