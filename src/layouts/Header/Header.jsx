import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header glass-panel">
      <div className="container header-container">
        <div className="header-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="var(--accent-primary)"/>
            <path d="M10 16L14 20L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Nexus</span>
        </div>

        <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#features" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#analytics" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Analytics</a>
          <a href="#pricing" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <div className="nav-actions">
            <Button variant="secondary" size="sm">Log In</Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>
        </nav>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
