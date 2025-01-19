import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img
          src="
          image/Logomarkk.png"
          alt="Sisyphus Logo"
          className="company-logo"
        />
        <span className="company-name">Sisyphus</span>
      </div>
      <p className="testimonial-text">
        We’ve been using Untitled to kick start every new
      </p>
      <p className="testimonial-text">
        project and can’t imagine working without it.
      </p>
      <div className="testimonial-footer">
        <img src="image/Avatar.png" alt="Candice Wu" className="profile-pic" />
        <div>
          <p className="user-name">Candice Wu</p>
          <p className="user-title">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
