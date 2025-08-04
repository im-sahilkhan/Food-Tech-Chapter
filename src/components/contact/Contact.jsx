import React from 'react';

const Contact = () => {
  const socialLinks = [
    { icon: "📱", text: "Join WhatsApp Community", href: "#" },
    { icon: "💼", text: "Join on LinkedIn", href: "#" },
    { icon: "✉️", text: "Contact via Email", href: "#" }
  ];

  return (
    <section id="contact" className="content-section">
      <h2 className="section-title">Connect With Us</h2>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} className="social-link">
            <span className="social-icon">{link.icon}</span>
            <span className="social-text">{link.text}</span>
            <span className="external-icon">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact; 