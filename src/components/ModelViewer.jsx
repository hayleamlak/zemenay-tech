import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

export default function ModelViewer({ scrollProgress = 0, onModelLoaded, ...props }) {
  const { scene } = useGLTF('/myModel.glb');
  const ref = useRef();

  // Notify when model is loaded
  useEffect(() => {
    if (scene && onModelLoaded) {
      // Small delay to ensure everything is properly initialized
      const timer = setTimeout(() => {
        onModelLoaded();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [scene, onModelLoaded]);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = -scrollProgress * 10;
      ref.current.rotation.y += 0.001;
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}
