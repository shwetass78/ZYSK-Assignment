import React from "react";
import "./LogoBanner.css";

// Updated company array with public folder path
const companies = [
  { name: "Boltshift", logo: "/image/Logomark.png" },
  { name: "Lightbox", logo: "/image/Logomark (1).png" },
  { name: "FeatherDev", logo: "/image/Logomark (2).png" },
  { name: "Spherule", logo: "/image/Logomark (3).png" },
  { name: "GlobalBank", logo: "/image/Logomark (4).png" },
  { name: "Nietzsche", logo: "/image/Logomark (5).png" },
];

const LogoBanner = () => {
  return (
    <div className="logo-banner">
      <p className="banner-text">Join 4,000+ companies already growing</p>
      <div className="logo-container">
        {companies.map((company, index) => (
          <div key={index} className="logo-item">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="logo-icon"
              loading="lazy"
            />
            <span className="logo-name">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;
