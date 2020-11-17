import styled from "styled-components";

export const BlogSectionWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem; /* Laptop Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_L}) and (min-width: ${({
      theme,
    }) => theme.breakpoint_T}) {
    width: 71%;
  }
  /* Tablet Version */
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    width: 84%;
  }
`;
