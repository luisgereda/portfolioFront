import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/navbar/navbar";
import Countries from "./pages/exploreCountries/exploreCountries";
import RestSpace from "./pages/restSpace/restSpace";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import MyAccount from "./pages/account/account";
import Restaurants from "../src/pages/exploreRest/exploreRest";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore/restaurantes" component={Restaurants} />
        <Route path="/micuenta" component={MyAccount} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/explore/paises" component={Countries} />
        <Route path="/restaurants/:id" component={RestSpace} />
      </Switch>
    </div>
  );
}

export default App;
