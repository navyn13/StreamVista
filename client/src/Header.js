import "./Header.css";
import React, { useState } from "react";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate, Link } from "react-router-dom";
import { useStateValue } from './StateProvider'
import { color, fontFamily } from "@mui/system";
import { v4 as uuidv4 } from 'uuid';

function Header() {
  const [{ user, isAuth }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const[roomId, setRoomId] = useState('')
  
  function logout() {
    localStorage.removeItem('jwtToken');
    dispatch({
      type: "SET_USER",
      isAuth: false,
    })
  }
  function searchVideo() {
    if(roomId!=""){
      navigate(`watch?room=${roomId}`)
    }
  }
  function goLive() {
    const myUUID = uuidv4();
    navigate(`watch?room=${myUUID}`)
  }

  return (
    <div className="Header">
      <Link to={"/"} style={{ textDecoration: "none" }}><div className="logo">
        <img
          src="https://www.pngkey.com/png/full/42-423965_twitch-logo-white-png.png"
          alt="logo"
        ></img>
      </div></Link>

      <div className="search_box">
        <input className="search_bar" onChange={(e) => { setRoomId(e.target.value) }} placeholder="Enter stream ID"></input>
        <button onClick={searchVideo}>Search</button>
      </div>
      <div className="btn_live">
        <button onClick={goLive}>GO LIVE</button>
      </div>
      <div className="features">
        <div className="notification">
          <NotificationsActiveRoundedIcon style={{ color: "white" }}></NotificationsActiveRoundedIcon>
        </div>
        <div className="theme">
          <SettingsBrightnessIcon style={{ color: "white" }}></SettingsBrightnessIcon>
        </div>

        <div className="profile">
          {user ? <div className="channel_pic">
            <img onClick={logout} src="data:image/jpeg;base64,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"></img>
          </div> : <Link to={"/signup"} style={{ textDecoration: "none" }}><PersonIcon style={{ color: "white" }}></PersonIcon></Link>}
        </div>
      </div>
    </div>
  );
}

export default Header;
