import React from "react";
import { MeshDistortMaterial, Sphere as Spheree } from "@react-three/drei";

// import { Container } from './styles';

const Sphere: React.FC = () => {
  return (
    <Spheree args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#030a2a"
        // color="#ffffff"
        attach="material"
        distort={0.5}
        speed={2.2}
      />
    </Spheree>
  );
};

export default Sphere;
