import React from 'react';
import '../styles/Footer.css'; 

export default function Footer() {
  return (
    <footer className="footer-container">
         <div className="footer-column footer-logo-column">
        <img src="/Zemenay Main.png" alt="Zemenay Logo" />
      </div>
      {/* Column 1: Quick Links */}
      <div className="footer-column">
        <h4>Quick Links</h4>
        <nav>  
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>

      {/* Column 2: Legal */}
      <div className="footer-column">
        <h4>Legal</h4>
        <nav>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </nav>
      </div>

      {/* Column 3: Connect */}
      <div className="footer-column">
        <h4>Connect</h4>
        <nav>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:zemenaytechsolutions@gmail.com">Email</a>
        </nav>
      </div>

      {/* Column 4: Logo */}
     
    </footer>
  );
}
