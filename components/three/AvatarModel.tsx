"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Cartoon Pixar-style avatar of Akshay — warm Indian skin tone, dark hair, navy shirt
export default function AvatarModel() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // Gentle idle bob
    groupRef.current.position.y = Math.sin(t * 1.4) * 0.13;
    // Subtle sway
    groupRef.current.rotation.y = Math.sin(t * 0.6) * 0.07;
  });

  const skin = "#C8784A";
  const darkSkin = "#A85E30";
  const hair = "#1A0800";
  const shirt = "#1E1B4B";
  const white = "#FFFFFF";
  const pupil = "#0A0A0A";
  const navy = "#312E81";

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>

      {/* ── HEAD ── */}
      <mesh position={[0, 1.72, 0]}>
        <sphereGeometry args={[1.05, 64, 64]} />
        <meshToonMaterial color={skin} />
      </mesh>

      {/* ── HAIR CAP ── */}
      <mesh position={[0, 2.52, 0]} scale={[1.06, 0.55, 1.06]}>
        <sphereGeometry args={[1.05, 48, 48]} />
        <meshToonMaterial color={hair} />
      </mesh>

      {/* ── HAIR FRINGE (slight forward tilt) ── */}
      <mesh position={[0, 2.15, 0.65]} scale={[0.9, 0.28, 0.5]} rotation={[-0.2, 0, 0]}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshToonMaterial color={hair} />
      </mesh>

      {/* ── HAIR SIDE L ── */}
      <mesh position={[-0.88, 2.1, 0.12]} scale={[0.3, 0.72, 0.75]}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshToonMaterial color={hair} />
      </mesh>

      {/* ── HAIR SIDE R ── */}
      <mesh position={[0.88, 2.1, 0.12]} scale={[0.3, 0.72, 0.75]}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshToonMaterial color={hair} />
      </mesh>

      {/* ── EAR L ── */}
      <mesh position={[-1.04, 1.68, 0]} scale={[0.22, 0.28, 0.18]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshToonMaterial color={darkSkin} />
      </mesh>

      {/* ── EAR R ── */}
      <mesh position={[1.04, 1.68, 0]} scale={[0.22, 0.28, 0.18]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshToonMaterial color={darkSkin} />
      </mesh>

      {/* ── EYEBROW L ── */}
      <mesh position={[-0.38, 1.98, 0.96]} scale={[0.32, 0.07, 0.08]} rotation={[0, 0, 0.12]}>
        <boxGeometry />
        <meshToonMaterial color={hair} />
      </mesh>

      {/* ── EYEBROW R ── */}
      <mesh position={[0.38, 1.98, 0.96]} scale={[0.32, 0.07, 0.08]} rotation={[0, 0, -0.12]}>
        <boxGeometry />
        <meshToonMaterial color={hair} />
      </mesh>

      {/* ── EYE WHITE L ── */}
      <mesh position={[-0.38, 1.76, 0.95]}>
        <sphereGeometry args={[0.24, 32, 32]} />
        <meshToonMaterial color={white} />
      </mesh>

      {/* ── EYE WHITE R ── */}
      <mesh position={[0.38, 1.76, 0.95]}>
        <sphereGeometry args={[0.24, 32, 32]} />
        <meshToonMaterial color={white} />
      </mesh>

      {/* ── PUPIL L ── */}
      <mesh position={[-0.38, 1.76, 1.14]}>
        <sphereGeometry args={[0.13, 20, 20]} />
        <meshToonMaterial color={pupil} />
      </mesh>

      {/* ── PUPIL R ── */}
      <mesh position={[0.38, 1.76, 1.14]}>
        <sphereGeometry args={[0.13, 20, 20]} />
        <meshToonMaterial color={pupil} />
      </mesh>

      {/* ── EYE HIGHLIGHT L ── */}
      <mesh position={[-0.33, 1.8, 1.23]}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshToonMaterial color={white} />
      </mesh>

      {/* ── EYE HIGHLIGHT R ── */}
      <mesh position={[0.33, 1.8, 1.23]}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshToonMaterial color={white} />
      </mesh>

      {/* ── NOSE BRIDGE ── */}
      <mesh position={[0, 1.6, 0.97]} scale={[0.12, 0.18, 0.12]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshToonMaterial color={darkSkin} />
      </mesh>

      {/* ── NOSE TIP ── */}
      <mesh position={[0, 1.48, 1.03]} scale={[0.18, 0.13, 0.15]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshToonMaterial color={darkSkin} />
      </mesh>

      {/* ── SMILE (torus arc) ── */}
      <mesh position={[0, 1.27, 0.94]} rotation={[0.22, 0, 0]}>
        <torusGeometry args={[0.28, 0.048, 10, 28, Math.PI]} />
        <meshToonMaterial color="#7B3820" />
      </mesh>

      {/* ── NECK ── */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.3, 0.33, 0.48, 20]} />
        <meshToonMaterial color={skin} />
      </mesh>

      {/* ── BODY / SHIRT ── */}
      <mesh position={[0, -0.12, 0]}>
        <capsuleGeometry args={[0.72, 1.15, 16, 32]} />
        <meshToonMaterial color={shirt} />
      </mesh>

      {/* ── COLLAR LEFT ── */}
      <mesh position={[-0.14, 0.55, 0.52]} rotation={[-0.1, -0.4, 0.15]} scale={[0.22, 0.38, 0.08]}>
        <boxGeometry />
        <meshToonMaterial color={white} />
      </mesh>

      {/* ── COLLAR RIGHT ── */}
      <mesh position={[0.14, 0.55, 0.52]} rotation={[-0.1, 0.4, -0.15]} scale={[0.22, 0.38, 0.08]}>
        <boxGeometry />
        <meshToonMaterial color={white} />
      </mesh>

      {/* ── ARM L ── */}
      <mesh position={[-1.02, 0.12, 0]} rotation={[0, 0, 0.44]}>
        <capsuleGeometry args={[0.24, 0.82, 10, 16]} />
        <meshToonMaterial color={navy} />
      </mesh>

      {/* ── ARM R ── */}
      <mesh position={[1.02, 0.12, 0]} rotation={[0, 0, -0.44]}>
        <capsuleGeometry args={[0.24, 0.82, 10, 16]} />
        <meshToonMaterial color={navy} />
      </mesh>

      {/* ── HAND L ── */}
      <mesh position={[-1.28, -0.5, 0]}>
        <sphereGeometry args={[0.26, 20, 20]} />
        <meshToonMaterial color={skin} />
      </mesh>

      {/* ── HAND R ── */}
      <mesh position={[1.28, -0.5, 0]}>
        <sphereGeometry args={[0.26, 20, 20]} />
        <meshToonMaterial color={skin} />
      </mesh>

    </group>
  );
}
