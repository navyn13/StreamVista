import "./Signup.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    axios
      .post(`/signup?username=${username}&email=.${email}&password=${password}`)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="Signup">
      <div className="Signup_form">
        <input
          id="username"
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          id="email"
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
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
