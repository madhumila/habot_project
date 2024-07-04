import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Habot from "../Assets/Habot.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand" href="/">
        <img src={Habot} alt="HABOT Logo" className="navbar-logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <div className="poppins-regular" style={{ color: "#6D6E71" }}>
                Find Suppliers
              </div>
            </a>
          </li>
          <li className="nav-item dropdown d-flex">
            <a className="nav-link dropdown-toggle" href="/">
              <span className="poppins-regular" style={{ color: "#6D6E71" }}>
                Find Service Tags
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link login-button poppins-extrabold" href="/">
              <div className="poppins-bold">Login / Sign Up</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
