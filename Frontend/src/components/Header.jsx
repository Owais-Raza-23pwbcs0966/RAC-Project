// Importing necessary modules
import React from "react";
import { NavLink } from "react-router-dom"; // For routing links
import "./styles/Header.css"; // Importing header-specific CSS

export const Header = () => {
  return (
    <header>
      {/* Logo Section */}
      <div className="header-logo">
        {/* Uncomment and replace with your logo image */}
        {/* <img src="/rac logo.png" alt="RAC Logo" /> */}
      </div>

      {/* Navigation links */}
      <ul>
        <li>
          <button>
            <NavLink to="/Home">Home</NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink to="/Teams">Teams</NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink to="/Networks">Networks</NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink to="/Collaborate">Collaborate</NavLink>
          </button>
        </li>
      </ul>

      {/* Join Us button */}
      <NavLink to="/JoinUs">
        <button className="joinUs-btn">Join Us</button>
      </NavLink>
    </header>
  );
};
