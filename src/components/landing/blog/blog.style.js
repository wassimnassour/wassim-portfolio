import styled from "styled-components";
export const BlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem;

  height: auto;
`;
export const BlogWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 3.6rem auto;

  //media queries form Tablete
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    flex-wrap: wrap;
    justify-content: center;
    article:last-child {
      margin: 1rem auto 0 2.3rem;
    }
  }
  //media queries form Mobile
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    flex-wrap: wrap;
    justify-content: center;

    article:last-child {
      margin: 1.5rem;
    }
  }
`;
