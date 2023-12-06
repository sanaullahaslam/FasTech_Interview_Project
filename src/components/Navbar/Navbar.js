// components/Navbar/Navbar.js
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import Logo from '../../assets/logo.PNG'
import { FaComment } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="contact-info">
        <div className="email">
        <FaComment className="message-icon" /> PMS@esteeadvisors.com</div>
        <button className="call-button">
          <FaPhone className="phone-icon" />
          +923155664488
        </button>
      </div>
    </div>
  );
};

export default Navbar;
