import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/navbar.css';

export default function Navbar({ onNavigate, currentPage }) {
  const pendulumRefs = useRef([]);

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

  const buttons = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {buttons.map((btn, i) => (
          <li
            key={btn.label}
            className={`pendulum-container ${currentPage === btn.label ? 'active' : ''}`}
            ref={el => (pendulumRefs.current[i] = el)}
          >
            <div className="rope" />
            <a
              href="#!"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(btn.path);
              }}
            >
              {btn.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
