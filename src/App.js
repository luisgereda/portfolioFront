import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
