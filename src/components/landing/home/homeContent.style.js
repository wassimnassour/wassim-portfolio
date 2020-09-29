import styled from "styled-components";

export const HeaderContainer = styled.section`
  width: 64%;
  margin: 1rem auto;
  align-items: center;
  display: flex;
  height: 58vh;
  h1 {
    font-size: 8rem;
    letter-spacing: 5px;
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
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.75em;
    color: ${({ theme }) => theme.color__gray};
    margin: 0.89rem 0;
  }

  /* Laptop Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_L}) and (min-width: ${({
      theme,
    }) => theme.breakpoint_T}) {
    height: 44vh;
    width: 100%;
    margin-top: 0;
    clip-path: polygon(0 0, 100% 0%, 100% 86%, 0 100%);
    background: ${({ theme }) => theme.color__svg};
    .contant-wrapper {
      width: 72%;
      margin: 0 auto;
    }
    .content {
      h1 {
        letter-spacing: 4.2px;
        font-size: 6rem;
      }
      span {
        width: 100%;
      }
    }
  }

  /* Laptop Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) and (min-width: ${({
      theme,
    }) => theme.breakpoint_M}) {
    height: 42vh;
    width: 100%;
    margin-top: 0;
    background: ${({ theme }) => theme.color__svg};
    clip-path: polygon(0 0, 100% 0%, 100% 86%, 0 100%);
    .content {
      width: 75%;
      margin: 0 auto 0 6rem;
      h1 {
        letter-spacing: 4px;
        font-size: 4.3rem;
        white-space: nowrap;
      }
      a {
        width: 151px;
      }
      span {
        width: unset;
        line-height: 2rem;
        font-size: 1.4rem;
      }
    }
  }
  /* Mobile Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    height: 60vh;
    width: 100%;

    .content {
      margin: 2rem 0;
      text-align: center;
      align-items: center;
      width: 96%;

      padding: 0 0 0 1.5rem;
      h1 {
        font-size: 3.7rem;
      }
    }
    a {
      width: 140px;
      height: 40px;
      border-radius: 9px;
    }
    span {
      text-align: center;
    }
  }
  /* small Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_Mobile_xs}) {
    height: 60vh;
    width: 100%;

    .content {
      margin: 2rem 0;
      text-align: center;
      align-items: center;
      width: 98%;

      padding: 0 0 0 1.5rem;
      h1 {
        font-size: 3.1rem;
      }
    }
    a {
      width: 120px;
      height: 40px;
      border-radius: 9px;
    }
    span {
      font-size: 1.3rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
`;
export const ResumeButton = styled.a`
  background-color: ${({ theme }) => theme.color__primary};
  color: ${({ theme }) => theme.color__white};
  box-shadow: 0 10px 10px -8px ${({ theme }) => theme.color__primary};
  text-decoration: none;
  font-weight: 400;
  width: 175px;
  margin: 1rem;
  font-size: 1.5rem;
  border-radius: 1.2rem;
  padding: 1rem 1rem;
  margin-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    transform: scale(1.02) translateY(-0.1rem);
    transition: transform 0.2s ease-out;
    background: ${({ theme }) => theme.color__primary__2};
  }
`;
