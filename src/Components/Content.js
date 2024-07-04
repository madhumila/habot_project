import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Content.css";

function Content() {
  return (
    <div className="container-fluid content-section">
      <div className="left-section">
        <h2 className="poppins-bold">
          Ready to dive into{" "}
          <span className="highlight-text poppins-bold">HABOT?</span>
        </h2>
        <p className="poppins-light">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="sign-up-button">
          <span className="sign-up-text poppins-bold">Sign up Today!</span>
          <span className="sign-up-icon">
            <i className="bi bi-arrow-right poppins-bold"></i>
          </span>
        </button>
      </div>
      <div className="right-section">
        <a href="/" className="location-button">
          Abu Dhabi
        </a>
        <a href="/" className="location-button">
          Dubai
        </a>
        <a href="/" className="location-button">
          Sharjah & Ajman
        </a>
        <a href="/" className="location-button">
          Fujairah
        </a>
        <a href="/" className="location-button">
          Ras Al Khaimah
        </a>
        <a href="/" className="location-button">
          Umm Al Quwain
        </a>
      </div>
    </div>
  );
}

export default Content;
