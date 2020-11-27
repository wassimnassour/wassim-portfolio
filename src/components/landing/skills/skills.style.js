import styled from "styled-components";

export const SkillsContainer = styled.section`
  height: auto;
  margin: 3.5rem auto 9rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  .skills {
    display: flex;
    margin: 3rem 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  //media queries form Tablete
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    width: 100%;
    .skills {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  //media queries form Mobile
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    .skills {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
