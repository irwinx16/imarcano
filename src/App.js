import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { ResumePage } from "./components/ResumePage";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" component={HomePage} exact />
      <Route path="/resume" component={ResumePage} />
    </Router>
  );
}

export default App;
