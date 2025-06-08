import React, { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Gireesh</div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-links ${open ? "active" : ""}`}>
        <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
        <li><a href="#certificates" className="nav-link" onClick={closeMenu}>Certificates</a></li>
        <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
