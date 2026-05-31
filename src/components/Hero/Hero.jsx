import React from 'react';
import Button from '../Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section-padding">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge glass-panel">✨ New: AI-Powered Analytics</div>
          <h1 className="hero-title">
            Discover Optimization <br />
            <span className="text-gradient">Primitives</span>
          </h1>
          <p className="hero-description">
            A pixel-perfect, highly performant web interface built for the next generation of frontend engineering. Seamlessly scalable and robust.
          </p>
          <div className="hero-actions">
            <Button variant="primary" size="lg">Start Building</Button>
            <Button variant="secondary" size="lg">View Documentation</Button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glass-panel visual-card">
            <div className="mock-chart">
              <div className="bar" style={{height: '60%'}}></div>
              <div className="bar" style={{height: '80%'}}></div>
              <div className="bar" style={{height: '40%'}}></div>
              <div className="bar" style={{height: '100%'}}></div>
              <div className="bar" style={{height: '70%'}}></div>
            </div>
            <div className="visual-stats">
              <div className="stat">
                <span className="stat-value">+124%</span>
                <span className="stat-label">Conversion</span>
              </div>
              <div className="stat">
                <span className="stat-value">0.8s</span>
                <span className="stat-label">TTI</span>
              </div>
            </div>
          </div>
          
          <div className="floating-element element-1 glass-panel">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
