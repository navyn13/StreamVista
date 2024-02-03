import "./Signup.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const [{ isAuth }, dispatch] = useStateValue();
  function handleSubmit() {
    const userData={
      username, email , password
    }
    axios
      .post(
        '/signup', userData)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("jwtToken", token);
        dispatch({
          type: "SET_AUTH",
          isAuth: true,
        })
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="Signup">
      <div className="logo_box">
        <Link to={'/'}><img src="https://www.pngkey.com/png/full/42-423965_twitch-logo-white-png.png"></img></Link>
      </div>
      <div className="Signup_box">
        <p>Username:</p>
        <input
          id="username"
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <p>Email:</p>
        <input
          id="email"
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <p>Password:</p>
        <input
          id="password"
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={handleSubmit}>Create</button>
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <p>Already a user</p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
