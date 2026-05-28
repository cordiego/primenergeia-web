import React from 'react';
import { Network, Database } from 'lucide-react';
import './GranasPlatform.css';

const GranasPlatform = () => {
  return (
    <section id="granas" className="section granas-section">
      <div className="container">
        <div className="granas-layout">
          
          <div className="granas-visual animate-fade-up">
            <div className="glass-panel hex-grid-bg">
              <div className="molecule-anim">
                <div className="node n1"></div>
                <div className="node n2"></div>
                <div className="node n3"></div>
                <div className="node n4"></div>
                <svg className="connections">
                  <line x1="20%" y1="20%" x2="80%" y2="20%"/>
                  <line x1="80%" y1="20%" x2="80%" y2="80%"/>
                  <line x1="80%" y1="80%" x2="20%" y2="80%"/>
                  <line x1="20%" y1="80%" x2="20%" y2="20%"/>
                </svg>
              </div>
              <div className="ai-overlay text-cyan">
                <Database size={16}/> Processing Bayesian Optimization...
              </div>
            </div>
          </div>

          <div className="granas-text animate-fade-up delay-1">
            <h2 className="section-title">
              Granas: Perovskite <br />
              <span className="text-gradient">Bayesian Optimization</span>
            </h2>
            <p className="granas-desc">
              Granas is PRIMEnergeia’s advanced perovskite solar platform - engineered for &gt;33% power conversion efficiency. Not just better panels. A self-driving materials lab.
            </p>
            
            <div className="specs-grid">
              <div className="spec-item glass">
                <div className="spec-val text-purple">6D</div>
                <div className="spec-label">Search Space</div>
              </div>
              <div className="spec-item glass">
                <div className="spec-val text-cyan">33.5%</div>
                <div className="spec-label">Target PCE</div>
              </div>
            </div>
            
            <div className="info-box">
              <Network size={20} className="text-purple" />
              <p>Modeling crystallization kinetics, defect density passivation, and Shockley-Queisser-bounded efficiencies.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GranasPlatform;
