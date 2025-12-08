import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

function Particles(props: any) {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate random particles
  const count = 5000;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 2;
    meshRef.current.rotation.y = Math.sin(t / 4) / 2;
    meshRef.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial 
        color="#22d3ee" 
        wireframe 
        emissive="#22d3ee"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export function RaveScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#d946ef" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />
        <Particles />
        <FloatingShape />
      </Canvas>
    </div>
  );
}
