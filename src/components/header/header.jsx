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
  Wrapper,
} from "./header.style";
import { FaRegSun } from "react-icons/fa";
import { globalHistory } from "@reach/router";
import { pageLinks } from "../../constants/links";

const Header = () => {
  const linkTemplet = pageLinks.map(link => (
    <li key={link.id}>
      <A to={link.url} activeClassName="active">
        {link.text}
      </A>
    </li>
  ));
  return (
    <NavBarContainer>
      <Wrapper>
        <NavBarWrapper>
          <LogoWrapper>
            <A to="/">
              <img src={LogoDark} alt="logo" />
            </A>
          </LogoWrapper>
          <NavLinksWrapper>
            <ul>{linkTemplet}</ul>
            <ThemeButton className="button">
              <FaRegSun />
            </ThemeButton>
          </NavLinksWrapper>
        </NavBarWrapper>
      </Wrapper>
    </NavBarContainer>
  );
};

export default Header;

// const NavBar = ({  location, history }) => {
// const [fixed, setFixed] = useState(false);
// useEffect(() => {
// 	window.addEventListener("scroll", setHeaderFixed);

// 	return () => {
// 		window.removeEventListener("scroll", setHeaderFixed);
// 	};
// }, []);
// const setHeaderFixed = () => {
// 	console.log(window.scrollY);

// 	if (window.scrollY >= 50) {
// 		setFixed(true);
// 	} else {
// 		setFixed(false);
// 	}
// };

// 	const path = globalHistory.location.pathname === "/" ? true : false;

// 	return (

// 	);
// };

// export default NavBar;
