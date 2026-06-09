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
              <div className="flow-diagram">
                <svg viewBox="0 0 400 500" className="albedo-svg">
                  {/* Sun */}
                  <circle cx="200" cy="50" r="25" fill="#facc15" className="pulse-slow" />
                  <line x1="200" y1="75" x2="200" y2="150" stroke="#facc15" strokeWidth="2" strokeDasharray="5,5" className="beam-down" />
                  
                  {/* Bifacial Panel */}
                  <rect x="100" y="150" width="200" height="20" rx="4" fill="rgba(0, 209, 255, 0.2)" stroke="#00d1ff" strokeWidth="2" />
                  <text x="200" y="165" fill="#fff" fontSize="12" textAnchor="middle">Bifacial Granas Array</text>
                  
                  {/* Ground & Albedo Reflection */}
                  <path d="M 50 250 Q 200 230 350 250" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                  <path d="M 100 240 Q 150 180 150 170" fill="none" stroke="#9d4edd" strokeWidth="2" strokeDasharray="4,4" className="beam-up" />
                  <path d="M 300 240 Q 250 180 250 170" fill="none" stroke="#9d4edd" strokeWidth="2" strokeDasharray="4,4" className="beam-up delay-1" />
                  <text x="200" y="270" fill="#94a3b8" fontSize="12" textAnchor="middle">Albedo Reflection (Amplification)</text>
                  
                  {/* Energy Flow to Electrolyzer */}
                  <line x1="200" y1="170" x2="200" y2="320" stroke="#00d1ff" strokeWidth="3" className="energy-flow" />
                  
                  {/* Electrolyzer */}
                  <rect x="120" y="320" width="160" height="60" rx="8" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" />
                  <text x="200" y="355" fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">Electrolysis</text>
                  
                  {/* Outputs */}
                  <line x1="160" y1="380" x2="100" y2="440" stroke="#10b981" strokeWidth="2" className="output-flow" />
                  <line x1="240" y1="380" x2="300" y2="440" stroke="#10b981" strokeWidth="2" className="output-flow delay-1" />
                  
                  <circle cx="100" cy="450" r="20" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" />
                  <text x="100" y="455" fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">H₂</text>
                  
                  <circle cx="300" cy="450" r="20" fill="rgba(157, 78, 221, 0.2)" stroke="#9d4edd" />
                  <text x="300" y="455" fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">NH₃</text>
                </svg>
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
