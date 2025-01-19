import React from "react";
import Navbar from "./components/navbar/Navbar";
import SupportSection from "./components/supportSection/SupportSection";
import FooterComponent from "./components/footer/FooterComponent";
import AnalyticsBanner from "./components/analyticsBanner/AnalyticsBanner";
import LogoBanner from "./components/logoBanner/LogoBanner";
import Features from "./components/features/Features";
import BlogPosts from "./components/blogPosts/BlogPosts";
import TestimonialCard from "./components/testimonialCard/TestimonialCard";
import FAQ from "./components/faq/FAQ";

const App = () => {
  return (
    <div>
      <Navbar />
      <AnalyticsBanner />
      <LogoBanner />
      <Features />
      <TestimonialCard />
      <FAQ />
      <SupportSection />
      <BlogPosts />
      <FooterComponent />
    </div>
  );
};

export default App;
