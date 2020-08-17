import styled from "styled-components";

export const Rights = styled.span`
  font-size: 1.4rem;
  text-align: left;
  align-content: flex-end;
  padding: 0 1rem;
`;
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color__footer};
  color: #eee;
  padding: 2.5rem;
`;
export const SocialMediaWrapper = styled.div`
  display: flex;
`;
