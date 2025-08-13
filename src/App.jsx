import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import ModelViewer from './components/ModelViewer';
import CameraController from './components/CameraController';
import ScrollController from './components/ScrollController';
import WelcomeScreen from './components/WelcomeScreen';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

import './styles/Footer.css';
import './styles/main.css';
import './styles/pages.css';
import './styles/navbar.css';
import './styles/WelcomeScreen.css';

// Map routes to camera targets and labels
const pageData = {
  '/': { target: [1000, 70, 120], label: 'Home' },
  '/about': { target: [1000, 70, 120], label: 'About' },
  '/services': { target: [600, 150, -200], label: 'Services' },
  '/pricing': { target: [200, 300, -400], label: 'Pricing' },
  '/contact': { target: [0, 800, -100], label: 'Contact' },
};

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Update camera target & currentPage based on URL path
  const [cameraTarget, setCameraTarget] = useState([3000, 70, 120]); // Start faruu away
  const [currentPage, setCurrentPage] = useState(pageData[location.pathname]?.label || 'Home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const data = pageData[location.pathname] || pageData['/'];
    setCurrentPage(data.label);
    
    // Only update camera target if not in welcome transition
    if (!showWelcome && !isTransitioning) {
      setCameraTarget(data.target);
    }
    
    // Smooth scroll to top when route changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location, showWelcome, isTransitioning]);

  // Handler to navigate and update URL & camera target
  const handleNavigate = (path) => {
    navigate(path);
    // cameraTarget and currentPage update will happen via useEffect on location change
  };

  // Handle model loading completion
  const handleModelLoaded = () => {
    setIsModelLoaded(true);
  };

  // Handle welcome screen completion and start camera transition
  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setIsTransitioning(true);
    
    // Start smooth camera transition to home position
    setTimeout(() => {
      setCameraTarget([1000, 70, 120]); // Home page position
      
      // Mark transition as complete after animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 2000); // Match camera transition duration
    }, 200); // Small delay to ensure welcome screen is hidden
  };

  return (
    <>
      {/* Welcome Screen */}
      {showWelcome && (
        <WelcomeScreen 
          isModelLoaded={isModelLoaded} 
          onWelcomeComplete={handleWelcomeComplete}
        />
      )}

      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      <Canvas
        camera={{ position: cameraTarget, fov: 60 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[300, 400, 200]} intensity={1} />
        <ModelViewer 
          scrollProgress={scrollProgress} 
          scale={1} 
          onModelLoaded={handleModelLoaded}
        />
        <Environment background files="/venice_sunset_2k.hdr" />
        <OrbitControls target={[0, 0, 0]} />
        <CameraController 
          target={cameraTarget} 
          scrollProgress={scrollProgress}
          isTransitioning={isTransitioning}
        />
      </Canvas>

      <ScrollController onScrollProgress={setScrollProgress}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer onNavigate={handleNavigate} currentPage={currentPage} />
      </ScrollController>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
