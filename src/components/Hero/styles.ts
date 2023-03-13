import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 140rem;
  display: flex;
  justify-content: space-between;
`;

export const ContentRight = styled.div`
  flex: 3;
  position: relative;
`;

export const Image = styled.img`
  width: 60rem;
  height: 50rem;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  animation: coffeeAnimation 2s infinite ease alternate;

  @keyframes coffeeAnimation {
    to{
      transform: translateY(2rem);
    }
  }
`;