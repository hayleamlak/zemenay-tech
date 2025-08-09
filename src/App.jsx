import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

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

function App() {
  const [cameraTarget, setCameraTarget] = useState([1000, 70, 120]);
  const [currentPage, setCurrentPage] = useState('Home');
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <>
      <Navbar setCameraTarget={setCameraTarget} setCurrentPage={setCurrentPage} />

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

      {/* ScrollController handles scrolling and passes progress up */}
      <ScrollController onScrollProgress={setScrollProgress}>
        {currentPage === 'Home' && <HomePage />}
        {currentPage === 'About' && <AboutPage />}
        {currentPage === 'Services' && <ServicesPage />}
        {currentPage === 'Pricing' && <PricingPage />}
        {currentPage === 'Contact' && <ContactPage />}
         <Footer />
      </ScrollController>

     
    </>
  );
}

export default App;
