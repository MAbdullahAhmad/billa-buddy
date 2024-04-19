// src/pages/static/Homepage/Welcome/Welcome.js
import React from 'react';
import './Welcome.css'; // Make sure the path is correct for your project structure

const Welcome = () => {
  return (
    <section className="welcome-section neon-gradient-navy">
      <div className="welcome-content">
        <h1>Welcome to Billa-Buddy!</h1>
        <p>An AI Chatbot to assist you like a human</p>
      </div>
    </section>
  );
};

export default Welcome;
