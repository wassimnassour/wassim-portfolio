import React from "react";
import { Layout, Seo } from "../components/index";
import { graphql } from "gatsby";
import styled from "styled-components";

const ThankYou = ({ data }) => {
	const SuccesContainer = styled.div`
	 display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    vertical-align: middle;
    text-align: center;
    height: 66vh;
    margin: auto 0;
    h1{
    	padding: 2rem;
    	letter-spacing:1px;
    	font-size:2.15rem;
    }
}`;
	console.log(data);
	return (
		<Layout>
			<Seo title="thank-you" description="after  succes contact page " />
			<SuccesContainer>
				<img src={data.file.publicURL} />
				<h1>
					Thank you for getting in touch
					<span alt="image for love"> &#128151;</span>.
					<br />i would like to thank you for writing to me.
					<br /> i will reply by email as soon as possible.
				</h1>
			</SuccesContainer>
		</Layout>
	);
};
export const query = graphql`
	{
		file(relativePath: { eq: "succes.svg" }) {
			publicURL
			id
		}
	}
`;
export default ThankYou;
