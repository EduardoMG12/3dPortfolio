import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  `;

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 140rem;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width:1170px) {
    width: 100%;
    padding: 1rem;
  }
  `;

export const ContentLeft = styled.div`
  flex: 1;
  @media only screen and (max-width:1124px) {
    display: none;
  }
`;