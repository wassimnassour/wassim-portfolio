import styled from "styled-components";

export const SkillsContainer = styled.section`
  height: auto;

  margin: 3.5rem 0 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .skills {
    display: flex;
    margin: 0 2rem;
    justify-content: space-between;
    align-items: center;
    .skill {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      height: 241px;
      width: 33%;
      margin: 1rem;
      h2 {
        font-size: 1.6rem;
        margin: 2rem;
      }
      img {
        width: 73%;
        height: 80%;
      }
    }
  }

  //media queries form Tablete
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    .skills {
      flex-wrap: wrap;
      justify-content: center;
    }
    .skill {
      width: 30%;
      box-shadow: 0 0 2px grey;
      margin: 1rem;
      box-shadow: 0px 0 2px 0px #929292;
    }
  }
  //media queries form Mobile
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    .skills {
      flex-wrap: wrap;
      justify-content: center;
    }
    .skill {
      flex-basis: 80%;
      box-shadow: 0 0 2px grey;

      margin: 1rem;
      box-shadow: 0px 0 2px 0px #929292;
    }
  }
`;
