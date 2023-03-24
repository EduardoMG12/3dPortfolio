import { IPropsCanvasTemplate } from './index';

import styled from "styled-components";

export const Desc = styled.div<IPropsCanvasTemplate>`
    ${props => (props.position === 1 ? "top: 10rem; right: 10rem;"
    : props.position === 2 ? "bottom: 20rem; right: 5rem;"
    : props.position === 3 ? "top: 10rem; right: 30rem"
    : props.position === 4 ? "top: 10rem; right: 10rem"
    : props.position === 5 || props.position === 6 ? "top: 10rem; right: 10rem"
    :"")}

    ${props => (props.position ? "display:block; visibility: visible;"
   : "display: none; visibility: hidden;")}

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
    @media (max-width:1300px){
            max-height: 15rem;
            width: 40rem;
            top: auto;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
        }
    @media (max-width:1140px){
            max-height: 20rem;
            max-width: 40rem;
            top: 0;
        }
    @media (max-width:420px){
            max-height: auto;
            max-width: 90%;
            top: 0;
        }
`;