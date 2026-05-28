import React from 'react';
import { Globe, Shield } from 'lucide-react';
import './GlobalMarkets.css';

const GlobalMarkets = () => {
  return (
    <section id="markets" className="section alt-bg">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="section-title">Operating in <span className="text-gradient">17 Global Markets</span></h2>
          <p className="section-desc">A unified architecture covering major ISOs across the Americas, Europe, and Asia-Pacific.</p>
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
