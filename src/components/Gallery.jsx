import React, { useState, useEffect, useRef } from 'react';
import { FaDatabase, FaReact, FaWordpress, FaMobileAlt } from 'react-icons/fa';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import '../styles/Gallery.css';

const images = [
  {
    src: image1,
    title: 'Education & Training',
    description: (
      <>
        <p><strong>Free Developer Training</strong><br/>
          Empowering the next generation of developers through comprehensive, hands-on training programs. We offer free courses in frontend, backend, and mobile development to students passionate about technology.
        </p>
        <ul>
          <li><FaReact /> Frontend Development</li>
          <li><FaDatabase /> Backend Development</li>
          <li><FaMobileAlt /> Mobile Development</li>
          <li>100% Free for Students</li>
        </ul>
        <p><em>Read Case Study - Case study coming soon</em></p>
      </>
    ),
  },
  {
    src: image2,
    title: 'Full-Stack Development - Chewata Awaqi',
    description: (
      <>
        <p>A cutting-edge gaming service platform that connects companies with professional gaming services for events and corporate entertainment. Built with Next.js for optimal performance and scalability.</p>
        <ul>
          <li><FaReact /> Next.js & React</li>
          <li><FaDatabase /> API Development</li>
          <li><FaDatabase /> Database Architecture</li>
          <li>Gaming Integration</li>
        </ul>
        <p><em>Read Case Study - Case study coming soon</em></p>
      </>
    ),
  },
  {
    src: image3,
    title: 'WordPress Development - Berhanu Integrated Farm',
    description: (
      <>
        <p>A comprehensive e-commerce platform for a premium spice farming business. Built with WordPress and Elementor Pro, featuring custom product catalogs, online ordering system, and farm-to-table storytelling.</p>
        <ul>
          <li><FaWordpress /> WordPress & Elementor Pro</li>
          <li>Custom Design & Branding</li>
          <li>E-commerce Integration</li>
        </ul>
        <p><em>Read Case Study - Case study coming soon</em></p>
      </>
    ),
  },
];

const radius = 280;
const frontZPush = 60;

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const descRef = useRef(null);

  const itemCount = images.length;

  useEffect(() => {
    const anglePerItem = (2 * Math.PI) / itemCount;
    setRotation(currentIndex * anglePerItem);
  }, [currentIndex, itemCount]);

  const goPrev = () => setCurrentIndex(i => (i - 1 + itemCount) % itemCount);
  const goNext = () => setCurrentIndex(i => (i + 1) % itemCount);
  const goToIndex = i => setCurrentIndex(i);

  return (
    <div
      style={{
        maxWidth: 960,
        margin: '40px auto',
        userSelect: 'none',
        perspective: '1000px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 20,
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/* Left button */}
        <button
          onClick={goPrev}
          style={{ ...sideButtonStyle, marginRight: 5 }}
          aria-label="Show previous image"
          type="button"
        >
          ‹
        </button>

        {/* Carousel */}
        <div
          style={{
            flex: '0 0 45%',
            position: 'relative',
            height: 320,
            minWidth: 280,
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${radius}px)`,
            transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {images.map((image, i) => {
            const relativeIndex = (i - currentIndex + itemCount) % itemCount;
            const angle = (2 * Math.PI * relativeIndex) / itemCount;
            const x = radius * Math.sin(angle);
            const z = radius * Math.cos(angle);

            const scale = relativeIndex === 0 ? 1 : 0.6;
            const opacity = relativeIndex === 0 ? 1 : 0.5;
            const rotationY = (angle * 180) / Math.PI;
            const zPos = relativeIndex === 0 ? z + frontZPush : z;

            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: 280,
                  height: 220,
                  left: '50%',
                  top: 20,
                  marginLeft: -140,
                  transform: `translateX(${x}px) translateZ(${zPos}px) rotateX(${rotationY}deg) scale(${scale})`,
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 10,
                  boxShadow:
                    relativeIndex === 0
                      ? '0 15px 30px rgba(0,0,0,0.35)'
                      : '0 5px 15px rgba(0,0,0,0.15)',
                  border: relativeIndex === 0 ? '4px solid #007bff' : '2px solid #ccc',
                  backgroundColor: '#fff',
                  cursor: 'pointer',
                  opacity,
                  overflow: 'hidden',
                  userSelect: 'none',
                  transformOrigin: '50% 50%',
                }}
                onClick={() => goToIndex(i)}
                aria-label={`Show ${image.title}`}
                draggable={false}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                  draggable={false}
                />
                <div
                  style={{
                    padding: '6px 10px',
                    fontWeight: relativeIndex === 0 ? '700' : '600',
                    fontSize: relativeIndex === 0 ? 16 : 14,
                    color: '#222',
                    textAlign: 'center',
                    height: 40,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    userSelect: 'none',
                  }}
                >
                  {image.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right button */}
        <button
          onClick={goNext}
          style={{ ...sideButtonStyle, marginLeft: 5 }}
          aria-label="Show next image"
          type="button"
        >
          ›
        </button>

        {/* Description */}
        <div
          ref={descRef}
          className="description-box flip-animation"
          key={currentIndex} // triggers re-render for animation
          aria-live="polite"
        >
          {images[currentIndex].description}
        </div>
      </div>
    </div>
  );
}

const sideButtonStyle = {
  padding: '15px 20px',
  fontSize: 28,
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: 'white',
  fontWeight: 'bold',
  userSelect: 'none',
  boxShadow: '0 4px 8px rgba(0,123,255,0.6)',
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
