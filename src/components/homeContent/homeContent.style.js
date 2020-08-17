import styled, { keyframes } from "styled-components";
// const typing = keyframes`
//     from { width: 0 }
//     to { width: 63% }
//   `;

// /* The typewriter cursor effect */
// const blink_caret = keyframes`
//     from, to { border-color: transparent }
//     60% { border-color: #007bff}
//   `;

export const HeaderContainer = styled.section`
  width: 72%;
  margin: 1rem auto;
  // justify-content: center;
  align-items: center;
  display: flex;
  height: 36vh;
  h1 {
    border-right: 0.15em solid ${({ theme }) =>
      theme.color__primary}; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
   
    font-size: 5rem;
    letter-spacing: 1rem;
    margin-bottom: .5rem;
    color: ${({ theme }) => theme.color__white};
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
    // color:${({ theme }) => theme.color__sub__text};
    color:#e4e4e4e4;
    margin: .89rem 0;
}
.svg{
      height: 70rem;
    overflow: hidden;
    position: absolute;
    top: -105px;
    left: 0;
    width: 100%;
    z-index: -69;
    transform: rotate(180deg);
  svg{
  display:block;
  }
}

}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
