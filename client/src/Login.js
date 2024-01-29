import "./Login.css";
import react from "react";
import { useState } from "react";
import axios from "./axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";
import { useStateValue } from "./StateProvider";
function Login() {
  
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate()
  const [{ isAuth }, dispatch] = useStateValue();
  function handleSubmit() {
    const userData = {email, password}
    console.log(email,password)
    axios
      .post('/login',userData )
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
    <div className="Login">
      <div className="logo-box">
        <Link to={'/'}><img src="white_logo.png"></img></Link>
      </div>
      <div className="Login_box">
        <p>Email:</p>
        <input id="email" onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="email"></input>
        <p>Password:</p>
        <input id="password" onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="password"></input>
        <button onClick={handleSubmit}>Login </button>
        <Link to={"/signup"} style={{ textDecoration: "none" }}>
          <p>Create Account</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
