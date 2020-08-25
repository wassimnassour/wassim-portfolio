import styled from "styled-components";
import { Link } from "gatsby";

export const NavBarContainer = styled.header`
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  width: 100%;
  box-shadow: 0 0 1px 0px #6f6d6d;
  background: ${({ theme, fixed }) => (fixed ? theme.color__background : "")};
  z-index: 100;
  a {
    color: ${({ theme, fixed }) => (fixed ? theme.color__text : "")};
  }
`;
export const Wrapper = styled.div``;

export const NavBarWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 1202px;
  color: ${({ theme }) => theme.color__white};
  display: flex;
  align-items: center;
  height: ${({ fixed }) => (fixed ? "7.2vh" : "7.4vh")};
  padding: 2rem 0;
`;

export const LogoWrapper = styled.div`
  font-size: 1.5rem;
  height: 5rem;
  @media (max-width: ${({ theme }) => theme.breakpoint_lg}) {
    font-size: 1.5rem;
    padding-left: 1rem;
  }
`;
export const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  ul {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      margin: 1.3rem;
      font-size: 1.5rem;
      .active {
        border-bottom: 2px solid ${({ theme }) => theme.color__primary};
      }
    }
  }
`;

export const A = styled(Link)`
  text-decoration: none;

  color: ${({ theme }) => theme.color__text};
  font-size: 1.6rem;
  font-weight: 400;
`;

export const ThemeButton = styled.button`
  background: transparent;
  border: none;

  color: ${({ theme }) => theme.color__text};

  font-size: 4rem;

  display: flex;
  height: 3rem;
  align-items: center;
  outline: none;
  transform: rotateZ(-16deg);
`;
