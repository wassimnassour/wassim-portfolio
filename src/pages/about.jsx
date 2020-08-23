import React from "react";
import { Layout, AboutPage } from "../components/index";
import { BigTitle } from "../components/utilityStyle";

const About = () => {
	return (
		<Layout>
			<BigTitle>About</BigTitle>
			<AboutPage />
		</Layout>
	);
};

export default About;
