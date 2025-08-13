import React, { useState, useEffect } from 'react';
import '../styles/WelcomeScreen.css';

export default function WelcomeScreen({ isModelLoaded, onWelcomeComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Auto-fade out after 2 seconds regardless of model loading status
    const autoFadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      // Start fade out animation
      setTimeout(() => {
        setIsVisible(false);
        onWelcomeComplete();
      }, 1000); // 1 second fade out animation
    }, 2000); // Show for 2 seconds total

    // Cleanup timer if component unmounts
    return () => clearTimeout(autoFadeTimer);
  }, [onWelcomeComplete]);

  if (!isVisible) return null;

  return (
    <div className={`welcome-screen ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
      <div className="welcome-content">
        <div className="welcome-logo">
          <img src="/src/assets/Zemenay Main.png" alt="Zemenay Logo" />
        </div>
        <h1 className="welcome-title">Welcome to Zemenay Community</h1>
        <p className="welcome-subtitle">
          Empowering businesses with innovative digital solutions. 
          We build clean, scalable, and elegant experiences that transform the way you connect with your audience.
        </p>
        <div className="loading-indicator">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="loading-text">Loading your experience...</p>
        </div>
      </div>
    </div>
  );
}
