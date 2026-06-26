"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ── Constants ──────────────────────────────────────────────────────────────
const MAX_TILT = 10 * (Math.PI / 180);         // 10° in radians
const BOB_AMP  = 0.05;
const BOB_FREQ = (2 * Math.PI) / 1.5;          // 1.5 s cycle
const SWAY_AMP = 5 * (Math.PI / 180);          // ±5°
const LERP_K   = 0.06;                          // parallax smoothing

type MouseXY = { x: number; y: number };

// ── Avatar model ───────────────────────────────────────────────────────────
// Pixar-style cartoon bust: Indian male, dark flat-top hair, navy suit
function AvatarModel({
  mouseRef,
}: {
  mouseRef: React.MutableRefObject<MouseXY>;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const headRef  = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // Idle bob (y-axis)
    groupRef.current.position.y = Math.sin(t * BOB_FREQ) * BOB_AMP;

    // Gentle Y sway (±5°)
    groupRef.current.rotation.y = Math.sin(t * 0.6) * SWAY_AMP;

    // Mouse parallax on head group (max ±10°)
    const { x, y } = mouseRef.current;
    headRef.current.rotation.x +=
      (y * -MAX_TILT - headRef.current.rotation.x) * LERP_K;
    headRef.current.rotation.y +=
      (x *  MAX_TILT - headRef.current.rotation.y) * LERP_K;
  });

  // ── palette ──────────────────────────────────────────────────────────────
  const skin  = "#C68642";
  const dark  = "#A0663A";
  const hair  = "#1a1a1a";
  const navy  = "#1B2A4A";
  const white = "#FFFFFF";
  const pupil = "#0A0A0A";

  return (
    // Group hoisted so neck+suit sit below canvas bottom edge (waist-crop)
    <group ref={groupRef} position={[0, 0.3, 0]}>

      {/* ── HEAD GROUP — receives mouse parallax ────────────────────────── */}
      <group ref={headRef}>

        {/* HEAD */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.9, 64, 64]} />
          <meshToonMaterial color={skin} />
        </mesh>

        {/* HAIR CAP — flat short top */}
        <mesh position={[0, 0.65, 0]} scale={[1.03, 0.52, 1.03]}>
          <sphereGeometry args={[0.9, 48, 48]} />
          <meshToonMaterial color={hair} />
        </mesh>

        {/* HAIR FRINGE */}
        <mesh
          position={[0, 0.36, 0.56]}
          scale={[0.82, 0.25, 0.44]}
          rotation={[-0.2, 0, 0]}
        >
          <sphereGeometry args={[1, 24, 24]} />
          <meshToonMaterial color={hair} />
        </mesh>

        {/* HAIR SIDE L */}
        <mesh position={[-0.82, 0.33, 0.1]} scale={[0.27, 0.64, 0.66]}>
          <sphereGeometry args={[1, 20, 20]} />
          <meshToonMaterial color={hair} />
        </mesh>

        {/* HAIR SIDE R */}
        <mesh position={[0.82, 0.33, 0.1]} scale={[0.27, 0.64, 0.66]}>
          <sphereGeometry args={[1, 20, 20]} />
          <meshToonMaterial color={hair} />
        </mesh>

        {/* EAR L */}
        <mesh position={[-0.91, -0.02, 0]} scale={[0.2, 0.26, 0.16]}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshToonMaterial color={dark} />
        </mesh>

        {/* EAR R */}
        <mesh position={[0.91, -0.02, 0]} scale={[0.2, 0.26, 0.16]}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshToonMaterial color={dark} />
        </mesh>

        {/* EYEBROW L */}
        <mesh
          position={[-0.34, 0.24, 0.87]}
          scale={[0.28, 0.06, 0.07]}
          rotation={[0, 0, 0.14]}
        >
          <boxGeometry />
          <meshToonMaterial color={hair} />
        </mesh>

        {/* EYEBROW R */}
        <mesh
          position={[0.34, 0.24, 0.87]}
          scale={[0.28, 0.06, 0.07]}
          rotation={[0, 0, -0.14]}
        >
          <boxGeometry />
          <meshToonMaterial color={hair} />
        </mesh>

        {/* EYE WHITE L */}
        <mesh position={[-0.34, 0.04, 0.86]}>
          <sphereGeometry args={[0.21, 32, 32]} />
          <meshToonMaterial color={white} />
        </mesh>

        {/* EYE WHITE R */}
        <mesh position={[0.34, 0.04, 0.86]}>
          <sphereGeometry args={[0.21, 32, 32]} />
          <meshToonMaterial color={white} />
        </mesh>

        {/* PUPIL L */}
        <mesh position={[-0.34, 0.04, 1.01]}>
          <sphereGeometry args={[0.115, 20, 20]} />
          <meshToonMaterial color={pupil} />
        </mesh>

        {/* PUPIL R */}
        <mesh position={[0.34, 0.04, 1.01]}>
          <sphereGeometry args={[0.115, 20, 20]} />
          <meshToonMaterial color={pupil} />
        </mesh>

        {/* HIGHLIGHT L */}
        <mesh position={[-0.3, 0.08, 1.09]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshToonMaterial color={white} />
        </mesh>

        {/* HIGHLIGHT R */}
        <mesh position={[0.3, 0.08, 1.09]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshToonMaterial color={white} />
        </mesh>

        {/* NOSE BRIDGE */}
        <mesh position={[0, -0.1, 0.88]} scale={[0.11, 0.16, 0.11]}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshToonMaterial color={dark} />
        </mesh>

        {/* NOSE TIP */}
        <mesh position={[0, -0.22, 0.93]} scale={[0.16, 0.12, 0.14]}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshToonMaterial color={dark} />
        </mesh>

        {/* SMILE */}
        <mesh position={[0, -0.4, 0.84]} rotation={[0.22, 0, 0]}>
          <torusGeometry args={[0.24, 0.042, 10, 28, Math.PI]} />
          <meshToonMaterial color="#7B3820" />
        </mesh>

      </group>
      {/* ── end HEAD GROUP ─────────────────────────────────────────────── */}

      {/* NECK */}
      <mesh position={[0, -1.02, 0]}>
        <cylinderGeometry args={[0.27, 0.3, 0.44, 20]} />
        <meshToonMaterial color={skin} />
      </mesh>

      {/* SUIT BODY (partially cropped by canvas bottom edge) */}
      <mesh position={[0, -1.78, 0]}>
        <capsuleGeometry args={[0.66, 0.95, 16, 32]} />
        <meshToonMaterial color={navy} />
      </mesh>

      {/* WHITE SHIRT STRIP (visible between collar flaps) */}
      <mesh position={[0, -1.22, 0.42]} scale={[0.12, 0.35, 0.06]}>
        <boxGeometry />
        <meshToonMaterial color={white} />
      </mesh>

      {/* COLLAR FLAP L */}
      <mesh
        position={[-0.13, -1.06, 0.46]}
        rotation={[-0.1, -0.42, 0.18]}
        scale={[0.2, 0.34, 0.07]}
      >
        <boxGeometry />
        <meshToonMaterial color={white} />
      </mesh>

      {/* COLLAR FLAP R */}
      <mesh
        position={[0.13, -1.06, 0.46]}
        rotation={[-0.1, 0.42, -0.18]}
        scale={[0.2, 0.34, 0.07]}
      >
        <boxGeometry />
        <meshToonMaterial color={white} />
      </mesh>

    </group>
  );
}

// ── Scene wrapper ──────────────────────────────────────────────────────────
export default function AvatarScene() {
  const mouseRef = useRef<MouseXY>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x:  (e.clientX / window.innerWidth)  * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <Canvas
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      {/* Ambient fill */}
      <ambientLight intensity={0.6} />

      {/* Key light — warm white from top-left */}
      <directionalLight position={[-3, 5, 4]} intensity={1.4} color="#ffffff" />

      {/* Fill light — purple accent from right */}
      <directionalLight position={[3, 1, 3]} intensity={0.4} color="#8B5CF6" />

      {/* Rim light — pink from behind */}
      <pointLight position={[0, 2, -4]} intensity={0.7} color="#EC4899" />

      <AvatarModel mouseRef={mouseRef} />
    </Canvas>
  );
}
