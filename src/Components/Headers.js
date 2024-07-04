import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import image from "../Assets/background.png";

function Headers() {
  const headerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "523px",
  };

  return (
    <header className="container-fluid header-container" style={headerStyle}>
      <div className="header-overlay"></div>
      <div className="header-content">
        <h1>
          <span className="poppins-bold">Are You a Supplier?</span>
          <br />
          <span className="poppins-regular">
            Explore Matching Opportunities.
          </span>
        </h1>
        <form className="form-inline">
          <input
            type="text"
            className="form-control"
            placeholder="Search your required service here"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Search your desired location here"
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        <div className="buyer-link poppins-bold">
          Are you a buyer?{" "}
          <a className="poppins-regular" href="/" style={{ color: "#ffffff" }}>
            Click here if you are looking to post a requirement
          </a>
        </div>
      </div>
    </header>
  );
}

export default Headers;
