import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
	max-width: 1350px;
	margin: 0 auto;
	min-height: 78vh;

	margin-bottom: 6rem;
`;

const Main = ({ children }) => {
	return <MainContainer>{children}</MainContainer>;
};

export default Main;
