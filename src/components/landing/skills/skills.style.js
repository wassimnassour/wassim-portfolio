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
    margin: 3rem 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  //media queries form Tablete
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
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
