import React from 'react';
import NavBar from '@components/NavBar';
import coffee from '@images/coffee.png'
import { Container, Section, ContentRight, Image } from './styles';
import Content from '@components/Content';

const Hero: React.FC = () => {
  return (
    <Container>
      <NavBar />

      <Section>
        <Content flex='2' textTitle='Think, Make, Solve' textSubtitle='What we do' textDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor' childrenButton="Learn more" typeButton={"10rem"} />
        <ContentRight>
          {/* 3d model */}
          <Image src={coffee} />
        </ContentRight>
      </Section>
    </Container>);
}

export default Hero;