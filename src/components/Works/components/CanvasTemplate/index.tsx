import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { ReactNode } from "react";
import { Desc } from "./styles";

export interface IPropsCanvasTemplate {
  children: ReactNode;
  textDesc?: ReactNode;
  position: any;
}

const CanvasTemplate: React.FC<IPropsCanvasTemplate> = ({
  children,
  textDesc,
  position,
}) => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.1}>
          {children}
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Canvas>
      <Desc position={position}>{textDesc}</Desc>
    </>
  );
};

export default CanvasTemplate;
