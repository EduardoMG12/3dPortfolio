import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  overflow-y: hidden;
`;

export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  @media (max-width:800px){
    justify-content: center;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width:800px){
    justify-content: center;
  }
  @media (max-width:600px){
    max-width: 90%;
  }
`;

export const RightContent = styled.div`
  flex: 1;
  @media (max-width:800px){
    display: none;
  }
`;