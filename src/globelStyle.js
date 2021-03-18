import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
        font-size:62.5%;
  }
  body {
  background: ${({ theme }) => theme.color__primary};
    color: ${({ theme }) => theme.color__text};  
    height: 100vh;
    overflow-x: hidden;
     margin: 0;
    padding: 0;
    font-family: 'Poppins','Source Sans Pro', sans-serif;
    transition: all 0.25s linear;
    a{
      text-decoration:none;
      color:inherit;

    }
    li{
        list-style: none;
    }
    ul{
      padding-left:0;
    }
    .hydrated {
      font-size:1.7rem;
      padding:1rem;
      
    }
 
  }`;
