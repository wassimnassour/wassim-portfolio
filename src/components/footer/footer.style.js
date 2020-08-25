import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color__footer};
  color: #eee;
  padding: 2.5rem;
  //media queries form Tablete
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Rights = styled.span`
  font-size: 1.4rem;
  text-align: left;
  align-content: flex-end;
  padding: 0 1rem;
  //media queries form Tablete ANd Mobile
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    flex-basis: 100%;
    margin: 1rem 0 0;
    padding: 1rem 0 0;
    text-align: center;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  //media queries form Tablete ANd Mobile
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    justify-content: center;
    margin: 1rem;
  }
`;
