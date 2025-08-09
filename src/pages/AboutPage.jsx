import React, { useEffect, useRef } from 'react';
import '../styles/aboutpage.css';

export default function AboutPage() {
  const circleRef = useRef();

  useEffect(() => {
    const circle = circleRef.current;
    const move = (e) => {
      if (circle) {
        circle.style.left = `${e.clientX}px`;
        circle.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const wrapCharacters = (text) =>
    text.split('').map((char, i) => (
      <span
        key={i}
        className="about-char"
        style={{ animationDelay: `${i * 0.04}s` }}
      >
        {char}
      </span>
    ));

  return (
    <div className="about-container">
      <div className="cursor-circle" ref={circleRef}></div>

     

      {/* Text Section */}
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          {wrapCharacters("I'm a creative full-stack developer with a passion for 3D, interactivity, and immersive web experiences. I turn ideas into reality with clean code and playful design.")}
        </p>
      </div>
    </div>
  );
}
