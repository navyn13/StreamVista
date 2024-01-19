import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element = {[<Header></Header>, <Home></Home>]}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
