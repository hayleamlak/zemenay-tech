import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/navbar.css';

export default function Navbar({ setCameraTarget, setCurrentPage }) {
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
    { label: 'Home', target: [1000, 70, 120] },
    { label: 'About', target: [500, -5, -100] },
    { label: 'Services', target: [600, 150, -200] },
    { label: 'Pricing', target: [200, 300, -400] },
    { label: 'Contact', target: [0, 800, -100] },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {buttons.map((btn, i) => (
          <li
            key={btn.label}
            className="pendulum-container"
            ref={el => (pendulumRefs.current[i] = el)}
          >
            <div className="rope" />
            <button
              onClick={() => {
                setCameraTarget(btn.target);
                setCurrentPage(btn.label);
              }}
            >
              {btn.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
