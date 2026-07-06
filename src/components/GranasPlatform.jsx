import React from 'react';
import { Network, Database } from 'lucide-react';
import './GranasPlatform.css';

const GranasPlatform = () => {
  return (
    <section id="granas" className="section granas-section">
      <div className="container">
        <div className="granas-layout">
          
          <div className="granas-visual animate-fade-up">
            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
              <img src="/granas_asset.png" alt="Granas Autonomous Solar Facility" style={{ width: '100%', display: 'block' }} />
              <div className="ai-overlay text-cyan" style={{ bottom: '20px', left: '20px', background: 'rgba(0,0,0,0.7)' }}>
                <Database size={16}/> Autonomous Deployment Sequence Active
              </div>
            </div>
          </div>

          <div className="granas-text animate-fade-up delay-1">
            <h2 className="section-title">
              Granas Platform: <br />
              <span className="text-gradient">Autonomous Energy</span>
            </h2>
            <p className="granas-desc">
              Zero human intervention. Infinite scalability. Granas deploys fully autonomous, robotic bifacial solar farms engineered for &gt;46.24% power conversion efficiency. We turn barren land into sovereign energy machines.
            </p>
            
            <div className="specs-grid">
              <div className="spec-item glass">
                <div className="spec-val text-purple">6D</div>
                <div className="spec-label">Search Space</div>
              </div>
              <div className="spec-item glass">
                <div className="spec-val text-cyan">46.24%</div>
                <div className="spec-label">Target PCE</div>
              </div>
              <div className="spec-item glass">
                <div className="spec-val text-cyan">9</div>
                <div className="spec-label">TRL</div>
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
