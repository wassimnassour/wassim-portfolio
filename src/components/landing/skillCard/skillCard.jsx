import React from "react";
import { CardContainer } from "./skillCard.style";
const SkillCard = ({ name, description, Icon }) => {
	return (
		<CardContainer className="skill">
			<Icon />
			<h2>{name}</h2>
			<p>{description}</p>
		</CardContainer>
	);
};

export default SkillCard;
