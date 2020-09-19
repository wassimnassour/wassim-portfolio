import styled from "styled-components";

export const ProjectSectionContainer = styled.section`
  height: auto;
  margin: 2rem auto;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;
`;
export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 94%;
  margin-bottom: 2rem;

  .project {
    background: ${({ theme }) => theme.color__svg};
    height: 250px;
    font-size: 1.6rem;
    box-shadow: 0 0 2px grey;
    transition: all 0.4s;
    margin: 1.2rem;
    width: 280px;
    position: relative;
    .links {
      display: flex;
      a {
        margin: 1rem;
        font-size: 3rem;
      }
    }
    &:hover {
      box-shadow: 0 0 3px grey;
    }

    .about-project {
      color: ${({ theme }) => theme.color__text};
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 12%;
      position: absolute;
      bottom: 5%;
      width: 88%;
      transform: translateX(-50%);
      left: 50%;
      a {
        font-size: 3.5rem;
      }
    }
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    height: 60%;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  span {
    font-size: 2.5rem;
  }
  .language {
    font-size: 2rem;
    color: yellow;
    font-size: 3.5rem;
  }
  //media queries form Tablete
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    flex-wrap: wrap;
    justify-content: center;
    .project {
      height: 200px;
      width: 196px;
    }
  }
  //media queries form Mobile
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    .project {
      flex-basis: 80%;
    }
  }
`;
