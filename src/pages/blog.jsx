import { Layout, Posts } from "../components/index";
import { BigTitle } from "../components/utilityStyle";
import React from "react";

const Blog = () => {
	return (
		<Layout>
			<BigTitle>Blog</BigTitle>
			<Posts />
		</Layout>
	);
};

export default Blog;
