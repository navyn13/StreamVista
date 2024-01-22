import "./Header.css";
import React from "react";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate, Link } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Twitch_Logo.jpg"
          alt="logo"
        ></img>
      </div>
      <div className="search_box">
        <input className="search_bar"></input>
      </div>
      <div className="features">
        <div className="notification">
          <NotificationsActiveRoundedIcon style={{ color: "white" }}></NotificationsActiveRoundedIcon>
        </div>
        <div className="theme">
          <SettingsBrightnessIcon style={{ color: "white" }}></SettingsBrightnessIcon>
        </div>
        <Link to={"/signup"} style={{ textDecoration: "none" }}>
          <div className="profile">
            <PersonIcon style={{ color: "white" }}></PersonIcon>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
