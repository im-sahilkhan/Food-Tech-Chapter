import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || false;
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'GATE', path: '/gate' },
    { name: 'Contact', path: '/contact' },
    { name: 'Team', path: '/about#team' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    if (path === '/about#team') {
      return location.pathname === '/about';
    }
    return location.pathname === path;
  };

  const handleNavClick = (path) => {
    setMenuOpen(false);
    
    if (path === '/') {
      // Navigate to home and scroll to top
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === '/about') {
      // Navigate to about page and scroll to top
      navigate('/about');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (path === '/events') {
      // Navigate to events page and scroll to top
      navigate('/events');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (path === '/contact') {
      // Navigate to contact page and scroll to top
      navigate('/contact');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (path === '/about#team') {
      // Navigate to about page and scroll to team section
      navigate('/about');
      // Wait for navigation to complete, then scroll to team section
      setTimeout(() => {
        const teamSection = document.getElementById('team');
        if (teamSection) {
          teamSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (path === '/gate') {
      // Navigate to gate page and scroll to top
      navigate('/gate');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (path.startsWith('/#')) {
      // Handle hash links on current page
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        {menuItems.map((item) => (
          <li key={item.name} className="navbar-menu-item">
            {item.path.startsWith('/#') || item.path === '/about#team' || item.path === '/' || item.path === '/about' || item.path === '/events' || item.path === '/contact' || item.path === '/gate' ? (
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path);
                }}
                className={isActive(item.path) ? 'active' : ''}
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={isActive(item.path) ? 'active' : ''}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {menuOpen ? '✖' : '☰'}
      </button>

      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;