import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const NavBarContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 0px 20px 0px;
  background: ${({ theme }) => theme.color__primary};
  z-index: 100;
  a {
    color: ${({ theme }) => theme.color__text};
  }
`;
export const Wrapper = styled.div``;

export const NavBarWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  color: ${({ theme }) => theme.color__white};
  display: flex;
  align-items: center;
  height: 7.4vh;
  padding: 2rem 0;
`;

export const LogoWrapper = styled.div`
  font-size: 1.5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    margin-left: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    margin-left: 0.4rem;
  }
`;
export const link = css`
  text-decoration: none;
  color: ${({ theme }) => theme.color__text};
  font-size: 1.6rem;
  font-weight: 400;
`;
export const NavLinksWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    display: none;
  }
  display: flex;
  align-items: center;
  height: 5rem;
  ul {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      margin: 2rem;
      font-size: 1.5rem;
      .active {
        border-bottom: 2px solid ${({ theme }) => theme.color__primary};
      }
      a {
        ${link}
      }
    }
  }
`;

export const A = styled(Link)`
  ${link}
`;
