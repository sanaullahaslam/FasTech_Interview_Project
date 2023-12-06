// Navbar.js

import React from 'react';
import logoLeft from './logo-left.png'; // Replace with your actual logo path
import logoRight from './logo-right.png'; // Replace with your actual logo path
import emailLogo from './email-logo.png'; // Replace with your actual logo path
import './Navbar.css'; // Create a CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-left">
        <img src={logoLeft} alt="Left Logo" />
      </div>
      <div className="logo-right">
        <img src={logoRight} alt="Right Logo" />
        <span>PMS@esteeadvisors.com</span>
      </div>
      <div className="image">
        <img src={emailLogo} alt="Email Logo" />
      </div>
    </div>
  );
};

export default Navbar;
