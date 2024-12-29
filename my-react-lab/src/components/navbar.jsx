import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">ShoeStore</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
        <li><Link to="/user/MuhammadYousuf">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
