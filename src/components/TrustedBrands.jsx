import React from 'react';
import './TrustedBrands.css';

const TrustedBrands = () => {
  const brands = ['STRIPE', 'NOTION', 'SLACK', 'FIGMA', 'WEBFLOW', 'FRAMER'];
  
  return (
    <section className="trusted-brands">
      <div className="container">
        <p className="trusted-text">Trusted by industry leaders</p>
        <div className="brands-card">
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <span className="brand-name">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
