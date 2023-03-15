import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  @media only screen and (max-width:1350px) {
      width: 100%;
      padding: 1rem;
  }
  `;

export const Container = styled.div`
    width: 140rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    @media only screen and (max-width:1350px) {
    width: 100%;
  }
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
    @media only screen and (max-width:468px) {
        display: none;
    }

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
    border-radius: 0.5rem;
    cursor: pointer;
`;