import MapChart from '@components/MapChart';
import React from 'react';
import styled from 'styled-components';
import { Container, Section, LeftContent, Form, Title, Input, TextArea, Button, RightContent } from './styles';



const Contact: React.FC = () => {
  return(
    <Container>
        <Section>
            <LeftContent>
                <Form>
                    <Title>Contac Us</Title>
                    <Input placeholder='name'/>
                    <Input placeholder='email'/>
                    <TextArea placeholder='Write your message' rows={10}/>
                    <Button>Send</Button>
                </Form>
            </LeftContent>
            <RightContent><MapChart/></RightContent>
        </Section>

    </Container>
  );
}

export default Contact;