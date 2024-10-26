import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Import the Hero component
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <SearchBar />
        </Route>
      </Switch>
    </>
  );
};

export default App;
