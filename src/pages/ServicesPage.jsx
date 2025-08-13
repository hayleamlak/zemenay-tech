import React, { useEffect, useState } from "react";
import { 
  FaCode,        // Full Stack Dev icon
  FaWordpress,   // WordPress icon
  FaSearch,      // SEO Management icon
  FaTools        // Website Maintenance icon
} from "react-icons/fa";
import "../styles/ServicesPage.css";

import Gallery from '../components/Gallery';

export default function ServicesPage() {
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Services data with icon component and detailed content
  const services = [
    {
      title: "Full stack Website Development",
      shortDesc:
        "Custom-built websites from front to back—optimized for performance, scalability, and user experience.",
      fullDesc:
        "We create custom full-stack websites tailored to your business needs. Our solutions prioritize fast load times, mobile responsiveness, and scalable architecture that grows with your company.",
      icon: <FaCode size={80} color="#00bfff" />,
      features: [
        "HTML, CSS, JavaScript",
        "React, Next.js",
        "API Development",
        "Database Architecture",
      ],
    },
    {
      title: "WordPress Development with Elementor Pro",
      shortDesc:
        "Beautiful, responsive websites powered by WordPress and designed with the flexibility of Elementor Pro.",
      fullDesc:
        "Our WordPress sites utilize Elementor Pro for unmatched design flexibility and responsiveness. We build sites that are easy to update and maintain, perfect for businesses seeking an elegant CMS-driven solution.",
      icon: <FaWordpress size={80} color="#00bfff" />,
      features: [
        "Drag-and-drop design",
        "Custom templates",
        "Plugin integration",
        "Mobile optimization",
      ],
    },
    {
      title: "SEO Management",
      shortDesc:
        "Improve your visibility in search engines with tailored SEO strategies that drive traffic and boost rankings.",
      fullDesc:
        "Boost your online presence with our comprehensive SEO management services. We analyze, optimize, and monitor your website to improve organic search rankings and attract quality traffic.",
      icon: <FaSearch size={80} color="#00bfff" />,
      features: [
        "Meta tag optimization",
        "Performance enhancements",
        "Keyword tracking",
        "Backlink strategies",
        "Monthly SEO reports",
      ],
    },
    {
      title: "Website Maintenance",
      shortDesc:
        "Keep your site secure, updated, and running smoothly with our ongoing support and maintenance plans.",
      fullDesc:
        "Our maintenance plans ensure your website stays secure, updated, and performs optimally. From regular backups to updates and troubleshooting, we keep your site healthy and reliable.",
      icon: <FaTools size={80} color="#00bfff" />,
      features: [
        "Core and plugin updates",
        "Uptime monitoring",
        "Malware scans",
        "Site backups",
        "Speed optimization",
        "Priority support",
      ],
    },
  ];

  const openModal = (service) => {
    setModalContent(service);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="nav-spacer"></div>

      <div className="services-container">
        <section className="services-hero animate-on-scroll fade-in-down">
          <h1>Our Expertise, Your Solutions.</h1>
          <p>
            Innovative software, web development, AI, and more to help your business thrive.
          </p>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('services-cards').scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            Explore Our Services
          </button>
        </section>

        <section className="services-description animate-on-scroll fade-in-left">
          <h2>Comprehensive Technology Solutions</h2>
          <p>
            We specialize in delivering transformative solutions that integrate seamlessly into your business processes. From web development and software engineering to AI-driven strategies, we're here to help you scale.
          </p>
        </section>

        <section id="services-cards" className="services-cards animate-on-scroll fade-in-up">
          <h2>Our Services</h2>
          <div className="cards-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card glass-card">
                {/* Render the icon instead of an image */}
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <button className="btn-secondary" onClick={() => openModal(service)}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 3D Gallery and Description Section */}
        <section className="gallery-section animate-on-scroll fade-in-up">
          <h2>Our Work Showcase</h2>
          <div className="gallery-container">
            <div className="gallery-3d">
              <Gallery />
            </div>
            <div className="gallery-description">
              <div className="description-content">
                <h3>Innovative Solutions, Real Results</h3>
                <p>
                  Explore our portfolio of cutting-edge projects that demonstrate our expertise in creating scalable, 
                  user-friendly applications. From educational platforms to gaming services and e-commerce solutions, 
                  we deliver technology that drives business growth.
                </p>
                <div className="description-features">
                  <div className="feature-item">
                    <h4>Education & Training</h4>
                    <p>Free developer training programs empowering the next generation of tech professionals.</p>
                  </div>
                  <div className="feature-item">
                    <h4>Gaming Services</h4>
                    <p>Next.js powered platform connecting companies with professional gaming entertainment.</p>
                  </div>
                  <div className="feature-item">
                    <h4>E-commerce Solutions</h4>
                    <p>WordPress and Elementor Pro websites with custom design and seamless user experience.</p>
                  </div>
                </div>
                <button className="btn-primary" onClick={() => document.getElementById('services-cards').scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.fullDesc}</p>
            <h3>Features & Technologies</h3>
            <ul>
              {modalContent.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="btn-primary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
