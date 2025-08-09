import React from "react";
import "../styles/Footer.css";

export default function Footer({ setCameraTarget, setCurrentPage }) {
  const links = [
    { label: "Home", target: [1000, 70, 120] },
    { label: "About", target: [500, -5, -100] },
    { label: "Services", target: [600, 150, -200] },
    { label: "Pricing", target: [200, 300, -400] },
    { label: "Contact", target: [0, 800, -100] },
  ];

  const legalLinks = [
    { label: "Privacy Policy", target: [0, 0, 0] }, // set target as needed
    { label: "Terms of Service", target: [0, 0, 0] }, // set target as needed
  ];

  return (
    <footer className="footer-container">
      {/* Logo Column */}
      <div className="footer-column footer-logo-column">
        <img src="/Zemenay Main.png" alt="Zemenay Logo" />
      </div>

      {/* Quick Links */}
      <div className="footer-column">
        <h4>Quick Links</h4>
        <nav>
          {links.map(({ label, target }) => (
            <button
              key={label}
              onClick={() => {
                setCameraTarget(target);
                setCurrentPage(label);
              }}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Legal */}
      <div className="footer-column">
        <h4>Legal</h4>
        <nav>
          {legalLinks.map(({ label, target }) => (
            <button
              key={label}
              onClick={() => {
                setCameraTarget(target);
                setCurrentPage(label);
              }}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Connect */}
      <div className="footer-column">
        <h4>Connect</h4>
        <nav>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:zemenaytechsolutions@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}
