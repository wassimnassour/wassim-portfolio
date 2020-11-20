import styled from "styled-components";

export const BlogSectionWrapper = styled.div`
  width: 67%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem; /* Laptop Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_L}) and (min-width: ${({
      theme,
    }) => theme.breakpoint_T}) {
    width: 90%;
  }
  /* Tablet Version */
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    width: 90%;
  }
`;
