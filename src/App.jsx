import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GridControl from './components/GridControl';
import GlobalMarkets from './components/GlobalMarkets';
import GranasPlatform from './components/GranasPlatform';
import ScienceVisualizations from './components/ScienceVisualizations';
import HydrogenAmmonia from './components/HydrogenAmmonia';
import TechnologyStack from './components/TechnologyStack';

function App() {
  return (
    <>
      <div className="ambient-glow-alt"></div>
      <Navbar />
      <main>
        <Hero />
        <GridControl />
        <GlobalMarkets />
        <GranasPlatform />
        <HydrogenAmmonia />
        <TechnologyStack />
        <ScienceVisualizations />
      </main>
      
      <footer className="glass" style={{ padding: '3rem 0', marginTop: '4rem', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="logo" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <span className="logo-icon">⚡</span>
            <span className="logo-text">PRIMEnergeia S.A.S.</span>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>Soberanía Energética Global</p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '2rem' }}>&copy; 2026 PRIMEnergeia S.A.S. Proprietary. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
