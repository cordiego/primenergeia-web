import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="ambient-glow"></div>
      <div className="container">
        <div className="hero-content animate-fade-up">
          <div className="badge glass delay-1">
            <span className="pulse"></span> Live on Node VZA-400
          </div>
          <h1 className="hero-title delay-2">
            Sovereign Intelligence Layer for the <span className="text-gradient">Energy Transition</span>
          </h1>
          <p className="hero-subtitle delay-3">
            Intelligent Multi-Market Grid Control That Recovers Lost Capital. Predicting and preventing frequency deviations in real-time.
          </p>
          <div className="hero-actions delay-3">
            <a href="#dashboard" className="btn btn-primary">
              <Activity size={20} /> View Live Dashboard
            </a>
            <a href="#contact" className="btn btn-outline">
              Request Technical Briefing <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="stats-grid animate-fade-up delay-3">
          <div className="glass-panel stat-card">
            <div className="stat-value text-cyan">$231,243</div>
            <div className="stat-label">Projected Recoverable Capital</div>
          </div>
          <div className="glass-panel stat-card">
            <div className="stat-value text-purple">17</div>
            <div className="stat-label">Global Markets Active</div>
          </div>
          <div className="glass-panel stat-card">
            <div className="stat-value text-cyan">1,700+ GW</div>
            <div className="stat-label">Total Grid Capacity Covered</div>
          </div>
          <div className="glass-panel stat-card">
            <div className="stat-value text-green">~$48M</div>
            <div className="stat-label">Projected ARR</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
