import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";

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
            <color attach="background" args={["#61A5C2"]} />
            <Text ref={textRef} fontSize={0.5} color="#061A40">
              HYPE WAVE
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    </>
  );
};

export default Cube;
