import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "",
    },
    {
      question: "What is your cancellation policy?",
      answer: "",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "",
    },
    {
      question: "How does billing work?",
      answer: "",
    },
    {
      question: "How do I change my account email?",
      answer: "",
    },
  ];

  return (
    <div className="faq">
      <h1 className="faq-title">Frequently asked questions</h1>
      <p className="faq-subtitle">
        Everything you need to know about the product and billing.
      </p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <span>{item.question}</span>
              <button className="faq-toggle">
                {openQuestion === index ? "−" : "+"}
              </button>
            </div>
            {openQuestion === index && item.answer && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
