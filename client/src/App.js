// app.js
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useStateValue } from "./StateProvider"
import { useJwt } from "react-jwt";
import { useState } from "react";
function App() {

  const [{ isAuth }, dispatch] = useStateValue();
  const jwtToken = localStorage.getItem('jwtToken')
  const { decodedToken, isExpired } = useJwt(jwtToken);

  useEffect(() => {
      if (decodedToken) {
        dispatch({
          type: "SET_USER",
          user: decodedToken,
        })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
  }, [isAuth, decodedToken]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={[<Header></Header>, <Home></Home>]}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>

        </Routes>
      </div>
    </Router>
  );
}
export default App;
