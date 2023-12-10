import React, { useState } from "react";
import userIcon from '../assets/icons/png/user.png';
import './Components.css';

export default function Navbar() {
  const [isNightMode, setNightMode] = useState(false);

  const handleToggle = () => {
    setNightMode(!isNightMode);
  };

  return (
    <nav className={`bg-gradient-info main-header navbar navbar-expand navbar-white navbar-light ${isNightMode ? 'night-mode' : ''}`}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fa-bars fas fs-2 text-white" />
          </a>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <div className="toogle-user">
            <div style={{ marginBottom: '-5px' }}>
              <input type="checkbox" className="checkbox" id="checkbox" checked={isNightMode} onChange={handleToggle} />
              <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
              </label>
            </div>

            <div className="custom-li-item">
              <p className="mb-0">Super Admin</p>
              <img src={userIcon} alt="" width={35} />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
