import React from "react";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/dashboard/Home";
import Communities from "./components/dashboard/Communities";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/communities" component={Communities} />
      </div>
    </BrowserRouter>
  );
}

export default App;
