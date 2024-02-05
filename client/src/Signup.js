import "./Signup.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pfp, setPfp] = useState(null)
  const navigate = useNavigate();
  const [{ isAuth }, dispatch] = useStateValue();

  async function handleSubmit() {
    console.log(pfp)
    const userData = {
      username, email, password
    }
    const formData = new FormData();
    formData.append('image', pfp)
    try {
      const response = await axios.post('/signup', userData);
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      dispatch({
        type: "SET_AUTH",
        isAuth: true,
      });
      await axios.post('profile', formData,{
        headers: {
          "Content-Type": 'multipart/form-data',
        },
      })
      navigate('/')
  }
  catch(error){
    console.log('Error: ', error)
  }
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
          required
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
          required
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
          required
        ></input>
        <input type="file" onChange={(e) => { setPfp(e.target.files[0]) }} name="pfp" required />
        <button onClick={handleSubmit}>Create</button>
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <p>Already a user</p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
