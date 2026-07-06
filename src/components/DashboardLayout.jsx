import React, { useState } from 'react';
import { LayoutDashboard, Activity, Database, Settings, ShieldCheck, Zap, Search, Bell, Menu, X } from 'lucide-react';
import './DashboardLayout.css';
import ContactModal from './ContactModal';

const DashboardLayout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      {/* Sidebar Overlay for Mobile */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>

      {/* Sidebar Navigation */}
      <aside className={`dashboard-sidebar glass ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={28} className="text-cyan pulse-glow" />
            <span className="brand-text">PRIME<span className="text-purple">nergeia</span></span>
          </div>
          <button className="mobile-close-btn" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#dashboard-top" className="nav-item active" onClick={() => setIsSidebarOpen(false)}>
            <LayoutDashboard size={20} />
            <span>Command Center</span>
          </a>
          <a href="#hydrogen" className="nav-item" onClick={() => setIsSidebarOpen(false)}>
            <Activity size={20} />
            <span>Solar to H₂</span>
          </a>
          <a href="#stack" className="nav-item" onClick={() => setIsSidebarOpen(false)}>
            <Zap size={20} />
            <span>Tech Stack</span>
          </a>
          <a href="#markets" className="nav-item" onClick={() => setIsSidebarOpen(false)}>
            <Database size={20} />
            <span>Global Markets</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <a href="#" className="nav-item" onClick={() => setIsSidebarOpen(false)}>
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
            <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} className="text-cyan" />
            </button>
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
