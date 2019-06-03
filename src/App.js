import React from "react";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default App;
