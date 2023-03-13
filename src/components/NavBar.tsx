import React from 'react';
import styled from 'styled-components';
import logoSVG from '@images/Logo.svg'
import searchIcon from '@images/search.png'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  `;

export const Container = styled.div`
    width: 140rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;
`;

export const Logo = styled.img`
    height: 5rem;
`;

export const List = styled.ul`
    display: flex;
    gap: 2rem;

`;

export const ListItem = styled.li`
    cursor: pointer;
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const Icon = styled.img`
    width: 2rem;
    cursor: pointer;
`;
export const Button = styled.button`
    width: 10rem;
    padding: 1rem;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 0.5px;
    cursor: pointer;
`;

const NavBar: React.FC = () => {
    return (
        <Header>
            <Container>
                <Links>
                    <Logo src={logoSVG} />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src={searchIcon} />
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Header>
    );
}

export default NavBar;