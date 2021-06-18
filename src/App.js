import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/navbar/navbar";
import Countries from "./pages/exploreCountries/exploreCountries";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/explore/paises" component={Countries} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
