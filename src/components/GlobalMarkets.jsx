import React from 'react';
import { Globe, Shield } from 'lucide-react';
import './GlobalMarkets.css';

const GlobalMarkets = () => {
  return (
    <section id="markets" className="section alt-bg">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="section-title">The <span className="text-gradient">PRIME Grid</span></h2>
          <p className="section-desc" style={{ marginBottom: '2rem' }}>A unified, zero-trust infrastructure connecting 17 global energy markets. Maximizing yield for asset owners through continuous, high-frequency HJB telemetry.</p>
        </div>

        <div className="global-map-container animate-fade-up delay-1" style={{ width: '100%', marginBottom: '3rem', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0, 209, 255, 0.2)', boxShadow: '0 0 30px rgba(0, 209, 255, 0.1)' }}>
          <img src="/prime_grid_asset.png" alt="PRIME Grid Global Network Map" style={{ width: '100%', display: 'block' }} />
        </div>

        <div className="market-cards">
          
          <div className="market-card glass-panel animate-fade-up">
            <div className="market-region"><span className="flag">🇺🇸</span> US ISOs</div>
            <div className="market-names">ERCOT · PJM · CAISO · MISO · SPP · NYISO · ISONE</div>
            <div className="market-capacity">~665 GW Capacity</div>
            <div className="market-detail">Extreme volatility, scarcity caps up to $5,000/MWh.</div>
          </div>

          <div className="market-card glass-panel animate-fade-up delay-1">
            <div className="market-region"><span className="flag">🇲🇽</span> México</div>
            <div className="market-names">SEN / CENACE</div>
            <div className="market-capacity">~75 GW Capacity</div>
            <div className="market-detail">30 nodes, 9 regions, 15-min settlement.</div>
          </div>

          <div className="market-card glass-panel animate-fade-up delay-2">
            <div className="market-region"><span className="flag">🇪🇺</span> Europe & <span className="flag">🇪🇸🇵🇹</span> Iberia</div>
            <div className="market-names">EPEX · Nord Pool · MIBEL · Elexon</div>
            <div className="market-capacity">~640 GW Capacity</div>
            <div className="market-detail">50 Hz ENTSO-E grid integration.</div>
          </div>

          <div className="market-card glass-panel animate-fade-up delay-3">
            <div className="market-region"><span className="flag">🇦🇺🇯🇵</span> Asia-Pacific</div>
            <div className="market-names">NEM · JEPX</div>
            <div className="market-capacity">~335 GW Capacity</div>
            <div className="market-detail">$17,500/MWh price cap in Australia.</div>
          </div>

        </div>

        <div className="security-banner glass-panel animate-fade-up delay-3">
          <Shield className="text-green" size={28} />
          <div className="security-text">
            <h4>Institutional Grade Security</h4>
            <p>Our autonomous execution nodes are built with zero-trust architecture and multi-party computation for sovereign control over proprietary algorithmic capital.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMarkets;
