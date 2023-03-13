import React from 'react';
import styled from 'styled-components';

export const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
`;


const Contact: React.FC = () => {
  return (
    <Section>
      <p>Contact</p>
    </Section>);
}


export default Contact;