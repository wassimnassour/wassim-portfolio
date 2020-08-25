import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
	max-width: 1200px;
	margin: 0 auto;
	min-height: 76vh;
	margin-top: 3rem;
	margin-bottom: 6rem;
`;

const Main = ({ children }) => {
	return <MainContainer>{children}</MainContainer>;
};

export default Main;
