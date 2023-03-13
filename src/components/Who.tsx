import React from 'react';
import styled from 'styled-components';

export const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
`;

const Who: React.FC = () => {
  return (
    <Section>
      <p>Who</p>
    </Section>);
}

export default Who;