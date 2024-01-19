import "./Header.css";
import React from "react";
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import PersonIcon from '@mui/icons-material/Person';
function Header(){
  return (
    <div className="Header">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Twitch_Logo.jpg" alt="logo"></img>
      </div>
      <div className="search_box">
        <input className="search_bar"></input>
      </div>
      <div className="features">
        <div className="notification">
            <NotificationsActiveRoundedIcon></NotificationsActiveRoundedIcon>
        </div>
        <div className="theme">
            <SettingsBrightnessIcon></SettingsBrightnessIcon>
        </div>
        <div className="profile">
            <PersonIcon></PersonIcon>
        </div>
      </div>
    </div>
  );
}

export default Header;
