import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <a className="logo" href="/">Portfolio</a>
    <div className="menu">
      <ul className="menuItem">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
