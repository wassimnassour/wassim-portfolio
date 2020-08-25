import React from "react";
import { SideBarContainer, Button } from "./sideBar.style";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { pageLinks } from "../../constants/links";
import { ThemeButton } from "../header/header.style";
import { FaRegSun, FaMoon } from "react-icons/fa";
import { Link } from "gatsby";

const SideBar = ({ open, togglebutton, theme, toggleTheme }) => {
	return (
		<SideBarContainer onClick={togglebutton} open={open}>
			<Button onClick={togglebutton} open={open}>
				{!open ? (
					<AiOutlineMenu className="svg" />
				) : (
					<AiOutlineClose className="svg" />
				)}
			</Button>{" "}
			{open && (
				<div className="sideBar__Wrapper">
					<div className="SideBar">
						<ul>
							{pageLinks.map(link => (
								<Link to={link.url}>
									<li>{link.text}</li>
								</Link>
							))}
							<ThemeButton className="button" onClick={toggleTheme}>
								{theme === "light" ? <FaMoon /> : <FaRegSun />}
							</ThemeButton>
						</ul>
					</div>
				</div>
			)}
		</SideBarContainer>
	);
};

export default SideBar;
