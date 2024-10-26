import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Import the Hero component
import SearchBar from "./components/SearchBar";
import PerfumeLogos from "./components/PerfumeLogos"; // Import the PerfumeLogos component

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <SearchBar />
          <PerfumeLogos />
        </Route>
      </Switch>
    </>
  );
};

export default App;
