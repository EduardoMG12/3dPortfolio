import React, { ReactNode, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";

const Cube: React.FC = () => {
  const textRef = useRef<any>();

  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <color attach="background" args={["#0f0f0f"]} />
            <Text ref={textRef} fontSize={0.5} color="#4887fc">
              HYPE WAVE
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    </>
  );
};

export default Cube;
