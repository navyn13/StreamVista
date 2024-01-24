import "./Login.css";
import react from "react";
import { useState } from "react";
import axios from "./axios";
import { useNavigate } from "react-router";
function Login() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate()

  function handleSubmit() {
    axios
      .post(`/login?email=${email}&password=${password}`)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="Login">
      <div className="Login_box">
        <input id="email" onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="email"></input>
        <input id="password" onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="password"></input>
        <button onClick={handleSubmit}>Login </button>
      </div>
    </div>
  );
}

export default Login;
