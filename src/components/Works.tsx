import React from 'react';
import styled from 'styled-components';

export const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
`;

const Works: React.FC = () => {
  return (
    <Section>
      <p>Works</p>
    </Section>);
}

export default Works;