import React, { useState } from "react";
import { Link } from "gatsby";
import { FaRegSun, FaMoon } from "react-icons/fa";

import {
  NavBarContainer,
  LogoWrapper,
  NavLinksWrapper,
  A,
  ThemeButton,
  NavBarWrapper,
} from "./header.style";
import { pageLinks } from "../../constants/links";
import { SideBar } from "../index";
import { useFixed } from "../../hook/useFixed";
import LogoWhite from "../../images/assets/logo-white.svg";
import LogoDark from "../../images/assets/logo-dark.svg";

const Header = ({ theme, toggleTheme }) => {
  const { fixed } = useFixed();
  const [open, setOpen] = useState(false);
  const togglebutton = () => {
    setOpen(!open);
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
          <Link to="/">{theme === "light" ? <LogoDark /> : <LogoWhite />}</Link>
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
