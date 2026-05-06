import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className="nav-link nav-home">Home</Link>
        <Link to="/about" className="nav-link nav-about">About</Link>
        <Link to="/projects" className="nav-link nav-projects">Projects</Link>
        <Link to="/contact" className="nav-link nav-contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;