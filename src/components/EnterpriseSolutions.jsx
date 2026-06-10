import React from 'react';
import { Target, Server, Briefcase, ChevronRight } from 'lucide-react';
import './EnterpriseSolutions.css';

const EnterpriseSolutions = () => {
  return (
    <section id="enterprise" className="enterprise-section">
      <div className="section-header text-center animate-fade-up">
        <h2 className="section-title">Enterprise <span className="text-gradient">Solutions</span></h2>
        <p className="section-desc">Strategic deployment pathways for sovereign wealth, utility operators, and institutional capital.</p>
      </div>

      <div className="solutions-grid">
        {/* Solution 1 */}
        <div className="solution-card glass-panel animate-fade-up">
          <div className="solution-icon text-cyan">
            <Server size={32} />
          </div>
          <h3>Granas Hardware Deployment</h3>
          <p>Purchase and deploy our autonomous, robotic bifacial solar infrastructure. Turn barren land into self-optimizing energy farms with zero human intervention.</p>
          <ul className="solution-features">
            <li>&gt;33% Perovskite PCE</li>
            <li>Robotic Panel Adjustment</li>
            <li>Albedo Light Amplification</li>
          </ul>
        </div>

        {/* Solution 2 */}
        <div className="solution-card glass-panel animate-fade-up delay-1">
          <div className="solution-icon text-purple">
            <Target size={32} />
          </div>
          <h3>PRIME Grid Algorithmic Licensing</h3>
          <p>License our Hamilton-Jacobi-Bellman (HJB) telemetry engine to optimize your existing BESS or renewable assets across 17 global markets.</p>
          <ul className="solution-features">
            <li>Sub-millisecond Market Execution</li>
            <li>Navier-Stokes Grid Stabilization</li>
            <li>Direct ISO/CENACE Integration</li>
          </ul>
        </div>

        {/* Solution 3 */}
        <div className="solution-card glass-panel animate-fade-up delay-2">
          <div className="solution-icon text-green">
            <Briefcase size={32} />
          </div>
          <h3>Sovereign Capital Yield</h3>
          <p>Direct institutional allocation into PRIMEnergeia's sovereign energy hedge fund. High-yield returns generated from volatility arbitrage and grid stabilization.</p>
          <ul className="solution-features">
            <li>Volatility Arbitrage</li>
            <li>Zero-Trust Capital Security</li>
            <li>Quarterly Institutional Dividends</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
