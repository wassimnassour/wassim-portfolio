import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 94%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  height: 90vh;

  /* Mobile Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    height: 70vh;
  }
`;

export const ContentWrapper = styled.div`
  height: 90%;
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
    line-height: 2.2rem;
    letter-spacing: 0.07em;
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
    margin: 1rem 0 0 2rem;
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
      line-height: 2.1rem;
      font-size: 1.4rem;
      margin: 0.4rem 0;
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
  ${({ fixed }) =>
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
  }
`;
