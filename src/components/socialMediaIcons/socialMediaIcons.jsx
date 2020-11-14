import React from "react";
import { contactIcons } from "../../constants/contactIcons";
import { IconsCotainer } from "./socialMediaIcons.style";
import { useFixed } from "../../hook/useFixed";

const SocialMediaIcons = () => {
	const { fixed } = useFixed();

	return <IconsCotainer fixed={fixed}>{contactIcons}</IconsCotainer>;
};

export default SocialMediaIcons;
