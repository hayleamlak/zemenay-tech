import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import ModelViewer from './components/ModelViewer';
import CameraController from './components/CameraController';
import ScrollController from './components/ScrollController';

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

// Map routes to camera targets and labels
const pageData = {
  '/': { target: [1000, 70, 120], label: 'Home' },
  '/about': { target: [500, -5, -100], label: 'About' },
  '/services': { target: [600, 150, -200], label: 'Services' },
  '/pricing': { target: [200, 300, -400], label: 'Pricing' },
  '/contact': { target: [0, 800, -100], label: 'Contact' },
};

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Update camera target & currentPage based on URL path
  const [cameraTarget, setCameraTarget] = useState(pageData[location.pathname]?.target || pageData['/'].target);
  const [currentPage, setCurrentPage] = useState(pageData[location.pathname]?.label || 'Home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const data = pageData[location.pathname] || pageData['/'];
    setCameraTarget(data.target);
    setCurrentPage(data.label);
  }, [location]);

  // Handler to navigate and update URL & camera target
  const handleNavigate = (path) => {
    navigate(path);
    // cameraTarget and currentPage update will happen via useEffect on location change
  };

  return (
    <>
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
        <ModelViewer scrollProgress={scrollProgress} scale={1} />
        <Environment background files="/venice_sunset_2k.hdr" />
        <OrbitControls target={[0, 0, 0]} />
        <CameraController target={cameraTarget} scrollProgress={scrollProgress} />
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
