import React from 'react';
import styled from 'styled-components';
import { Container, LeftContent, List, ListItem, RightContent, Section } from './styles';

const data = [
    "Web Design",
    "Developement",
    "Illustration",
    "Product Design",
    "Social Media"
    // React
    // TS
    // Java
    // Next
]

export interface IPropsListItem {
    text?: string
}

const Works: React.FC = () => {
    return (
        <Container>
            <Section>
                <LeftContent>
                    <List>
                        {data.map((itemName) => {
                            return <ListItem text={itemName} key={itemName}>{itemName}</ListItem>
                        })}
                    </List>
                </LeftContent>
                <RightContent></RightContent>

            </Section>
        </Container>
    );
}

export default Works;