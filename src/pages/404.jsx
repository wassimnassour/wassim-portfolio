import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Layout, Seo } from "../components/index";

const PageNotFound = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 76vh;
	img {
		width: 60%;
	}
	h2 {
		font-size: 4rem;
	}

	//media queries form Tablete
	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		h2 {
			font-size: 2rem;
			margin: 4rem;
		}
	}
	//media queries form Mobile
	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		h2 {
			font-size: 2.5rem;
			margin: 4rem;
		}
		img {
			width: 80%;
		}
	}
`;
const Erorre = ({ data }) => {
	return (
		<Layout>
			<Seo title="404" description="Page not Found" />
			<PageNotFound>
				<img src={data.file.publicURL} alt="Page Not Found" />
				<h2>Page Not Found </h2>
			</PageNotFound>
		</Layout>
	);
};
export const query = graphql`
	{
		file(relativePath: { eq: "404.svg" }) {
			publicURL
			id
		}
	}
`;

export default Erorre;
