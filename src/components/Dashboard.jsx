import React, { useState, useEffect } from 'react';
import { Activity, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from 'recharts';
import GlobalMarkets from './GlobalMarkets';
import GranasPlatform from './GranasPlatform';
import HydrogenAmmonia from './HydrogenAmmonia';
import TechnologyStack from './TechnologyStack';
import EnterpriseSolutions from './EnterpriseSolutions';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [disturbanceActive, setDisturbanceActive] = useState(false);
  const [isDashboardVisible, setIsDashboardVisible] = useState(
    typeof window !== 'undefined' ? window.innerWidth > 768 : true
  );

  useEffect(() => {
    let initData = [];
    for (let i = 0; i < 50; i++) {
      initData.push({
        time: i,
        stability: 99.8 + (Math.random() * 0.4),
        pce: 46.2 + (Math.random() * 0.2),
        h2: 25.0 + (Math.random() * 0.1)
      });
    }
    setData(initData);

    let timeIndex = 50;
    const interval = setInterval(() => {
      setData(prev => {
        const last = prev[prev.length - 1];
        let newStab = last.stability + (Math.random() - 0.5) * 0.4;
        if (disturbanceActive) {
          newStab -= Math.random() * 4.5 + 1.0; 
        } else if (newStab < 99.8) {
          newStab += (100 - newStab) * 0.4 + (Math.random() * 0.5);
        }
        if (newStab > 100.5) newStab = 100.5;

        const newPoint = {
          time: timeIndex++,
          stability: Number(newStab.toFixed(2)),
          pce: Number((46.2 + (Math.random() * 0.3)).toFixed(2)),
          h2: Number((25.0 + (Math.random() * 0.2)).toFixed(2))
        };
        return [...prev.slice(1), newPoint];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [disturbanceActive]);

  const triggerDisturbance = () => {
    setDisturbanceActive(true);
    setTimeout(() => setDisturbanceActive(false), 2500);
  };

  return (
    <div className="dashboard-container" id="dashboard-top">
      
      {/* Dashboard Toggle for Mobile/Desktop */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '-1rem' }}>
        <button 
          className="btn btn-outline" 
          onClick={() => setIsDashboardVisible(!isDashboardVisible)}
          style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', zIndex: 10 }}
        >
          {isDashboardVisible ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {isDashboardVisible ? 'Hide Telemetry' : 'Show Telemetry'}
        </button>
      </div>

      {isDashboardVisible && (
        <>
          {/* The 4 Stat Cards */}
          <div className="stats-grid animate-fade-up">
        <div className="glass-panel stat-card dashboard-card">
          <div className="stat-value text-cyan">99.9%</div>
          <div className="stat-label">System Availability Target</div>
        </div>
        <div className="glass-panel stat-card dashboard-card">
          <div className="stat-value text-purple">17</div>
          <div className="stat-label">Global Markets Active</div>
        </div>
        <div className="glass-panel stat-card dashboard-card">
          <div className="stat-value text-cyan">1,700+ GW</div>
          <div className="stat-label">Total Grid Capacity Covered</div>
        </div>
        <div className="glass-panel stat-card dashboard-card">
          <div className="stat-value text-green">&lt; 1ms</div>
          <div className="stat-label">HJB Solver Latency</div>
        </div>
      </div>

      {/* Trust Signals Ticker */}
      <div className="trust-ticker glass-panel animate-fade-up">
        <span className="ticker-label">Structurally Compatible With:</span>
        <div className="ticker-track">
          <span>Tesla Megapack</span>
          <span className="dot">•</span>
          <span>Fluence BESS</span>
          <span className="dot">•</span>
          <span>ERCOT ISO</span>
          <span className="dot">•</span>
          <span>CENACE Node</span>
          <span className="dot">•</span>
          <span>PJM Interconnection</span>
          <span className="dot">•</span>
          <span>ENTSO-E Grid</span>
        </div>
      </div>

      {/* Massive Live Graph matching Mockup */}
      <div className="glass-panel main-chart-panel animate-fade-up delay-1">
        <div className="chart-header">
          <div className="chart-title">
            <Activity size={24} className="pulse text-cyan" />
            <h2>Integrated Telemetry</h2>
          </div>
          <button 
            onClick={triggerDisturbance} 
            disabled={disturbanceActive}
            className={`btn disturbance-btn ${disturbanceActive ? 'active' : ''}`}
          >
            <AlertTriangle size={18} />
            {disturbanceActive ? 'Disturbance Active' : 'Inject Grid Disturbance'}
          </button>
        </div>
        
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="dashColorStability" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00d1ff" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#00d1ff" stopOpacity={0.05}/>
                </linearGradient>
                <linearGradient id="dashColorPCE" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="time" hide />
              <YAxis domain={['auto', 'auto']} stroke="rgba(255,255,255,0.2)" tick={{fill: '#64748b', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#f8fafc' }}
                itemStyle={{ fontWeight: 600 }}
              />
              <Area type="monotone" dataKey="stability" name="Grid Stability (%)" stroke="#00d1ff" strokeWidth={4} fillOpacity={1} fill="url(#dashColorStability)" isAnimationActive={false} />
              <Area type="monotone" dataKey="pce" name="Solar PCE (%)" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#dashColorPCE)" isAnimationActive={false} />
              <Line type="monotone" dataKey="h2" name="H₂ Yield (kg/h)" stroke="#00ff88" strokeWidth={3} dot={false} isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-legend">
          <span className="legend-item"><span className="legend-box cyan"></span> Grid Stability (100% Target)</span>
          <span className="legend-item"><span className="legend-box purple"></span> Solar PCE Optimization</span>
          <span className="legend-item"><span className="legend-box green"></span> Green H₂ Yield</span>
        </div>
        </div>
        </>
      )}

      {/* Additional Dashboard Widgets in a Masonry Grid */}
      <div className="dashboard-widgets-grid">
        <div className="dashboard-widget widget-full-width">
          <EnterpriseSolutions />
        </div>
        <div className="dashboard-widget widget-full-width">
          <HydrogenAmmonia />
        </div>
        <div className="dashboard-widget">
          <GlobalMarkets />
        </div>
        <div className="dashboard-widget">
          <TechnologyStack />
        </div>
        <div className="dashboard-widget widget-full-width">
          <GranasPlatform />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
