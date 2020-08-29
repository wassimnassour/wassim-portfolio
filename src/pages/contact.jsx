import React from "react";
import { Layout, ContactPage, Seo } from "../components/index";
import { BigTitle } from "../components/utilityStyle";
const Contact = () => {
	return (
		<Layout>
			<Seo title=" Contact" description="Page For Contact Me" />
			<BigTitle>Contact</BigTitle>
			<ContactPage />
		</Layout>
	);
};

export default Contact;
