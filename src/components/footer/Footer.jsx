import React from 'react';

const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Chapters', href: '#teams' },
    { name: 'Blog', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="footer-content">
          {/* 0x0 Pirates Section */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="accent-text">Food Tech Chapter</span> 
            </h3>
            <p className="footer-description">
              A global network of food technology enthusiasts, researchers, and educators united by a shared commitment to making food technology knowledge accessible to all.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 8057740599</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Aligarh, India</span>
              </div>
            </div>
          </div>         
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <span className="copyright">© 2025 Food Tech Chapter | All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 