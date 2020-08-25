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
    &:hover {
      box-shadow: 0 0 3px grey;
    }

    .about-project {
      color: ${({ theme }) => theme.color__text};
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 3rem 1rem 0rem;
      height: 12%;
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
    font-size: 2rem;
    margin: 0.5rem;
  }
  .language {
    font-size: 2rem;
    color: yellow;
    margin: 0 2.4rem;
    font-size: 4rem;
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
    width: 80%;
  }
`;
