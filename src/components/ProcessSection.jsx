import React from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We dive deep into your vision, goals, and challenges to craft a tailored strategy.'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our team creates stunning, user-centric designs that captivate and convert.'
    },
    {
      number: '03',
      title: 'Deploy',
      description: 'We build, test, and launch your solution with precision and ongoing support.'
    }
  ];
  
  return (
    <section className="process-section">
      <div className="container">
        <h2 className="process-title">Our Process</h2>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon">
                <span className="step-number">{step.number}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <button className="process-button">Schedule a Call</button>
          <button className="process-button-secondary">View Case Studies</button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
