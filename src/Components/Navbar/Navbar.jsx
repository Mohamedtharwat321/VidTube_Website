import React from "react";
import "./Navbar.css";
import dropdown from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import user from "../../assets/jack.png";
import { Link } from 'react-router-dom';

const Navbar = ({ setMenubar }) => {
  return (
    <nav className="flex-div">
      <div className="navbar-left flex-div">
        <img
          onClick={() => {
            setMenubar((prev) => (prev === false ? true : false));
          }}
          className="menu"
          src={dropdown}
          alt="drop down icon"
        />
        <Link to='/'><img className="logo" src={logo} alt="logo icon" /></Link>
      
      </div>
      <div className="navbar-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search} alt="search icon" />
        </div>
      </div>
      <div className="navbar-right flex-div">
        <img src={upload} alt="upload icon" />
        <img src={more} alt="more icon" />
        <img src={notification} alt="notification icon" />
        <img className="user-icon" src={user} alt="profile icon" />
      </div>
    </nav>
  );
};

export default Navbar;
