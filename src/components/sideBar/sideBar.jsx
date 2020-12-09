import React from "react";
import { SideBarContainer, Button } from "./sideBar.style";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { pageLinks } from "../../constants/links";
import { ThemeButton } from "../header/header.style";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

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
								<Link to={link.url} key={link.id}>
									<li>{link.text}</li>
								</Link>
							))}
							<a
								href="https://drive.google.com/file/d/1QVqHaoN7WfTmhHZs5iffJOSv4rZwYKcF/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
							>
								<li>Resume</li>
							</a>
							<ThemeButton className="button" onClick={toggleTheme}>
								{theme === "light" ? <FaMoon /> : <FiSun />}
							</ThemeButton>
						</ul>
					</div>
				</div>
			)}
		</SideBarContainer>
	);
};

export default SideBar;
