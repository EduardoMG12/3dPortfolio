import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

export const Section = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap: 5rem;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const RightContent = styled.div`
  flex: 1;
`;