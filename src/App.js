import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dex from "./components/Dex";

function App() {
  return (
  <Router>
    <Dex />
  </Router>
  );
}

export default App;
