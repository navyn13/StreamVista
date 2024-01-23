import "./Login.css";
import react from "react";
import { useState } from "react";
function Login() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  function handleSubmit() {
    axios
      .post(`/login?email=.${email}&password=${password}`)
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
        <input id="email" type="email" placeholder="email"></input>
        <input id="password" type="password" placeholder="password"></input>
        <button onClick={handleSubmit}>Login </button>
      </div>
    </div>
  );
}

export default Login;
