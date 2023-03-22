import React, { Suspense } from "react";
import NavBar from "@components/NavBar";
import notebook from "@images/notebook.png";
import { Container, Section, ContentRight, Image } from "./styles";
import Content from "@components/Content";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/Sphere";

const Hero: React.FC = () => {
  return (
    <Container id="Hero">
      <NavBar />

      <Section>
        <Content
          flex="2"
          textTitle="Think, Make, Solve"
          textSubtitle="What we do"
          textDesc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor"
          childrenButton="Learn more"
        />
        <ContentRight>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere />
            </Suspense>
          </Canvas>
          <Image src={notebook} />
        </ContentRight>
      </Section>
    </Container>
  );
};

export default Hero;
