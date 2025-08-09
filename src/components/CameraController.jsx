// CameraController.jsx
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';

export default function CameraController({ target, scrollProgress = 0 }) {
  const { camera } = useThree();
  const targetRef = useRef(new Vector3(...target));
  const basePosition = new Vector3(...target);

  // This vector controls how much the camera moves down/back on scroll.
  const scrollOffset = new Vector3(0, -500, -500); // Adjust as needed

  useEffect(() => {
    targetRef.current = new Vector3(...target);
  }, [target]);

  useFrame(() => {
    // Calculate scroll-adjusted target position
    const scrollAdjustedPosition = basePosition.clone().add(scrollOffset.clone().multiplyScalar(scrollProgress));
    camera.position.lerp(scrollAdjustedPosition, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
