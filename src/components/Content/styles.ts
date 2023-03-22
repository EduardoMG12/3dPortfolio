import styled from "styled-components";
import { IPropsButton, IPropsContents } from "./Contents";

export const ContentsText = styled.div<IPropsContents>`
  flex: ${props => props.flex ?? "1"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  @media only screen and (max-width:768px) {
    flex:1;
    align-items: center;
  }
  `;

export const FirstTitle = styled.h1`
  font-size: 7.4rem;
  color: #B9D6F2;
  @media only screen and (max-width:768px) {
    text-align: center;
  }
  
`;

export const WhatWeDoOrAre = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  gap: 1rem;
  & img{
    transform: translateY(5px);
  }
`;

export const ImageLine = styled.img`
 height: 0.5rem;
`;

export const Secondtitle = styled.h2`
  color: #061A40;
`;

export const Paragraph = styled.p`
  font-size: 2.4rem;
  color: #B9D6F2;
  @media only screen and (max-width:768px) {
    padding: 2rem;
    text-align: center;
  }
`;

export const ButtonLearn = styled.button<IPropsButton>`
  background-color: #061A40;
  color: #B9D6F2;
  font-weight: 500;
  border: none;
  width: fit-content;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;