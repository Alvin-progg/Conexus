import React from 'react';
import './TwoColumnSection.css';

const TwoColumnSection = () => {
  return (
    <section className="two-column">
      <div className="container">
        <div className="two-column-grid">
          <div className="column-left">
            <h2 className="section-heading">
              Why Choose <span className="highlight">Conexus</span>
            </h2>
          </div>
          
          <div className="column-right">
            <p className="section-paragraph">
              We don't just build software—we architect digital experiences that 
              transform businesses. Our team combines cutting-edge technology with 
              strategic thinking to deliver solutions that scale with your ambitions.
            </p>
            <p className="section-paragraph">
              From concept to deployment, we're your dedicated partner in innovation, 
              ensuring every pixel, every interaction, and every line of code serves 
              your vision with precision and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
