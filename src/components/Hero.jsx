import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from 'recharts';
import './Hero.css';

const Hero = () => {
  const [data, setData] = useState([]);
  const [disturbanceActive, setDisturbanceActive] = useState(false);

  useEffect(() => {
    // Generate initial history for the hero graph
    let initData = [];
    for (let i = 0; i < 50; i++) {
      initData.push({
        time: i,
        stability: 99.8 + (Math.random() * 0.4),
        pce: 33.5 + (Math.random() * 0.2),
        h2: 25.0 + (Math.random() * 0.1)
      });
    }
    setData(initData);

    let timeIndex = 50;
    const interval = setInterval(() => {
      setData(prev => {
        const last = prev[prev.length - 1];
        let newStab = last.stability + (Math.random() - 0.5) * 0.4;
        
        // If disturbance is active, tank the frequency
        if (disturbanceActive) {
          newStab -= Math.random() * 4.5 + 1.0; 
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
        
        // Keep window at 50 points
        return [...prev.slice(1), newPoint];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [disturbanceActive]);

  const triggerDisturbance = () => {
    setDisturbanceActive(true);
    setTimeout(() => {
      setDisturbanceActive(false);
    }, 2500);
  };

  return (
    <section className="hero-section">
      <div className="ambient-glow"></div>
      <div className="container">
        <div className="hero-content animate-fade-up">
          <div className="badge glass delay-1">
            <span className="pulse"></span> Live on Node VZA-400
          </div>
          <h1 className="hero-title delay-2">
            Sovereign Intelligence Layer for the <span className="text-gradient">Energy Transition</span>
          </h1>
          <p className="hero-subtitle delay-3">
            Intelligent Multi-Market Grid Control That Recovers Lost Capital. Predicting and preventing frequency deviations in real-time.
          </p>
          <div className="hero-actions delay-3">
            <a href="#dashboard" className="btn btn-primary">
              <Activity size={20} /> View Live Dashboard
            </a>
            <a href="#contact" className="btn btn-outline">
              Request Technical Briefing <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="stats-grid animate-fade-up delay-3" style={{ marginBottom: '3rem' }}>
          <div className="glass-panel stat-card">
            <div className="stat-value text-cyan">$231,243</div>
            <div className="stat-label">Projected Recoverable Capital</div>
          </div>
          <div className="glass-panel stat-card">
            <div className="stat-value text-purple">17</div>
            <div className="stat-label">Global Markets Active</div>
          </div>
          <div className="glass-panel stat-card">
            <div className="stat-value text-cyan">1,700+ GW</div>
            <div className="stat-label">Total Grid Capacity Covered</div>
          </div>
          <div className="glass-panel stat-card">
            <div className="stat-value text-green">~$48M</div>
            <div className="stat-label">Projected ARR</div>
          </div>
        </div>

        {/* MASSIVE LIVE GRAPH RIGHT IN THE HERO SECTION */}
        <div id="dashboard" className="glass-panel animate-fade-up delay-4" style={{ padding: '2rem', marginTop: '2rem', border: '1px solid rgba(0, 209, 255, 0.3)', boxShadow: '0 0 40px rgba(0, 209, 255, 0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Activity size={24} className="pulse text-cyan" />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Live Sovereign Telemetry</h2>
            </div>
            <button 
              onClick={triggerDisturbance} 
              disabled={disturbanceActive}
              className="btn"
              style={{
                background: disturbanceActive ? 'rgba(255, 50, 50, 0.2)' : 'rgba(255, 50, 50, 0.1)',
                color: disturbanceActive ? '#ff6b6b' : '#ff4b4b',
                border: '1px solid rgba(255, 50, 50, 0.3)',
                padding: '8px 16px',
                cursor: disturbanceActive ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
            >
              <AlertTriangle size={18} />
              {disturbanceActive ? 'Disturbance Active' : 'Inject Grid Disturbance'}
            </button>
          </div>
          
          <div style={{ width: '100%', height: 450 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 0, bottom: 0, left: -20 }}>
                <defs>
                  <linearGradient id="heroColorStability" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d1ff" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#00d1ff" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="heroColorPCE" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.5}/>
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
                <Area type="monotone" dataKey="stability" name="Grid Stability (%)" stroke="#00d1ff" strokeWidth={4} fillOpacity={1} fill="url(#heroColorStability)" isAnimationActive={false} />
                <Area type="monotone" dataKey="pce" name="Solar PCE (%)" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#heroColorPCE)" isAnimationActive={false} />
                <Line type="monotone" dataKey="h2" name="H₂ Yield (kg/h)" stroke="#00ff88" strokeWidth={3} dot={false} isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <span style={{color: '#00d1ff', fontSize: '14px', fontWeight: 600}}>■ Grid Stability (100% Target)</span>
            <span style={{color: '#a855f7', fontSize: '14px', fontWeight: 600}}>■ Solar PCE Optimization</span>
            <span style={{color: '#00ff88', fontSize: '14px', fontWeight: 600}}>■ Green H₂ Yield</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
