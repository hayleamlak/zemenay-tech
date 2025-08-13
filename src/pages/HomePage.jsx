import React, { useEffect, useState } from "react";
import "../styles/homepage.css";
import { 
  BsBrush, 
  BsGraphUp, 
  BsSpeedometer2, 
  BsHeadset 
} from "react-icons/bs";
import client2Logo from "../assets/client2-logo.webp";
import client3Logo from "../assets/client3-logo.webp";
import client4Logo from "../assets/client4-logo.webp";
import client5Logo from "../assets/client5-logo.png";
import Biniyam_Masresha from "../assets/Biniyam_Masresha.jpg";
import Dagmawi_Bedilu from "../assets/Dagmawi_Bedilu.jpg";
import Kirubel_Samuel from "../assets/Kirubel_Samuel.jpg";

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
    performance: `Experience lightning-fast performance with our optimized codebase and cutting-edge technologies that deliver exceptional speed.`,
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
      onClick={() => onNavigate("/contact")} 
    >
      Let's Build Together
    </button>
  </div>
</section>


        {/* Why Us Section */}
        <section id="why-us" className="why-us animate fade-in-left">
          <div className="section-container">
            <h2>Why Zemenay</h2>
            <p>
              Empower your business with our cutting-edge solutions. We offer a
              range of services designed to elevate your digital presence and
              drive success.
            </p>

            <div className="cards-grid">
              <div className="card animate slide-in-up">
                <div className="icon-frame">
                  <BsBrush />
                </div>
                <h3>Clean & Minimalist</h3>
                <p>
                  Optimize your digital presence with our high-speed solutions,
                  ensuring your users experience seamless interactions.
                </p>
                <button
                  onClick={() =>
                    setModalContent({
                      title: "Clean & Minimalist",
                      content: modalTexts.clean,
                    })
                  }
                >
                  Get Started
                </button>
              </div>

              <div className="card animate slide-in-up delay-1">
                <div className="icon-frame">
                  <BsGraphUp />
                </div>
                <h3>Scalable</h3>
                <p>
                  Protect your data and users with our state-of-the-art security
                  measures, giving you peace of mind in the digital landscape.
                </p>
                <button
                  onClick={() =>
                    setModalContent({
                      title: "Scalable",
                      content: modalTexts.scalable,
                    })
                  }
                >
                  Get Started
                </button>
              </div>

              <div className="card animate slide-in-up delay-2">
                <div className="icon-frame">
                  <BsSpeedometer2 />
                </div>
                <h3>High Performance</h3>
                <p>
                  Experience lightning-fast performance with our optimized codebase
                  and cutting-edge technologies that deliver exceptional speed.
                </p>
                <button
                  onClick={() =>
                    setModalContent({
                      title: "High Performance",
                      content: modalTexts.performance,
                    })
                  }
                >
                  Get Started
                </button>
              </div>

              <div className="card animate slide-in-up delay-2">
                <div className="icon-frame">
                  <BsHeadset />
                </div>
                <h3>Reliable Support</h3>
                <p>
                  Grow your business without limits using our scalable
                  infrastructure, designed to evolve with your needs.
                </p>
                <button
                  onClick={() =>
                    setModalContent({
                      title: "Reliable Support",
                      content: modalTexts.support,
                    })
                  }
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="clients animate fade-in-right">
          <div className="section-container">
            <h2>Clients We've Had the Pleasure to Work With</h2>
            <p className="clients-subtitle">
              We're proud to have collaborated with these industry leaders,
              helping them achieve their digital transformation goals.
            </p>

            <div className="clients-marquee" aria-label="Client logos">
              <div className="marquee-content">
                {[
                  client5Logo, client4Logo, client3Logo, client2Logo, 
                  client5Logo, client4Logo, client3Logo, client2Logo,
                  client5Logo, client4Logo, client3Logo, client2Logo,
                  client5Logo, client4Logo, client3Logo, client2Logo
                ].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`Client logo ${i + 1}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials animate fade-in-up">
          <div className="section-container">
            <h2>Take Our Word For It</h2>
            <p className="testimonial-subtitle">
              Don't just take our word for it. Here's what industry professionals
              have to say about our services and solutions.
            </p>
            
            <div className="testimonials-grid">
              {[
                {
                  name: "Biniyam Masresha",
                  role: "Co-founder at Hiyaw Animations",
                  photo: Biniyam_Masresha,
                  text:
                    "Working with this team has been an absolute game-changer for our business. Their innovative solutions have streamlined our processes and boosted our productivity tenfold!",
                },
                {
                  name: "Dagmawi Bedilu",
                  role: "CSO at Efuye Gela",
                  photo: Dagmawi_Bedilu,
                  text:
                    "I can't recommend their services enough. The level of expertise and dedication they bring to each project is unparalleled. Our ROI has skyrocketed since partnering with them.",
                },
                {
                  name: "Kirubel Samuel",
                  role: "Co-founder at Chewataawaqi",
                  photo: Kirubel_Samuel,
                  text:
                    "The customer support is top-notch. They're always available to answer questions and provide guidance. It's refreshing to work with a company that truly cares about its clients' success.",
                },
              ].map(({ name, role, text, photo }, i) => (
                <div
                  key={i}
                  className={`testimonial-card animate ${
                    i % 2 === 0 ? "slide-in-left" : "slide-in-right"
                  } delay-${i}`}
                >
                  <div className="testimonial-photo">
                    <img src={photo} alt={name} />
                  </div>
                  <div className="testimonial-header">
                    <h4 className="testimonial-name">{name}</h4>
                    <p className="testimonial-role">{role}</p>
                  </div>
                  <p className="testimonial-text">"{text}"</p>
                </div>
              ))}
            </div>
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
