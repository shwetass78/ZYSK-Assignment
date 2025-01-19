import React from "react";
import "./features.css";

const featuresData = [
  {
    icon: "🔔",
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: "⚡",
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: "📊",
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
  },
  {
    icon: "💬",
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: "🔗",
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: "👩‍💻",
    title: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <h4 style={{ color: "red", marginBottom: "20px" }}>Features</h4>
      <h2 className="features-title">
        Analytics that feels like it’s from the future
      </h2>
      <p className="features-subtitle">
        Powerful, self-serve product and growth analytics to help you convert,
        engage,
      </p>
      <p className="features-subtitle">
        and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
