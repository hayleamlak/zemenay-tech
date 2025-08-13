import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../styles/navbar.css';
import logoImg from '../assets/Zemenay Main.png';

export default function Navbar({ onNavigate, currentPage }) {
  const pendulumRefs = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => setMenuOpen((open) => !open);

  const handleNavigate = (path) => {
    onNavigate(path);
    setMenuOpen(false);
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
        <div
          className="logo"
          tabIndex={0}
          onClick={() => handleNavigate('/')}
          onKeyPress={(e) => e.key === 'Enter' && handleNavigate('/')}
          role="link"
          aria-label="Go to homepage"
          style={{ cursor: 'pointer' }}
        >
          <img src={logoImg} alt="Zemenay logo" style={{ height: 40, width: 'auto', borderRadius: 0 }} />
        </div>

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
