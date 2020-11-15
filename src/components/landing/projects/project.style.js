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
  justify-content: space-around;
  width: 97%;
  margin :3.5rem 0;
  flex-wrap: wrap;
  .button {
    align-self: center;
    flex-basis: 47%;
    a {
      width: 60%;
      margin: 0 auto;
    }
  }

  //media queries form Tablete
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    justify-content: center;

    .button{
      flex-basis:45%;
    }
  }
  //media queries form Mobile
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
  
    .button{
     margin:4rem 0;
     flex-basis:100%;
    }
  }
`;
