import React from "react";
import logo from "./pokeball.svg";
import "./App.css";
import HomeSCreen from "./Home.js";

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App">
        <HomeSCreen />
      </div>
    </React.Fragment>
  );
}

export default App;
