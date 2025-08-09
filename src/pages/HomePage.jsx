// pages/HomePage.jsx
import React from 'react';
import '../styles/homepage.css';

export default function HomePage() {
  return (
    <div className="homepage-container" style={{ background: 'transparent', color: '#fff' }}>
      <section className="hero-section">
        <h1>Revolutionize Your Digital Experience</h1>
        <p>At Zemenay, we build clean, scalable, and elegant digital experiences for forward-thinking businesses.</p>
        <button className="primary-btn">Let's Build Together</button>
      </section>

      <section className="why-zemenay">
        <h2>Why Zemenay</h2>
        <p>Empower your business with our cutting-edge solutions. We offer a range of services designed to elevate your digital presence and drive success.</p>
        <div className="services-cards">
          <div className="card">
            <h3>Clean & Minimalist Interfaces</h3>
            <p>Optimize your digital presence with our high-speed solutions, ensuring your users experience seamless interactions.</p>
            <button>Get Started</button>
          </div>
          <div className="card">
            <h3>Scalable, High-Performance Code</h3>
            <p>Protect your data and users with our state-of-the-art security measures, giving you peace of mind in the digital landscape.</p>
            <button>Get Started</button>
          </div>
          <div className="card">
            <h3>Reliable Support & Maintenance</h3>
            <p>Grow your business without limits using our scalable infrastructure, designed to evolve with your needs.</p>
            <button>Get Started</button>
          </div>
        </div>
      </section>

      <section className="clients">
        <h2>Clients We've Had the Pleasure to Work With</h2>
        {/* Render client logos grid here */}
        <div className="client-logos">
          {/* Map client logos */}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>
          <p>"Working with this team has been an absolute game-changer for our business. Their innovative solutions have streamlined our processes and boosted our productivity tenfold!"</p>
          <footer>Biniyam Masresha, Co-founder at Hiyaw Animations</footer>
        </blockquote>
        <blockquote>
          <p>"I can't recommend their services enough. The level of expertise and dedication they bring to each project is unparalleled. Our ROI has skyrocketed since partnering with them."</p>
          <footer>Dagmawi Bedilu, CSO at Efuye Gela</footer>
        </blockquote>
        <blockquote>
          <p>"The customer support is top-notch. They're always available to answer questions and provide guidance. It's refreshing to work with a company that truly cares about its clients' success."</p>
          <footer>Kirubel Samuel, Co-founder at Chewataawaqi</footer>
        </blockquote>
      </section>
    </div>
  );
}
