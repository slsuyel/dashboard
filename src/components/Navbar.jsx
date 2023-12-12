import React, { useState } from "react";
import userIcon from '../assets/icons/png/user.png';
import './Components.css';
import NightDay from "../Utilites/NightDay";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
  };

  return (
    <nav className="bg-gradient-info main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fa-bars fas fs-2 text-white" />
          </a>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto me-3">
        <li className="nav-item dropdown">
          <div className="toogle-user">
            {/* Night Mood */}
            <NightDay />
            <div className="custom-li-item">
              <p className="mb-0">Super Admin</p>
              <img src={userIcon} className="btn" alt="" width={60} onClick={handleIconClick} />
            </div>
            {showDropdown && (
              <div className="dropdown-menu dropdown-menu-end show">
                <Link to="/dashboard/profile" className="dropdown-item">
                  Profile
                </Link>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}
