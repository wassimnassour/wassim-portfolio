import React from "react";
import { Layout, AboutPage, Seo } from "../components/index";
import { BigTitle } from "../components/utilityStyle";

const About = () => {
	return (
		<Layout>
			<Seo title="About" description="this page contain Infos about me " />
			<AboutPage />
		</Layout>
	);
};

export default About;
