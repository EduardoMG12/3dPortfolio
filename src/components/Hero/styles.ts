import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width:768px) {
    height: 160vh;
  }
  `;

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 140rem;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width:1400px) {
    width: 100%;
    padding: 2rem;
  }
  @media only screen and (max-width:768px) {
    padding: 0;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentRight = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width:768px) {
    flex: 1;
    width: 100%;
  }
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
  @media only screen and (max-width:768px) {
    width: 30rem;
    height: 30rem;
  }
  animation: coffeeAnimation 2s infinite ease alternate;
  @keyframes coffeeAnimation {
    to{
      transform: translateY(2rem);
    }
  }
`;