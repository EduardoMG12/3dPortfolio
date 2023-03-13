import React from 'react';
import { Container, ContentLeft, Section } from './styles';
import Content from '@components/Content';

const Who: React.FC = () => {
    return (
        <Container>
            <Section>
                <ContentLeft>{/* 3d model */}</ContentLeft>
                <Content flex='1' textTitle='Think outside the square space' textSubtitle='What we are' textDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor' childrenButton="see our projects" typeButton={"12rem"} />
            </Section>
        </Container >);
}

export default Who;