import React from "react";
import "../styles/Footer.css";

export default function Footer({ onNavigate, currentPage }) {
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", path: "/privacy" }, // update route as needed
    { label: "Terms of Service", path: "/terms" }, // update route as needed
  ];

  const handleNavigation = (path) => {
    onNavigate(path);
    // Smooth scroll to top will be handled by App.jsx useEffect
  };

  return (
    <footer className="footer-container">
      {/* Logo Column */}
      <div className="footer-column footer-logo-column">
        <img src="/src/assets/Zemenay Main.png" alt="Zemenay Logo" />
      </div>

      {/* Quick Links */}
      <div className="footer-column">
        <h4>Quick Links</h4>
        <nav>
          {links.map(({ label, path }) => (
            <button
              key={label}
              className={currentPage === label ? "active" : ""}
              onClick={() => handleNavigation(path)}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Legal Links */}
      <div className="footer-column">
        <h4>Legal</h4>
        <nav>
          {legalLinks.map(({ label, path }) => (
            <button
              key={label}
              className={currentPage === label ? "active" : ""}
              onClick={() => handleNavigation(path)}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Connect Links */}
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
