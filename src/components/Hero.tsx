import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import line from '@images/line.png'
import coffee from '@images/coffee.png'

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

export const ContentLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2;
`;

export const Title = styled.h1`
  font-size: 7.4rem;
`;

export const WhatWeDo = styled.div`
  display: flex;
  align-content: center;
  gap: 1rem;
`;

export const Line = styled.img`
 height: 0.5rem;
`;

export const Subtitle = styled.h2`
  color: #da4ea2
`;

export const Desc = styled.p`
  font-size: 2.4rem;
  color: lightgray;

`;

export const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  border: none;
  width: 10rem;
  padding: 0.1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ContentRight = styled.div`
  flex: 3;
  position: relative;
`;

export const Image = styled.img`
  width: 60rem;
  height: 50rem;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  animation: coffeeAnimation 2s infinite ease alternate;

  @keyframes coffeeAnimation {
    to{
      transform: translateY(2rem);
    }
  }
`;


const Hero: React.FC = () => {
  return (
    <Container>
      <NavBar />

      <Section>
        <ContentLeft>
          <Title>Think, Make, Solve</Title>
          <WhatWeDo>
            <Line src={line} />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor</Desc>
          <Button>Learn More</Button>
        </ContentLeft>
        <ContentRight>
          {/* 3d model */}
          <Image src={coffee} />
        </ContentRight>
      </Section>
    </Container>);
}

export default Hero;
