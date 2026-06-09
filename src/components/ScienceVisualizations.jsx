import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ComposedChart } from 'recharts';
import { Activity, Zap } from 'lucide-react';
import './ScienceVisualizations.css';

const ScienceVisualizations = () => {
  const [telemetryData, setTelemetryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const animationRef = useRef(null);

  const fetchSimulation = async () => {
    setIsLoading(true);
    setTelemetryData([]); // Clear graph
    
    // Clear any existing animation
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/telemetry/simulate');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      streamData(data);
    } catch (error) {
      console.error("Failed to fetch simulation data. Falling back to mock data.", error);
      // Fallback mock data generation
      const mock = [];
      let pce = 32.5, freqStability = 50.0, h2Yield = 10.0;
      for (let i = 0; i < 60; i++) {
        pce += (Math.random() - 0.5) * 0.1;
        freqStability += (100 - freqStability) * 0.15 + (Math.random() - 0.5);
        if (freqStability > 100) freqStability = 100;
        h2Yield = (pce * 0.5) + (freqStability * 0.2) + (Math.random() * 1.5);
        mock.push({
          time: `T+${i}s`,
          Granas_PCE: Number(pce.toFixed(2)),
          Control_Stability: Number(freqStability.toFixed(2)),
          H2_Yield: Number(h2Yield.toFixed(2))
        });
      }
      streamData(mock);
    } finally {
      setIsLoading(false);
    }
  };

  const streamData = (fullData) => {
    let index = 0;
    // Trickle in one data point every 100ms to simulate a live real-time graph
    animationRef.current = setInterval(() => {
      if (index < fullData.length) {
        setTelemetryData(prev => [...prev, fullData[index]]);
        index++;
      } else {
        clearInterval(animationRef.current);
      }
    }, 100);
  };

  // Initial load
  useEffect(() => {
    fetchSimulation();
    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
    };
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip glass-panel" style={{ padding: '10px', minWidth: '200px' }}>
          <p className="label text-secondary" style={{ marginBottom: '10px', fontWeight: 'bold' }}>{`Time: ${label}`}</p>
          {payload.map((entry, index) => (
            <div key={index} style={{ color: entry.color, marginBottom: '5px', display: 'flex', justifyContent: 'space-between' }}>
              <span>{entry.name}:</span>
              <span style={{ fontWeight: 'bold' }}>{entry.value}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="section alt-bg">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="section-title">Integrated <span className="text-gradient">Telemetry</span></h2>
          <p className="section-desc">
            Live Digital Twin Demo: Inject a grid disturbance and watch the HJB solver stabilize frequency while optimizing H₂ synthesis yield.
          </p>
        </div>

        <div className="science-grid">
          <div className="glass-panel science-card animate-fade-up">
            <div className="science-header" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Activity size={20} className="text-cyan" />
                System-Wide Performance Convergence
              </div>
              <button 
                onClick={fetchSimulation} 
                disabled={isLoading}
                className="btn btn-primary btn-sm"
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
              >
                <Zap size={16} /> 
                {isLoading ? "Simulating..." : "Inject Grid Disturbance"}
              </button>
            </div>
            
            <div className="chart-container" style={{ opacity: isLoading ? 0.5 : 1, transition: 'opacity 0.3s' }}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={telemetryData} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="colorPCE" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9d4edd" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#9d4edd" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorStability" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00d1ff" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#00d1ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="time" stroke="rgba(255,255,255,0.2)" tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis yAxisId="left" stroke="rgba(255,255,255,0.2)" tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis yAxisId="right" orientation="right" stroke="rgba(255,255,255,0.2)" tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  
                  <Area yAxisId="left" type="monotone" dataKey="Control_Stability" name="Grid Stability (%)" stroke="#00d1ff" fill="url(#colorStability)" strokeWidth={2} isAnimationActive={!isLoading} />
                  <Area yAxisId="left" type="monotone" dataKey="Granas_PCE" name="Granas PCE (%)" stroke="#9d4edd" fill="url(#colorPCE)" strokeWidth={2} isAnimationActive={!isLoading} />
                  <Line yAxisId="right" type="monotone" dataKey="H2_Yield" name="H₂ Yield (kg/h)" stroke="#10b981" strokeWidth={3} dot={false} isAnimationActive={!isLoading} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-footer">
              <p>Demonstrating how predictive inertia injection (Control) prevents curtailment, directly driving chemical asset yields (H₂).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceVisualizations;
