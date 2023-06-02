import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FileDrop } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">Remnant World Analyzer</header>
      <FileDrop />
    </div>
  );
}

export default App;
