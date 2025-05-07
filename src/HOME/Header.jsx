import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid d-flex justify-content-between align-items-center px-3">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/TEDx/assets/tedex.png" alt="TEDx GPREC" className="logo-img" />
          </Link>

          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Centered Nav Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/theme">Theme</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/speakers">Speakers</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/performers">Performers</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
