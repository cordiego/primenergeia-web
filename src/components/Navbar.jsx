import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">PRIMEnergeia</span>
        </div>
        
        <nav className="nav-links">
          <a href="#control">Grid Control</a>
          <a href="#markets">Markets</a>
          <a href="#granas">Granas</a>
          <a href="#hydrogen">Hydrogen & NH₃</a>
          <a href="#tech-stack">Architecture</a>
        </nav>
        
        <div className="nav-actions">
          <a href="mailto:diego@primenergeia.com" className="btn btn-primary btn-sm" style={{marginRight: '1rem'}}>
            Partner With Us
          </a>
          <a href="https://primenergeia-sovereign.streamlit.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            <Activity size={16} /> Live Dashboard
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
