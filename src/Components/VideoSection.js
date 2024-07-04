import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VideoSection.css";

function VideoSection() {
  return (
    <div className="video-section">
      <iframe
        className="video-frame"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      ></iframe>
      <div className="video-text">
        <div className="video-heading">
          <span className="buyer-text">Buyer</span>
          <span>Supplier</span>
        </div>
        <div className="check-item">
          <span className="check-icon">✔️</span>
          <span>Post your requirements.</span>
        </div>
        <div className="check-item">
          <span className="check-icon">✔️</span>
          <span>Sit back for multiple suppliers to contact you.</span>
        </div>
        <div className="check-item">
          <span className="check-icon">✔️</span>
          <span>
            Choose among the suppliers based on the ratings and reviews.
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
