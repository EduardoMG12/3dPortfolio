import styled from 'styled-components';
import background from '/public/images/background.jpeg'

export const Container = styled.div`
    height:100vh;
    background-color: rebeccapurple;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color:white;
    background: url(${background});
    &::-webkit-scrollbar{
    display: none;
}
`;