import React, { useState } from 'react';
import { X, Terminal, ShieldCheck } from 'lucide-react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        {formState === 'success' ? (
          <div className="modal-success">
            <ShieldCheck size={64} className="text-green pulse-slow" />
            <h3>Terminal Initialized</h3>
            <p>Access request logged. Our sovereign energy team will contact you securely within 24 hours.</p>
            <button className="btn btn-primary" onClick={onClose}>Close Terminal</button>
          </div>
        ) : (
          <div className="modal-form">
            <div className="modal-header">
              <Terminal size={24} className="text-cyan" />
              <h3>Request Sovereign Access</h3>
            </div>
            <p className="modal-desc">Initialize partnership protocols for enterprise energy deployment or sovereign fund allocation.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Institution / Company Name</label>
                <input type="text" required placeholder="e.g. NextEra Energy" />
              </div>
              <div className="form-group">
                <label>Official Email</label>
                <input type="email" required placeholder="director@nextera.com" />
              </div>
              <div className="form-group">
                <label>Primary Objective</label>
                <select required>
                  <option value="" disabled selected>Select an objective...</option>
                  <option value="granas">Utility-Scale Solar Deployment (Granas)</option>
                  <option value="prime">Algorithmic Energy Trading (PRIME Grid)</option>
                  <option value="fund">Sovereign Energy Fund Allocation</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn" disabled={formState === 'loading'}>
                {formState === 'loading' ? 'Authenticating...' : 'Transmit Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
