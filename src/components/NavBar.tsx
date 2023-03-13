import React from 'react';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
    width: 1400px;
    background-color: rebeccapurple;
`


const NavBar: React.FC = () => {
    return <Header>
        <Container>NavBAr</Container>
    </Header>;
}

export default NavBar;