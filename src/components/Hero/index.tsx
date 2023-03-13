import React from 'react';
import NavBar from '../NavBar';
import line from '@images/line.png'
import coffee from '@images/coffee.png'
import { Container, Section, ContentLeft, Title, WhatWeDo, Line, Subtitle, Desc, Button, ContentRight, Image } from './styles';

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
