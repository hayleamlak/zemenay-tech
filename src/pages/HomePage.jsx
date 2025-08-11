import React, { useEffect, useState } from "react";
import "../styles/homepage.css";

export default function HomePage() {
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          } else {
            entry.target.classList.remove("animated");
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const modalTexts = {
    clean: `Optimize your digital presence with our high-speed solutions, ensuring your users experience seamless interactions.`,
    scalable: `Protect your data and users with our state-of-the-art security measures, giving you peace of mind in the digital landscape.`,
    support: `Grow your business without limits using our scalable infrastructure, designed to evolve with your needs.`,
  };

  return (
    <>
      <div className="home">
        {/* Hero Section */}
        <section id="hero" className="hero animate fade-in-down">
          <div className="hero-content">
            <h1>Revolutionize Your Digital Experience</h1>
            <p>
              At Zemenay, we build clean, scalable, and elegant digital
              experiences for forward-thinking businesses.
            </p>
            <button
              className="btn-primary"
              onClick={() => alert("Let's build together!")}
            >
              Let's Build Together
            </button>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="why-us animate fade-in-left">
          <h2>Why Zemenay</h2>
          <p>
            Empower your business with our cutting-edge solutions. We offer a
            range of services designed to elevate your digital presence and
            drive success.
          </p>

          <div className="cards">
            <div className="card animate slide-in-up">
              <div className="image-frame">
                <img src="/image.png" alt="Clean Interfaces" />
              </div>
              <h3>Clean & Minimalist Interfaces</h3>
              <p>
                Optimize your digital presence with our high-speed solutions,
                ensuring your users experience seamless interactions.
              </p>
              <button
                onClick={() =>
                  setModalContent({
                    title: "Clean & Minimalist Interfaces",
                    content: modalTexts.clean,
                  })
                }
              >
                Get Started
              </button>
            </div>

            <div className="card animate slide-in-up delay-1">
              <div className="image-frame">
                <img src="/image.png" alt="Scalable Code" />
              </div>
              <h3>Scalable, High-Performance Code</h3>
              <p>
                Protect your data and users with our state-of-the-art security
                measures, giving you peace of mind in the digital landscape.
              </p>
              <button
                onClick={() =>
                  setModalContent({
                    title: "Scalable, High-Performance Code",
                    content: modalTexts.scalable,
                  })
                }
              >
                Get Started
              </button>
            </div>

            <div className="card animate slide-in-up delay-2">
              <div className="image-frame">
                <img src="/image.png" alt="Reliable Support" />
              </div>
              <h3>Reliable Support & Maintenance</h3>
              <p>
                Grow your business without limits using our scalable
                infrastructure, designed to evolve with your needs.
              </p>
              <button
                onClick={() =>
                  setModalContent({
                    title: "Reliable Support & Maintenance",
                    content: modalTexts.support,
                  })
                }
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="clients animate fade-in-right">
          <h2>Clients We've Had the Pleasure to Work With</h2>
          <p className="clients-subtitle">
            We're proud to have collaborated with these industry leaders,
            helping them achieve their digital transformation goals.
          </p>

          <div className="clients-marquee" aria-label="Client logos">
            <div className="marquee-content">
              {[...Array(24)].map((_, i) => {
                const logos = [
                  "/client5-logo.png",
                  "/client4-logo.webp",
                  "/client3-logo.webp",
                  "/client2-logo.webp",
                ];
                const logo = logos[i % logos.length];
                return (
                  <img
                    key={i}
                    src={logo}
                    alt={`Client logo ${i % logos.length + 1}`}
                    loading="lazy"
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials animate fade-in-up">
          <h2>What Our Clients Say</h2>
          <p className="testimonial-subtitle">
            Don't just take our word for it. Here's what industry professionals
            have to say about our services and solutions.
          </p>
          <div className="testimonials-grid">
            {[
              {
                name: "Biniyam Masresha",
                role: "Co-founder at Hiyaw Animations",
                text:
                  "Working with this team has been an absolute game-changer for our business. Their innovative solutions have streamlined our processes and boosted our productivity tenfold!",
              },
              {
                name: "Dagmawi Bedilu",
                role: "CSO at Efuye Gela",
                text:
                  "I can't recommend their services enough. The level of expertise and dedication they bring to each project is unparalleled. Our ROI has skyrocketed since partnering with them.",
              },
              {
                name: "Kirubel Samuel",
                role: "Co-founder at Chewataawaqi",
                text:
                  "The customer support is top-notch. They're always available to answer questions and provide guidance. It's refreshing to work with a company that truly cares about its clients' success.",
              },
            ].map(({ name, role, text }, i) => (
              <div
                key={i}
                className={`testimonial-card animate ${
                  i % 2 === 0 ? "slide-in-left" : "slide-in-right"
                } delay-${i}`}
              >
                <div className="image-frame profile-frame">
                  <img src="/image.png" alt={name} />
                </div>
                <p className="testimonial-text">"{text}"</p>
                <p className="client-name">{name}</p>
                <p className="client-role">{role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {modalContent && (
        <div
          className="modal-overlay"
          onClick={() => setModalContent(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{modalContent.title}</h3>
            <p>{modalContent.content}</p>
            <button className="btn-close" onClick={() => setModalContent(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
