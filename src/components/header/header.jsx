import React, { useState, useEffect } from "react";
import LogoDark from "../../images/LogoDark.svg";
import LogoWhite from "../../images/LogoWhite.svg";
import {
  NavBarContainer,
  LogoWrapper,
  NavLinksWrapper,
  A,
  ThemeButton,
  NavBarWrapper,
} from "./header.style";
import { FaRegSun } from "react-icons/fa";
import { globalHistory } from "@reach/router";
import { pageLinks } from "../../constants/links";

const Header = ({ theme, toggleTheme }) => {
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", setHeaderFixed);

    return () => {
      window.removeEventListener("scroll", setHeaderFixed);
    };
  }, []);
  const setHeaderFixed = () => {
    if (window.scrollY >= 50) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  const path = globalHistory.location.pathname === "/" ? true : false;

  const linkTemplet = pageLinks.map(link => (
    <li key={link.id} path={path ? 1 : 0} fixed={fixed ? 1 : 0}>
      <A to={link.url} activeClassName="active" path={path ? 1 : 0}>
        {link.text}
      </A>
    </li>
  ));
  return (
    <NavBarContainer fixed={fixed ? 1 : 0} path={path ? 1 : 0}>
      <NavBarWrapper fixed={fixed ? 1 : 0}>
        <LogoWrapper>
          <A to="/">
            <img src={theme === "light" ? LogoWhite : LogoDark} alt="logo" />
          </A>
        </LogoWrapper>
        <NavLinksWrapper>
          <ul>{linkTemplet}</ul>
          <ThemeButton className="button" onClick={toggleTheme}>
            <FaRegSun />
          </ThemeButton>
        </NavLinksWrapper>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default Header;

// const NavBar = ({  location, history }) => {

// export default NavBar;
