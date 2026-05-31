import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Beaker } from 'lucide-react';
import './ScienceVisualizations.css';

const ScienceVisualizations = () => {
  // Granas Bayesian Optimization Convergence Data
  const granasData = useMemo(() => {
    const data = [];
    let pce = 20.0;
    for (let iteration = 0; iteration <= 50; iteration++) {
      // Logarithmic convergence function + some noise
      const improvement = (33.5 - pce) * 0.15;
      const noise = (Math.random() - 0.5) * 0.5;
      pce = pce + improvement + noise;
      if (pce > 33.5) pce = 33.5;
      data.push({
        iteration,
        PCE: Number(pce.toFixed(2)),
        Target: 33.5
      });
    }
    return data;
  }, []);

  return (
    <section className="section alt-bg">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="section-title">Algorithmic <span className="text-gradient">Discovery</span></h2>
          <p className="section-desc">
            Visualizing the convergence of our 6D Bayesian Search Space for advanced perovskite optimization.
          </p>
        </div>

        <div className="science-grid">
          <div className="glass-panel science-card animate-fade-up">
            <div className="science-header">
              <Beaker size={20} className="text-purple" />
              Granas PCE Optimization Trajectory
            </div>
            
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={granasData} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
                  <defs>
                    <linearGradient id="colorPCE" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9d4edd" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#9d4edd" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="iteration" stroke="rgba(255,255,255,0.2)" tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis domain={[18, 35]} stroke="rgba(255,255,255,0.2)" tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0d1117', border: '1px solid #1f2937', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="PCE" stroke="#9d4edd" strokeWidth={3} fillOpacity={1} fill="url(#colorPCE)" isAnimationActive={true} animationDuration={2500} />
                  <Area type="step" dataKey="Target" stroke="#00d1ff" strokeWidth={2} fill="none" strokeDasharray="5 5" isAnimationActive={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-footer">
              <p>Simulating crystallization kinetics over 50 automated synthesis iterations. Target efficiency: <strong>33.5%</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceVisualizations;
