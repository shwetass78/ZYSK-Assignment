import React from "react";
import "./SupportSection.css";

const SupportSection = () => {
  return (
    <div className="support-section">
      <div className="avatar-group">
        <img src="image/group.png" alt="Avatar 3" className="avatar" />
      </div>
      <h2 className="support-title">Still have questions?</h2>
      <p className="support-description">
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </p>
      <button className="get-in-touch-button">Get in touch</button>
    </div>
  );
};

export default SupportSection;
