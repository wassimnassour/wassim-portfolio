import React, { useState } from "react";
import { Link } from "gatsby";
import {
  NavBarContainer,
  LogoWrapper,
  NavLinksWrapper,
  A,
  NavBarWrapper,
} from "./header.style";
import { pageLinks } from "../../constants/links";
import { SideBar } from "../index";
import LogoWhite from "../../images/assets/logo-white.svg";

const Header = () => {
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
    <NavBarContainer>
      <NavBarWrapper>
        <LogoWrapper>
          <Link to="/">
            {" "}
            <LogoWhite />
          </Link>
        </LogoWrapper>
        <NavLinksWrapper>
          <ul>
            {linkTemplet}
            <li>
              {" "}
              <a
                href="https://drive.google.com/file/d/1QVqHaoN7WfTmhHZs5iffJOSv4rZwYKcF/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </NavLinksWrapper>
        <SideBar togglebutton={togglebutton} open={open} />
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default Header;
