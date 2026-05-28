import React from 'react';
import { Cpu, Zap, Activity, ShieldCheck } from 'lucide-react';
import './GridControl.css';

const GridControl = () => {
  return (
    <section id="control" className="section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="section-title">The HJB <span className="text-gradient">Optimal Control</span> Solver</h2>
          <p className="section-desc">
            Electric grids worldwide lose millions annually through suboptimal power injection. Current control systems are reactive. We are predictive.
          </p>
        </div>

        <div className="grid-control-layout">
          <div className="control-text glass-panel animate-fade-up delay-1">
            <p className="highlight-text">
              PRIMEnergeia solves the Hamilton-Jacobi-Bellman optimal control equation in real-time to predict and prevent frequency deviations before they trigger penalties.
            </p>
            
            <div className="equation-box glass">
              <code>V_t + min_u &#123; L(x, u) + ∇V · f(x, u) &#125; = 0</code>
            </div>

            <ul className="feature-list">
              <li>
                <Cpu className="feature-icon text-cyan" size={24} />
                <div>
                  <strong>Predicts</strong>
                  <p>Frequency excursions via stochastic grid dynamics.</p>
                </div>
              </li>
              <li>
                <Zap className="feature-icon text-purple" size={24} />
                <div>
                  <strong>Injects</strong>
                  <p>Synthetic inertia proactively before penalties occur.</p>
                </div>
              </li>
              <li>
                <ShieldCheck className="feature-icon text-green" size={24} />
                <div>
                  <strong>Self-Heals</strong>
                  <p>After disturbances using Deep RL actor-critic networks.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="control-visual animate-fade-up delay-2">
            <div className="glass-panel visual-card">
              <div className="visual-header">
                <Activity size={18} className="text-cyan" />
                Live Telemetry Simulation
              </div>
              <div className="chart-mockup">
                <svg viewBox="0 0 400 150" className="sine-wave">
                  <path className="wave wave-bad" d="M0,75 Q50,0 100,75 T200,75 T300,75 T400,75" fill="none" stroke="rgba(255,50,50,0.5)" strokeWidth="2"/>
                  <path className="wave wave-good" d="M0,75 Q50,50 100,75 T200,75 T300,75 T400,75" fill="none" stroke="#00d1ff" strokeWidth="3"/>
                </svg>
                <div className="chart-labels">
                  <span className="label-bad">Reactive (Legacy)</span>
                  <span className="label-good">Predictive (PRIMEnergeia)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridControl;
