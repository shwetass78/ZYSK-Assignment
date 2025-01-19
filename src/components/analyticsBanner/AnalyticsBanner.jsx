import React from "react";
import "./analyticsBanner.css";

const AnalyticsBanner = () => {
  return (
    <div className="analytics-banner">
      <div className="new-feature">
        <span>New feature</span>
        <a href="#team-dashboard" className="feature-link">
          Check out the team dashboard →
        </a>
      </div>
      <h1 className="banner-title">Beautiful analytics to grow smarter</h1>
      <p className="banner-description">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="action-buttons">
        <button className="demo-button">
          <img src="image/play-circle.png" alt="" />
          <span>Demo</span>
        </button>
        <button className="signup-button">Sign up</button>
      </div>
      <div className="Layout">
        <img src="image/Content.png" alt="" className="layout_image" />
      </div>
    </div>
  );
};

export default AnalyticsBanner;
