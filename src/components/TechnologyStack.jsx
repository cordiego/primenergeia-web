import React from 'react';
import { Layers, Cpu, Globe, Server } from 'lucide-react';
import './TechnologyStack.css';

const TechnologyStack = () => {
  return (
    <section id="tech-stack" className="section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="section-title">The <span className="text-gradient">Architectural Frame</span></h2>
          <p className="section-desc">
            PRIMEnergeia operates as a vertically integrated stack, uniting predictive optimal control with synthetic chemistry and global market APIs.
          </p>
        </div>

        <div className="stack-container animate-fade-up delay-1">
          <div className="stack-layer glass-panel layer-market">
            <div className="layer-icon"><Globe className="text-cyan" /></div>
            <div className="layer-content">
              <h3>Market & ISO Integration Layer</h3>
              <p>Interfaces with 17 global energy markets (ERCOT, CENACE, ENTSO-E). Executes high-frequency trades and retrieves real-time pricing and node telemetry.</p>
            </div>
          </div>

          <div className="stack-connector"></div>

          <div className="stack-layer glass-panel layer-control">
            <div className="layer-icon"><Cpu className="text-purple" /></div>
            <div className="layer-content">
              <h3>Stochastic Control Layer (HJB Solver)</h3>
              <p>The core intelligence. Solves Hamilton-Jacobi-Bellman equations continuously to compute the optimal synthetic inertia injection, predicting frequency excursions before they cascade.</p>
            </div>
          </div>

          <div className="stack-connector"></div>

          <div className="stack-layer glass-panel layer-conversion">
            <div className="layer-icon"><Server className="text-green" /></div>
            <div className="layer-content">
              <h3>Chemical Conversion Layer</h3>
              <p>Dynamically routes excess generation (curtailment) to electrolyzers for Green Hydrogen and Ammonia synthesis based on real-time grid pricing thresholds.</p>
            </div>
          </div>

          <div className="stack-connector"></div>

          <div className="stack-layer glass-panel layer-generation">
            <div className="layer-icon"><Layers className="text-yellow" /></div>
            <div className="layer-content">
              <h3>Physical Generation Layer (Granas)</h3>
              <p>Bifacial perovskite-silicon tandem arrays engineered via 6D Bayesian optimization. Maximizes yield through Albedo tracking and optimized tunnel oxide passivated contacts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
