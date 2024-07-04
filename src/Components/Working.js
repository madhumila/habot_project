import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Working.css"; // Include this CSS file for additional styling
import role from "../Assets/role.svg";
import requirements from "../Assets/requirements.svg";
import handshake from "../Assets/handshake.svg";
import profile from "../Assets/profile.svg";
import quote from "../Assets/quote.svg";
import review from "../Assets/review.svg";

function Working() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "110px",
  };

  const headerStyle = {
    marginTop: "10px",
    marginBottom: "10px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div className="working-parent">
        <h2 className="poppins-bold" style={headerStyle}>
          How it works?
        </h2>
        <p
          className="poppins-regular"
          style={{ textAlign: "center", maxWidth: "839px", margin: "auto" }}
        >
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
        <div className="step-container">
          <div className="step odd">
            <div className="step-icon">
              <img className="box-icon" src={role} alt="" />
            </div>
            <div className="step-title poppins-medium">
              Select Your Role and Sign Up
            </div>
          </div>
          <div className="step">
            <div className="step-icon">
              <img className="box-icon" src={requirements} alt="" />
            </div>
            <div className="step-title poppins-medium">
              Buyers Post Your Requirements
            </div>
          </div>
          <div className="step odd">
            <div className="step-icon">
              <img className="box-icon" src={review} alt="" />
            </div>
            <div className="step-title poppins-medium">
              Review, Select, and Contact the Best Suppliers
            </div>
          </div>
          <div className="step">
            <div className="step-icon">
              <img className="box-icon" src={profile} alt="" />
            </div>
            <div className="step-title poppins-medium">
              Complete Profile and Get Notified
            </div>
          </div>
          <div className="step odd">
            <div className="step-icon">
              <img className="box-icon" src={quote} alt="" />
            </div>
            <div className="step-title poppins-medium">
              Contact to Buyers and Share Quote
            </div>
          </div>
          <div className="step">
            <div className="step-icon">
              <img className="box-icon" src={handshake} alt="" />
            </div>
            <div className="step-title poppins-medium">
              Connect and Leave Feedback
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working;
