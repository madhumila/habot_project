import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // Include this CSS file for additional styling
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import habot from "../Assets/habot-footer.svg"; // Replace with your actual logo path

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-border"></div>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={habot} alt="HABOT" className="logo" />
            <p className="poppins-light">© R Singhania</p>
          </div>
          <div className="footer-columns">
            <div className="footer-column">
              <h4 className="arial-bold">Company</h4>
              <ul>
                <li>
                  <a className="inter-normal" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="inter-normal" href="/faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="arial-bold">Terms</h4>
              <ul>
                <li>
                  <a className="inter-normal" href="/privacy">
                    Data Privacy
                  </a>
                </li>
                <li>
                  <a className="inter-normal" href="/terms">
                    Terms
                  </a>
                </li>
                <li>
                  <a className="inter-normal" href="/accessibility">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="arial-bold">Related</h4>
              <ul>
                <li>
                  <a className="inter-normal" href="/find-buyer">
                    Find Buyer
                  </a>
                </li>
                <li>
                  <a className="inter-normal" href="/feedback">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://www.twitter.com" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-bottom-border"></div>
      </div>
    </footer>
  );
}

export default Footer;
