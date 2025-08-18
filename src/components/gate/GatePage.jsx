import React from 'react';
import './GatePage.css';
import xeSyllabus from '../../assets/XE-G_2026_Syllabus.pdf';
import xlSyllabus from '../../assets/XL-U_2026_Syllabus.pdf';
import gateNotification from '../../assets/Final_Poster_Design_for_GATE_2026.pdf';

const GatePage = () => {
  return (
    <div className="gate-page-container">
      {/* Hero Section */}
      <section className="gate-hero">
        <div className="gate-hero-content">
          <h1 className="gate-title">GATE Food Technology</h1>
          <p className="gate-subtitle">
            Prepare for GATE 2026 with our comprehensive syllabus and study materials
          </p>
          <p className="gate-description">
            Access the official GATE 2026 syllabi for Food Technology specialization. 
            Choose between XL (Life Sciences) and XE (Engineering Sciences) based on your background and interests.
          </p>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="syllabus-section">
        <div className="syllabus-header">
          <h2>GATE 2026 Syllabus</h2>
          <p>Download the official GATE 2026 syllabi for Food Technology</p>
        </div>

        <div className="syllabus-grid">
          {/* XL Syllabus Card */}
          <div className="syllabus-card">
            <div className="syllabus-card-header">
              <div className="syllabus-icon">📚</div>
              <h3>GATE 2026 Food Technology XL</h3>
              <span className="syllabus-subtitle">Life Sciences</span>
            </div>
            <div className="syllabus-card-content">
              <p>
                This syllabus is designed for candidates with a background in Life Sciences, 
                Biology, Biochemistry, or related fields. It focuses on biological aspects 
                of food technology and processing.
              </p>
              <div className="syllabus-features">
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span>Biological Sciences Focus</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🧬</span>
                  <span>Biochemistry & Microbiology</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔬</span>
                  <span>Food Safety & Quality</span>
                </div>
              </div>
            </div>
            <div className="syllabus-card-actions">
              <a 
                href={xlSyllabus} 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-btn"
              >
                📥 Download XL Syllabus
              </a>
            </div>
          </div>

          {/* XE Syllabus Card */}
          <div className="syllabus-card">
            <div className="syllabus-card-header">
              <div className="syllabus-icon">⚙️</div>
              <h3>GATE 2026 Food Technology XE</h3>
              <span className="syllabus-subtitle">Engineering Sciences</span>
            </div>
            <div className="syllabus-card-content">
              <p>
                This syllabus is designed for candidates with an Engineering background. 
                It emphasizes engineering principles, processing technologies, and 
                industrial applications in food technology.
              </p>
              <div className="syllabus-features">
                <div className="feature-item">
                  <span className="feature-icon">🔧</span>
                  <span>Engineering Principles</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏭</span>
                  <span>Processing Technologies</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>Industrial Applications</span>
                </div>
              </div>
            </div>
            <div className="syllabus-card-actions">
              <a 
                href={xeSyllabus} 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-btn"
              >
                📥 Download XE Syllabus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GATE Notification Section */}
      <section className="notification-section">
        <div className="notification-line">
          <div className="notification-content">
            <span className="notification-icon">📢</span>
            <span className="notification-text">GATE 2025 Notification is now available</span>
          </div>
          <a 
            href={gateNotification} 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-btn"
          >
            View
          </a>
        </div>
      </section>

    </div>
  );
};

export default GatePage; 