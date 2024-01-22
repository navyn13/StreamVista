import "./Login.css";
import react from "react";

function Login() {

  function login() {
    console.log("login");
  }

  return (
    <div className="Login">
      <div className="Login_box">
        <input id="email" type="email" placeholder="email"></input>
        <input id="password" type="password" placeholder="password"></input>
        <button onClick={login}>Login </button>
      </div>
    </div>
  );
}

export default Login;
