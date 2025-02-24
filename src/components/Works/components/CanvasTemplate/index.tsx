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
            <Canvas camera={{fov: 50 }}>

                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 5, 2]} intensity={1} />
                    {children}
                <OrbitControls enableZoom={false} autoRotate={true} />
            </Canvas>
            <Desc position={position}>{textDesc}</Desc>
        </>
    );
};

export default CanvasTemplate;
