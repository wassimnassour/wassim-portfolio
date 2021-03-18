import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 60vh;

  /* Mobile Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    height: 70vh;
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.color__text};
    font-weight: bold;
    font-size: 7rem;
    line-height: 9rem;
    letter-spacing: 0.07em;
  }
  h2 {
    font-size: 1rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    display: inline-block;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 2.3rem;
    letter-spacing: 0.1rem;
    margin: 1.3rem 0;
    color: ${({ theme }) => theme.color__gray};
    text-align: left;
  }
  .job-title {
    color: ${({ theme }) => theme.color__gray};
    margin-bottom: 0;
    font-weight: 800;
    font-size: 1.5rem;
    letter-spacing: 2px;
    text-align: left;
  }

  .link_chat {
    font-size: 3rem;
    display: inline;
    margin: 0;
    color: ${({ theme }) => theme.color__text};
    position: relative;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    margin-top: 0.4rem;
    &::before {
      content: " ";
      background: ${({ theme }) => theme.color__secondary};
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      position: absolute;
      padding: 0.5rem;
      bottom: 7px;
      transform: rotateZ(-2deg);
      z-index: -66;
    }
    .right {
      color: ${({ theme }) => theme.color__text};
      display: block;
      font-size: 4rem;
      margin-left: 0.6rem;
      animation: toRight 1s infinite;
    }
  }

  @keyframes toRight {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  /*Laptop Version */
  @media (max-width: ${({ theme }) => theme.breakpoint_L}) and (min-width: ${({
      theme,
    }) => theme.breakpoint_T}) {
    h1 {
      letter-spacing: 4.2px;
      font-size: 6rem;
    }
  }

  /* Tablet Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) and (min-width: ${({
      theme,
    }) => theme.breakpoint_M}) {
    margin: 0 auto;
    width: 80%;
    h1 {
      letter-spacing: 4px;
      line-height: 7rem;
      font-size: 4.3rem;
      white-space: nowrap;
    }
    a {
      width: 181px;
    }
    span {
      width: unset;
      line-height: 2.4rem;
      font-size: 1.4rem;
      margin: 0.8rem 0;
    }
    .link_chat {
      font-size: 2.8rem;
      background: ${theme => theme.color__primary};
    }
  }

  /* Mobile Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    margin: 2rem 0;
    width: 99%;
    height: 100%;
    padding: 0 0 0 1.5rem;
    h1 {
      font-size: 3.5rem;
      margin: 0.3rem 0;
      line-height: 5rem;
    }
    span {
      margin: 0.3rem;
    }
    .job-title {
      font-weight: 700;
      font-size: 1.4rem;
    }
    a {
      width: 16rem;
      height: 4rem;
    }
    .link_chat {
      font-size: 2.4rem;
      background: ${theme => theme.color__primary};
    }
  }

  /* small Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_Mobile_xs}) {
    margin: 3rem 0;

    padding: 2rem 0 1rem 0.6rem;
    width: 98%;
    h1 {
      font-size: 2.8rem;
    }
    a {
      width: 120px;
      height: 40px;
      border-radius: 0.6rem;
    }
    span {
      font-size: 1.2rem;
      margin: 0.2rem;
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
  border-radius: 0.6rem;
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

export const ContactList = styled.div`
display:none;
/*  ${({ fixed }) =>
  fixed
    ? { display: "none" }
    : {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}

  span {
    font-size: 1.6rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    display: none;
  }*/
`;
