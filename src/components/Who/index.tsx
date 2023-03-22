import React, { Suspense } from "react";
import { Container, ContentLeft, Section } from "./styles";
import Content from "@components/Content";
import Cube from "@components/Who/components/Cube";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Who: React.FC = () => {
  return (
    <Container id="Studio">
      <Section>
        <ContentLeft>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </ContentLeft>
        <Content
          flex="1"
          textTitle="Think outside the square space"
          textSubtitle="What we are"
          textDesc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor"
          childrenButton="see our projects"
        />
      </Section>
    </Container>
  );
};

export default Who;
