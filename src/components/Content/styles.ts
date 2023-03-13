import styled from "styled-components";
import { IPropsButton, IPropsContents } from "./Contents";

export const ContentsText = styled.div<IPropsContents>`
  flex: ${props => props.flex ?? "1"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const FirstTitle = styled.h1`
  font-size: 7.4rem;
`;

export const WhatWeDoOrAre = styled.div`
  display: flex;
  align-content: center;
  gap: 1rem;
`;

export const ImageLine = styled.img`
 height: 0.5rem;
`;

export const Secondtitle = styled.h2`
  color: #da4ea2
`;

export const Paragraph = styled.p`
  font-size: 2.4rem;
  color: lightgray;

`;

export const ButtonLearn = styled.button<IPropsButton>`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  border: none;
  width: ${props => props.typeButton ?? "10rem"};
  padding: 0.1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;