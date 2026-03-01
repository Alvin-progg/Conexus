import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Transform Your Business <br />
          Into a <span className="highlight">Digital</span> Powerhouse
        </h1>
        
        <p className="hero-subtitle">
          We craft cutting-edge SaaS solutions that drive growth, streamline operations,
          and position your brand at the forefront of innovation.
        </p>
        
        <button className="hero-button">
          Start Your Journey
          <span className="button-arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
