import Form from '@components/Form';
import MapChart from '@components/MapChart';
import React from 'react';
import styled from 'styled-components';
import { Container, Section, LeftContent, RightContent } from './styles';



const Contact: React.FC = () => {
  return(
    <Container>
        <Section>
            <LeftContent>
                <Form />
            </LeftContent>
            <RightContent><MapChart/></RightContent>
        </Section>

    </Container>
  );
}

export default Contact;