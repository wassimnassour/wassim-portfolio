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
import { FaRegSun, FaMoon } from "react-icons/fa";

import { pageLinks } from "../../constants/links";
import { SideBar } from "../index";

const Header = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const togglebutton = () => {
    setOpen(!open);
  };

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

  const linkTemplet = pageLinks.map(link => (
    <li key={link.id}>
      <A to={link.url} activeClassName="active">
        {link.text}
      </A>
    </li>
  ));
  return (
    <NavBarContainer fixed={fixed ? 1 : 0}>
      <NavBarWrapper fixed={fixed ? 1 : 0}>
        <LogoWrapper>
          <span className="letter">W</span>
          <span>Wassim Nassour</span>
        </LogoWrapper>

        <NavLinksWrapper>
          <ul>{linkTemplet}</ul>
          <ThemeButton className="button" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaRegSun />}
          </ThemeButton>
        </NavLinksWrapper>
        <SideBar
          togglebutton={togglebutton}
          open={open}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default Header;
