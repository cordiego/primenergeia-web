import React from 'react';
import { Droplet, Sun, Zap, Database } from 'lucide-react';
import './HydrogenAmmonia.css';

const HydrogenAmmonia = () => {
  return (
    <section id="hydrogen" className="section alt-bg">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="section-title">Green H₂ & NH₃ <br/><span className="text-gradient">via Albedo Amplification</span></h2>
          <p className="section-desc">
            Unlock the ultimate zero-carbon energy carriers. We leverage bifacial Granas architecture and advanced ground-albedo tracking to supercharge green hydrogen and ammonia synthesis.
          </p>
        </div>

        <div className="hydrogen-grid">
          <div className="hydrogen-text animate-fade-up delay-1">
            <div className="glass-panel info-card">
              <div className="card-icon">
                <Zap className="text-cyan" size={24} />
              </div>
              <h3>Zero Curtailment</h3>
              <p>Convert excess renewable generation into high-value, storable chemical assets dynamically.</p>
            </div>
            
            <div className="glass-panel info-card">
              <div className="card-icon">
                <Sun className="text-purple" size={24} />
              </div>
              <h3>Albedo Optimization</h3>
              <p>Bifacial perovskite-silicon tandem cells capture reflected irradiance to drive electrolysis at peak quantum efficiency.</p>
            </div>
            
            <div className="glass-panel info-card">
              <div className="card-icon">
                <Droplet className="text-green" size={24} />
              </div>
              <h3>Industrial Decarbonization</h3>
              <p>Deliver cost-competitive green NH₃ for agriculture and heavy maritime transport.</p>
            </div>

            <div className="glass-panel info-card">
              <div className="card-icon">
                <Database className="text-cyan" size={24} />
              </div>
              <h3>New Revenue Streams</h3>
              <p>Monetize stranded energy capacity and eliminate grid congestion limits natively.</p>
            </div>
            
            <div className="action-wrapper mt-4">
               <a href="mailto:diego@primenergeia.com" className="btn btn-primary">Discuss NH₃ Partnerships</a>
            </div>
          </div>
          
          <div className="hydrogen-visual animate-fade-up delay-2">
            <div className="glass-panel diagram-panel">
              <div className="diagram-header">Albedo-Driven Electrolysis</div>
              <div className="flow-diagram" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                  src="/architecture.png" 
                  alt="Solar to H2 Architecture" 
                  style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(0, 209, 255, 0.2)', boxShadow: '0 0 30px rgba(0, 209, 255, 0.1)' }} 
                />
              </div>
              <div className="diagram-footer">
                <div className="metric">
                  <span className="metric-val text-green">99.9%</span>
                  <span className="metric-label">Purity Guaranteed</span>
                </div>
                <div className="metric">
                  <span className="metric-val text-purple">+22%</span>
                  <span className="metric-label">Yield via Albedo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HydrogenAmmonia;
