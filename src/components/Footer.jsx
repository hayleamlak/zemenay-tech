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
    { label: "Privacy Policy", path: "privacy" },
    { label: "Terms of Service", path: "terms" },
  ];

  const handleNavigation = (path) => {
    onNavigate(path);
  };

  const showAlert = (label) => {
    if (label === "Privacy Policy") {
      alert(`Effective Date: 8/13/2025

1. Information We Collect
We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, phone number, and business information.

2. How We Use Your Information
We use the information we collect to:
- Provide, maintain, and improve our services
- Process transactions and send related information
- Send technical notices and support messages
- Respond to your comments and questions
- Comply with legal obligations

3. Information Sharing
We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required in Ethiopian law.

4. Data Security
We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

5. Your Rights
Under Ethiopian data protection laws, you have the right to access, update, or delete your personal information. Contact us to exercise these rights.

6. Contact Information
If you have questions about this Privacy Policy, contact us at zemenaytechsolutions@gmail.com

7. Changes to This Policy
We may update this Privacy Policy from time to time.`);
    } else if (label === "Terms of Service") {
      alert(`Effective Date: 8/13/2025

1. Acceptance of Terms
By accessing and using Zemenay Tech Solutions services, you accept and agree to be bound by the terms and provision of this agreement.

2. Services Description
Zemenay Tech Solutions provides technology consulting, software development, and digital solutions. We reserve the right to modify or discontinue services at any time.

3. User Responsibilities
You agree to:
- Provide accurate and complete information
- Use our services in compliance with Ethiopian laws
- Not engage in any unlawful or prohibited activities
- Respect intellectual property rights

4. Payment Terms
Payment terms will be specified in individual service agreements. All fees are in Ethiopian Birr (ETB) unless otherwise specified. Late payments may incur additional charges.

5. Intellectual Property
All content, features, and functionality of our services are owned by Zemenay Tech Solutions and are protected by Ethiopian and international copyright, trademark, and other intellectual property laws.

6. Limitation of Liability
To the maximum extent permitted by Ethiopian law, Zemenay Tech Solutions shall not be liable for any indirect, incidental, special, or consequential damages.

7. Governing Law
These terms shall be governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia.

8. Contact Information
For questions regarding these terms, contact us at zemenaytechsolutions@gmail.com`);
    }
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
          {legalLinks.map(({ label }) => (
            <button
              key={label}
              onClick={() => showAlert(label)}
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

      {/* Copyright */}
      <div className="footer-copyright">
        © 2025 Zemenay. All rights reserved.
      </div>
    </footer>
  );
}
