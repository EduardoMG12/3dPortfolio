import { IPropsListItem } from './index';
import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  width: 140rem;
  display: flex;
  justify-content: space-between;
`;

export const LeftContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;


export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const ListItem = styled.li<IPropsListItem>`
  font-size: 9rem;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 0.1rem white;
  position: relative;


  ::after{
    content: "${props => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: cyan;
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
   flex: 1;
  `;