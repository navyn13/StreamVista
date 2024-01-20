import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element = {[<Header></Header>, <Home></Home>]}></Route>
            <Route path='/login' element = {<Login></Login>}></Route>

        </Routes>
      </div>
    </Router>
  );
}
export default App;
