import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        overflow-x: hidden;
        padding: 0;
        box-sizing: border-box;
        margin: 0;
        list-style: none;
        font-family: 'Roboto', sans-serif;
    }
    html{
        font-size: 62.5%;
    }
`


export default GlobalStyle