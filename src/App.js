import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/navbar/navbar";
import Countries from "./pages/exploreCountries/exploreCountries";
import RestSpace from "./pages/restSpace/restSpace";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/explore/paises" component={Countries} />
        <Route exact path="/" component={Home} />
        <Route path="/restaurants/:id" component={RestSpace} />
      </Switch>
    </div>
  );
}

export default App;
