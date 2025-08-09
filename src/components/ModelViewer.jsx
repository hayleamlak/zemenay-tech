import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react'; // <-- from react, not from fiber

export default function ModelViewer({ scrollProgress = 0, ...props }) {
  const { scene } = useGLTF('/myModel.glb');
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = -scrollProgress * 10;
      ref.current.rotation.y += 0.001;
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}
