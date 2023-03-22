import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        overflow-x: hidden;
        overflow-y: hidden;
        padding: 0;
        box-sizing: border-box;
        margin: 0;
        list-style: none;
        font-family: 'Roboto', sans-serif;
        color: #B9D6F2;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
    }
    html{
        font-size: 62.5%;
    }
    body{
        div{
            overflow-y: hidden;
        }
    }
`


export default GlobalStyle