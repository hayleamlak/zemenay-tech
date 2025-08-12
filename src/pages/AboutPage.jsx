import React, { useEffect, useState } from "react";
import "../styles/aboutpage.css";
import communityImg from "../assets/community.webp";
import freadamImg from "../assets/Biniyam_Masresha.jpg";
import tehetnaImg from "../assets/Dagmawi_Bedilu.jpg";
import michaelImg from "../assets/Kirubel_Samuel.jpg";

export default function AboutPage() {
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openModal = (title, content) => {
    setModalContent({ title, content });
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = "auto";
  };

  // Content data for Read More modals
  const readMoreData = {
    mission: {
      title: "Our Mission",
      content: `At Zemenay, we believe technology should empower people and make
      their lives easier. Our mission is simple: to create solutions that
      prioritize people at every step, delivering innovative digital
      experiences that transform businesses.`,
    },
    who: {
      title: "Who We Are",
      content: `To empower businesses with high-performing, beautifully crafted
      web solutions that are simple, scalable, and effective, driving
      success across industries.`,
    },
    values: {
      title: "Our Values",
      content: `We prioritize Simplicity, Quality, and Reliability in all our
      projects. These core values guide our approach to crafting elegant
      and sustainable digital solutions.`,
    },
    vision: {
      title: "Our Vision",
      content: `To become a trusted digital partner for forward-thinking companies by
      delivering elegant, efficient, and innovative web solutions that
      propel businesses forward.`,
    },
  };

  return (
    <>
      <nav className="sticky-nav">
        <ul>
          <li>
            <button onClick={() => scrollToSection("about-hero")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("mission")}>Mission</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("values")}>Values</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("team")}>Team</button>
          </li>
        </ul>
      </nav>

      <div className="about-container">
        {/* Hero */}
        <section
          id="about-hero"
          className="about-hero animate-on-scroll fade-in-down"
        >
          <h1>About Our Journey</h1>
          <p>
            Discover the story behind our passion for innovation and commitment
            to excellence. We're on a mission to transform the digital
            landscape, one project at a time.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection("mission")}>Our Mission</button>
            <button onClick={() => scrollToSection("team")}>Meet the Team</button>
          </div>
        </section>

        {/* Mission */}
        <section
          id="mission"
          className="about-mission animate-on-scroll fade-in-left glass-card"
        >
          <div className="mission-content">
            <h2>We Put People First</h2>
            <p>
              At Zemenay, we believe technology should empower people and make
              their lives easier. Our mission is simple: to create solutions
              that prioritize people at every step, delivering innovative
              digital experiences that transform businesses.
            </p>
            <button
              className="read-more-btn"
              onClick={() =>
                openModal(readMoreData.mission.title, readMoreData.mission.content)
              }
            >
              Read More
            </button>
          </div>
          <div className="mission-image blob-frame">
            <img src={communityImg} alt="Mission" />
          </div>
        </section>

        {/* Values */}
        <section
          id="values"
          className="about-values animate-on-scroll fade-in-up"
        >
          <h2>Zemenay Team</h2>
          <div className="values-grid">
            {[
              {
                key: "who",
                title: "Who We Are",
                short:
                  "To empower businesses with high-performing, beautifully crafted web solutions that are simple, scalable...",
              },
              {
                key: "values",
                title: "Our Values",
                short: "Simplicity, Quality, Reliability...",
              },
              {
                key: "vision",
                title: "Our Vision",
                short:
                  "To become a trusted digital partner for forward-thinking companies by delivering elegant, efficient...",
              },
            ].map(({ key, title, short }) => (
              <div
                key={key}
                className="value-card glass-card"
              >
                <h3>{title}</h3>
                <p>{short}</p>
                <button
                  className="read-more-btn"
                  onClick={() =>
                    openModal(readMoreData[key].title, readMoreData[key].content)
                  }
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section
          id="team"
          className="about-team animate-on-scroll fade-in-up"
        >
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {[ 
              {
                name: "Freadam Abebe",
                role: "Co-Founder & Product Manager",
                desc: "5+ years in tech leadership",
                tags: ["Tech Leader", "Product Visionary"],
                image: freadamImg,
              },
              {
                name: "Tehetna Askal",
                role: "Co-Founder & Project Manager",
                desc: "Expert in agile methodologies",
                tags: ["Agile Expert", "Project Strategist"],
                image: tehetnaImg,
              },
              {
                name: "Michael Engida",
                role: "Co-Founder & Business Development",
                desc: "Driving business growth",
                tags: ["Business Strategist", "Growth Hacker"],
                image: michaelImg,
              },
            ].map(({ name, role, desc, tags, image }) => (
              <div key={name} className="team-card glass-card">
                <div className="blob-frame team-img-frame">
                  <img src={image} alt={name} />
                </div>
                <h3>{name}</h3>
                <p className="role">{role}</p>
                <p className="desc">{desc}</p>
                <ul>
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.content}</p>
          </div>
        </div>
      )}
    </>
  );
}
