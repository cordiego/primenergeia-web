import React, { useState } from 'react';
import { LayoutDashboard, Activity, Database, Settings, ShieldCheck, Zap, Search, Bell } from 'lucide-react';
import './DashboardLayout.css';
import ContactModal from './ContactModal';

const DashboardLayout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar glass">
        <div className="sidebar-brand">
          <ShieldCheck size={28} className="text-cyan pulse-glow" />
          <span className="brand-text">PRIME<span className="text-purple">nergeia</span></span>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#dashboard-top" className="nav-item active">
            <LayoutDashboard size={20} />
            <span>Command Center</span>
          </a>
          <a href="#hydrogen" className="nav-item">
            <Activity size={20} />
            <span>Solar to H₂</span>
          </a>
          <a href="#stack" className="nav-item">
            <Zap size={20} />
            <span>Tech Stack</span>
          </a>
          <a href="#markets" className="nav-item">
            <Database size={20} />
            <span>Global Markets</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <a href="#" className="nav-item">
            <Settings size={20} />
            <span>System Config</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="dashboard-main">
        {/* Top Header */}
        <header className="dashboard-header glass">
          <div className="header-left">
            <h2 className="header-title">Sovereign Intelligence Layer</h2>
          </div>
          <div className="header-right">
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)} style={{ marginRight: '1rem' }}>
              Request Sovereign Access
            </button>
            <div className="status-badge glass">
              <span className="pulse"></span> Live: Node VZA-400
            </div>
            <div className="user-profile">
              <div className="avatar">SOV</div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="dashboard-content">
          {children}
        </div>
      </div>
      
      {/* Dynamic Ambient Background Elements */}
      <div className="ambient-glow"></div>
      <div className="ambient-glow-alt"></div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default DashboardLayout;
