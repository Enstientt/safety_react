import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Services from "./pages/Services";
import Discover from "./pages/Discover";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-In" component={SignIn} />
        <Route exact path="/sign-Up" component={SignUp} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/Discover" component={Discover} />
      </Switch>
    </Router>
  );
};

export default App;
