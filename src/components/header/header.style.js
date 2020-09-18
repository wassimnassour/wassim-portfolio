import styled from "styled-components";
import { Link } from "gatsby";

export const NavBarContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 0px 20px 0px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: ${({ theme, fixed }) => theme.color__text};
    font-size: 2.3rem;
  }
  .letter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 300px;
    background: ${({ theme, fixed }) => theme.color__primary__2};
    color: white;
    margin-right: 7px;
    font-weight: bold;
    font-size: 2.8rem;
  }

  margin-left: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    margin-left: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    margin-left: 0.4rem;
    span {
      font-size: 2rem;
    }
    .letter {
      width: 44px;
      height: 44px;
      font-size: 2.5rem;
    }
  }
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
