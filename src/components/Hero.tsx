import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

export const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 140rem;
  display: flex;
  justify-content: space-between;
`;
`;

const Hero: React.FC = () => {
  return (
    <Container>
      <NavBar />

    <Section>
      </Section>
    </Container>);
}

export default Hero;
