import { IPropsListItem } from './index';
import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  @media only screen and (max-width:1140px) {
    height: 120vh;
  }

`;

export const Section = styled.section`
  width: 140rem;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width:1300px) {
    width: 100%;
  }
  @media only screen and (max-width:1140px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    @media only screen and (max-width:1140px) {
      padding: 2rem;
  }
`;


export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
`;

export const ListItem = styled.li<IPropsListItem>`
  font-size: 9rem;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 0.08rem #B9D6F2;
  position: relative;
  white-space: nowrap;
  @media only screen and (max-width:1140px) {
    font-size: 4rem;
    -webkit-text-stroke: 0.08rem #061A40;
  }
  @media only screen and (max-width:768px) {
    font-size: 2.4rem;
  }


  ::after{
    content: "${props => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #0353A4;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    ::after{
      animation: coverText 0.5s linear both;
      @keyframes coverText {
        to{
          width: 62rem;
        }
      }
  }
  }
`;

export const RightContent = styled.div`
  width: 80vw;
  height: 80vh;
  max-width: 1200px;
  flex:1
`;