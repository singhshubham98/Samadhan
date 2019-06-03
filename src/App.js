import React from "react";
import Login from "./components/authentication/Login";
import Navigation from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div style={{ paddingTop: 10 }}>
        <Login />
      </div>
    </div>
  );
}

export default App;
