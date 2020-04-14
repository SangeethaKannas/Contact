import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Switch className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
