import { IPropsCanvasTemplate } from './index';

import styled from "styled-components";

export const Desc = styled.div<IPropsCanvasTemplate>`
    ${props => (props.position === 1 ? "top: 10rem; right: 10rem;"
    : props.position === 2 ? "bottom: 20rem; right: 5rem;"
    : props.position === 3 ? "top: 10rem; right: 30rem"
    : props.position === 4 ? "top: 10rem; right: 10rem"
    : props.position === 5 ? "top: 10rem; right: 10rem": "")}
    width: 20rem;
    max-height: 90rem;
    padding: 2rem;
    background-color: white;
    border-radius: 1rem;
    position: absolute;
    
    display: flex;
    align-items: center;
    justify-content: center;
    & p {
    font-weight: 700;
    font-size: 1.3rem;
    color: black;
    }
`;