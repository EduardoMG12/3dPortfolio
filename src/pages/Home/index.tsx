import React from "react";
import { Container } from "./styles";
import Contact from "@components/Contact";
import Hero from "@components/Hero";
import Who from "@components/Who";
import Works from "@components/Works";

const Home: React.FC = () => {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
};

export default Home;
