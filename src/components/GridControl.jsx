import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Activity, ShieldCheck, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from 'recharts';
import './GridControl.css';

const GridControl = () => {
  const [data, setData] = useState([]);
  const [disturbanceActive, setDisturbanceActive] = useState(false);

  useEffect(() => {
    // Generate initial history
    let initData = [];
    for (let i = 0; i < 40; i++) {
      initData.push({
        time: i,
        stability: 99.8 + (Math.random() * 0.4),
        pce: 33.5 + (Math.random() * 0.2),
        h2: 25.0 + (Math.random() * 0.1)
      });
    }
    setData(initData);

    let timeIndex = 40;
    const interval = setInterval(() => {
      setData(prev => {
        const last = prev[prev.length - 1];
        let newStab = last.stability + (Math.random() - 0.5) * 0.4;
        
        // If disturbance is active, tank the frequency
        if (disturbanceActive) {
          newStab -= Math.random() * 3.5 + 1.0; 
        } else if (newStab < 99.8) {
          // HJB Solver kicks in to aggressively restore
          newStab += (100 - newStab) * 0.4 + (Math.random() * 0.5);
        }
        
        // Upper bound physics
        if (newStab > 100.5) newStab = 100.5;

        const newPoint = {
          time: timeIndex++,
          stability: Number(newStab.toFixed(2)),
          pce: Number((33.5 + (Math.random() * 0.3)).toFixed(2)),
          h2: Number((25.0 + (Math.random() * 0.2)).toFixed(2))
        };
        
        // Keep window at 40 points
        return [...prev.slice(1), newPoint];
      });
    }, 800);

    return () => clearInterval(interval);
  }, [disturbanceActive]);

  const triggerDisturbance = () => {
    setDisturbanceActive(true);
    setTimeout(() => {
      setDisturbanceActive(false);
    }, 2500); // Disturbance lasts 2.5 seconds
  };

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
            <div className="glass-panel visual-card" style={{ padding: '1.5rem' }}>
              <div className="visual-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00ff88', fontWeight: 'bold' }}>
                  <Activity size={18} className="pulse" />
                  Live HJB Telemetry
                </div>
                <button 
                  onClick={triggerDisturbance} 
                  disabled={disturbanceActive}
                  style={{
                    background: disturbanceActive ? 'rgba(255, 50, 50, 0.2)' : 'rgba(255, 50, 50, 0.1)',
                    color: disturbanceActive ? '#ff6b6b' : '#ff4b4b',
                    border: '1px solid rgba(255, 50, 50, 0.3)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    cursor: disturbanceActive ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    transition: 'all 0.2s'
                  }}
                >
                  <AlertTriangle size={14} />
                  {disturbanceActive ? 'Disturbance Active' : 'Inject Grid Disturbance'}
                </button>
              </div>
              
              <div style={{ width: '100%', height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 0, bottom: 0, left: -20 }}>
                    <defs>
                      <linearGradient id="colorStability" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00d1ff" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#00d1ff" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPCE" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="time" hide />
                    <YAxis domain={['auto', 'auto']} stroke="rgba(255,255,255,0.2)" tick={{fill: '#64748b', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#f8fafc' }}
                      itemStyle={{ fontWeight: 600 }}
                    />
                    <Area type="monotone" dataKey="stability" name="Grid Stability (%)" stroke="#00d1ff" strokeWidth={3} fillOpacity={1} fill="url(#colorStability)" isAnimationActive={false} />
                    <Area type="monotone" dataKey="pce" name="Solar PCE (%)" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorPCE)" isAnimationActive={false} />
                    <Line type="monotone" dataKey="h2" name="H₂ Yield (kg/h)" stroke="#00ff88" strokeWidth={2} dot={false} isAnimationActive={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-labels" style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <span style={{color: '#00d1ff', fontSize: '12px', fontWeight: 600}}>■ Grid Stability</span>
                <span style={{color: '#a855f7', fontSize: '12px', fontWeight: 600}}>■ Solar PCE</span>
                <span style={{color: '#00ff88', fontSize: '12px', fontWeight: 600}}>■ H₂ Yield</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridControl;

