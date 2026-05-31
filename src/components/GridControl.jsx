import React, { useMemo } from 'react';
import { Cpu, Zap, Activity, ShieldCheck } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './GridControl.css';

const GridControl = () => {
  const data = useMemo(() => {
    const arr = [];
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const raw = Math.sin(2 * Math.PI * 1 * t) + 0.3 * Math.sin(2 * Math.PI * 3 * t);
      const clean = Math.sin(2 * Math.PI * 1 * t);
      arr.push({ time: i, Reactive: Number(raw.toFixed(3)), Predictive: Number(clean.toFixed(3)) });
    }
    return arr;
  }, []);

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
            <div className="glass-panel visual-card" style={{ padding: '1rem' }}>
              <div className="visual-header">
                <Activity size={18} className="text-cyan" />
                Live Telemetry: Harmonic Compensation
              </div>
              <div style={{ width: '100%', height: 300, marginTop: '1rem' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                    <XAxis dataKey="time" hide />
                    <YAxis domain={[-1.5, 1.5]} stroke="rgba(255,255,255,0.2)" tick={{fill: '#94a3b8'}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0d1117', border: '1px solid #1f2937', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Line type="monotone" dataKey="Reactive" stroke="rgba(255,50,50,0.6)" strokeWidth={2} dot={false} isAnimationActive={true} animationDuration={2000} />
                    <Line type="monotone" dataKey="Predictive" stroke="#00d1ff" strokeWidth={3} dot={false} isAnimationActive={true} animationDuration={2000} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-labels">
                <span className="label-bad" style={{color: 'rgba(255,50,50,0.8)'}}>Reactive (Distorted)</span>
                <span className="label-good" style={{color: '#00d1ff', fontWeight: 600}}>PRIME (Clean)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridControl;
