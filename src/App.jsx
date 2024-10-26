import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Import the Hero component

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Hero /> {/* Render the Hero component on the home page */}
        </Route>
        {/* Add more routes here as needed */}
      </Switch>
    </>
  );
};

export default App;
