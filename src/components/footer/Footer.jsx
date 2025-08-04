import React from 'react';

const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Chapters', href: '#teams' },
    { name: 'Blog', href: '#contact' }
  ];

  const resourceLinks = [
    { name: 'Tools', href: '#' },
    { name: 'Archive', href: '#' },
    { name: 'Join Us', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="footer-content">
          {/* 0x0 Pirates Section */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="accent-text">0x0</span> Pirates
            </h3>
            <p className="footer-description">
              A global network of cybersecurity enthusiasts, researchers, and educators united by a shared commitment to making security knowledge accessible to all.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 8287664949</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>New Delhi, India</span>
              </div>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon-link">💼</a>
              <a href="#" className="social-icon-link">🐦</a>
              <a href="#" className="social-icon-link">📷</a>
              <a href="#" className="social-icon-link">🎮</a>
              <a href="#" className="social-icon-link">📺</a>
              <a href="#" className="social-icon-link">📘</a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="footer-section">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div className="footer-section">
            <h3 className="footer-title">Stay Connected</h3>
            <p className="footer-description">
              Subscribe to our newsletter for the latest updates on upcoming events, tools, and community news.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="youremail@example.com" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">→</button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <span className="copyright">© 2025 0x0 Pirates | All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 