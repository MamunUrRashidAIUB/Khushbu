import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import PerfumeLogos from "./components/PerfumeLogos";
import CategoryButtons from "./components/buttons/CategoryButtons";
import Card from "./components/Cards/Card";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <SearchBar />
          <PerfumeLogos />
          <CategoryButtons />
          <Card />
        </Route>
      </Switch>
    </>
  );
};

export default App;
