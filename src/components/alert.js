import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Alert = () => {
	return (
		<AlertStyle>
			<Fade right>
				<span>Hi i'm Open To Work as Front-end developer</span>
			</Fade>{" "}
		</AlertStyle>
	);
};

const AlertStyle = styled.div`
	background: #ea432d;

	text-align: center;
	color: white;
	height: 27px;
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		font-weight: 700;
		color: white;
		font-size: 1.2rem;
		letter-spacing: 0.1rem;
	}
`;
export default Alert;
