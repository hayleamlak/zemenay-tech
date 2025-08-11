import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../styles/navbar.css';
import logoImg from '../assets/Zemenay Main.png'; // adjust path if needed

export default function Navbar({ onNavigate, currentPage }) {
  const pendulumRefs = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Dark/light mode state with initial theme detection
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    pendulumRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        rotation: 8,
        transformOrigin: 'top center',
        duration: 3 + i * 0.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: i * 0.3,
      });
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setMenuOpen((open) => !open);

  const handleNavigate = (path) => {
    onNavigate(path);
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const buttons = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-wrapper">
        {/* Logo as image without border radius */}
        <div
          className="logo"
          tabIndex={0}
          onClick={() => handleNavigate('/')}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleNavigate('/');
          }}
          role="link"
          aria-label="Go to homepage"
          style={{ cursor: 'pointer' }}
        >
          <img src={logoImg} alt="Zemenay logo" style={{ height: 40, width: 'auto', borderRadius: 0 }} />
        </div>

        {/* Navigation list */}
        <ul className={`nav-list ${menuOpen ? 'nav-open' : ''}`}>
          {buttons.map((btn, i) => (
            <li
              key={btn.label}
              className={`pendulum-container ${currentPage === btn.label ? 'active' : ''}`}
              ref={(el) => (pendulumRefs.current[i] = el)}
            >
              <div className="rope" />
              <button
                onClick={() => handleNavigate(btn.path)}
                type="button"
                className="nav-button"
                aria-current={currentPage === btn.label ? 'page' : undefined}
              >
                {btn.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Dark/Light Mode Toggle Button (right-most) */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          type="button"
        >
          {theme === 'dark' ? (
            // Sun icon for light mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5" />
              <g stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>

        {/* Hamburger menu button */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          type="button"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>
    </nav>
  );
}
