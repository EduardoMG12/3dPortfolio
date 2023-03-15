import React from "react";
import Contact from "@components/Contact";
import Hero from "@components/Hero";
import Who from "@components/Who";
import Works from "@components/Works";

import { Container } from "./styles";

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
