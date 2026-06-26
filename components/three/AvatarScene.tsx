"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import AvatarModel from "./AvatarModel";

export default function AvatarScene() {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <PerspectiveCamera makeDefault position={[0, 0.5, 5.8]} fov={40} />

      {/* Ambient fill */}
      <ambientLight intensity={0.55} />

      {/* Key light (warm white from top-right) */}
      <directionalLight
        position={[4, 6, 5]}
        intensity={1.4}
        color="#ffffff"
        castShadow={false}
      />

      {/* Fill light (purple tint from left) */}
      <directionalLight
        position={[-4, 2, 3]}
        intensity={0.5}
        color="#8B5CF6"
      />

      {/* Rim light (pink from behind) */}
      <pointLight position={[0, 2, -4]} intensity={0.8} color="#EC4899" />

      {/* Bottom bounce */}
      <pointLight position={[0, -3, 2]} intensity={0.25} color="#ffffff" />

      <AvatarModel />
    </Canvas>
  );
}
