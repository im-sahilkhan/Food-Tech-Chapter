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

      {/* NPTEL Lectures Section */}
      <section className="nptel-section">
        <div className="nptel-header">
          <h2>NPTEL Video Lectures for GATE Preparation</h2>
          <p>Access free NPTEL video lectures for comprehensive GATE preparation</p>
        </div>

        <div className="nptel-table-container">
          <table className="nptel-table">
            <thead>
              <tr>
                <th>XE Paper Sections</th>
                <th>NPTEL Video Lectures</th>
              </tr>
            </thead>
            <tbody>
              <tr className="compulsory-row">
                <td>
                  <strong>Engineering Mathematics</strong>
                  <span className="section-note">(Compulsory - 15 marks)</span>
                </td>
                <td>
                  <a href="https://nptel.ac.in/courses/111/105/111105069/" target="_blank" rel="noopener noreferrer">
                    Engineering Mathematics
                  </a>
                </td>
              </tr>
              <tr className="optional-header">
                <td colSpan="2">
                  <strong>Any TWO optional Sections (2×35 = 70 marks)</strong>
                </td>
              </tr>
              <tr>
                <td>Fluid Mechanics (Code: B)</td>
                <td>
                  <a href="https://nptel.ac.in/courses/112/105/112105125/" target="_blank" rel="noopener noreferrer">
                    Fluid Mechanics
                  </a>
                </td>
              </tr>
              <tr>
                <td>Materials Science (Code: C)</td>
                <td>
                  <a href="https://nptel.ac.in/courses/113/105/113105125/" target="_blank" rel="noopener noreferrer">
                    Materials Science and Engineering
                  </a>
                </td>
              </tr>
              <tr>
                <td>Solid Mechanics (Code: D)</td>
                <td>
                  <a href="https://nptel.ac.in/courses/112/105/112105126/" target="_blank" rel="noopener noreferrer">
                    Solid Mechanics
                  </a>
                </td>
              </tr>
              <tr>
                <td>Thermodynamics (Code: E)</td>
                <td>
                  <a href="https://nptel.ac.in/courses/112/105/112105127/" target="_blank" rel="noopener noreferrer">
                    Thermodynamics
                  </a>
                </td>
              </tr>
              <tr>
                <td>Polymer Science and Engineering (Code: F)</td>
                <td>
                  <a href="https://nptel.ac.in/courses/103/105/103105125/" target="_blank" rel="noopener noreferrer">
                    Polymer Science and Technology
                  </a>
                </td>
              </tr>
              <tr className="highlighted-row">
                <td><strong>Food Technology (Code: G)</strong></td>
                <td>
                  <a href="https://nptel.ac.in/courses/103/105/103105126/" target="_blank" rel="noopener noreferrer">
                    Food Technology and Processing
                  </a>
                </td>
              </tr>
              <tr>
                <td>Atmospheric and Oceanic Sciences (Code: H)</td>
                <td>
                  <a href="https://nptel.ac.in/courses/119/105/119105125/" target="_blank" rel="noopener noreferrer">
                    Atmospheric and Oceanic Sciences
                  </a>
                </td>
              </tr>
              <tr>
                <td>Energy Science (Code: I)</td>
                <td>
                  <a href="https://nptel.ac.in/courses/112/105/112105128/" target="_blank" rel="noopener noreferrer">
                    Energy Science and Technology
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
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
        <div className="notification-line">
          <div className="notification-content">
            <span className="notification-icon">📢</span>
            <span className="notification-text">For Detailed and Complete curriculum of GATE,</span>
            <a href="https://gate2026.iitg.ac.in/exam-papers-and-syllabus.html" target="_blank" rel="noopener noreferrer">Click Here</a>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default GatePage; 