import styled from "styled-components";

export const HeaderContainer = styled.section`
  width: 72%;
  margin: 1rem auto;
  // justify-content: center;
  align-items: center;
  display: flex;
  height: 37vh;
  h1 {
    
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */

    font-size: 5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.color__text};
    display: inline-block;
  
  }

  h2 {
    font-size: 1rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    display: inline-block;
  }
  span {
    width: 60%;
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.75em;
    color: ${({ theme }) => theme.color__gray};
    margin: 0.89rem 0;
  }
  .svg {
    height: 70rem;
    overflow: hidden;
    position: absolute;
    top: -160px;
    left: 0;
    width: 100%;
    z-index: -69;
    transform: rotate(180deg);
 
      display: block;
      path {
        fill: ${({ theme }) => theme.color__svg};
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
