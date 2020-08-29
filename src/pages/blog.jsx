import React from "react";
import { Layout, Posts, Seo } from "../components/index";
import { BigTitle } from "../components/utilityStyle";

const Blog = () => {
	return (
		<Layout>
			<Seo
				title="Blog"
				description="i wrote articels in this page for share some infrormation i know "
			/>
			<BigTitle>Blog</BigTitle>
			<Posts />
		</Layout>
	);
};

export default Blog;
