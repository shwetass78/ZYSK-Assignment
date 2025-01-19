import React from "react";
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <div className="footer-container">
      {/* Free Trial Section */}
      <div className="free-trial-section">
        <h1 className="free-trial-title">Start your free trial</h1>
        <p className="free-trial-subtitle">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="button-group">
          <button className="learn-more-button">Learn more</button>
          <button className="get-started-button">Get started</button>
        </div>
      </div>

      {/* Footer Links Section */}
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Media kit</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Use cases</h3>
            <ul>
              <li>Startups</li>
              <li>Enterprise</li>
              <li>Government</li>
              <li>SaaS centre</li>
              <li>Marketplaces</li>
              <li>Ecommerce</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Social</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
              <li>AngelList</li>
              <li>Dribbble</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Licenses</li>
              <li>Settings</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <img
            src="image/logo.png"
            alt="Company Logo"
            className="footer-logo"
          />
          <p>© 2077 zysktechnologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
