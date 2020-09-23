import React from "react";
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Layout, Seo } from "../../components/index";
import { PostWrapper, H1, H2, H3, H4, P, Li } from "./post.style";
import Img from "gatsby-image";
import { FaAngleDoubleRight } from "react-icons/fa";
const Blog = ({ data, pageContext }) => {
	const { prev, next } = pageContext;

	const options = {
		renderMark: {
			[MARKS.CODE]: (node, children) => <code>{children}</code>,
		},
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
			[BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
			[BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
			[BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
			[BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
			[BLOCKS.LIST_ITEM]: (node, children) => <Li>{children}</Li>,
		},
	};

	return (
		<Layout>
			<Seo
				title={data.post.title}
				description={data.post.descrption1.descrption1}
			/>
			<PostWrapper>
				<h1 className="title">{data.post.title}</h1>
				<Img
					fluid={data.post.image.fluid}
					objectFit="contain"
					objectPosition="50% 50%"
				/>
				{documentToReactComponents(data.post.blogContent.json, options)}
				<div className="buttons">
					{prev && (
						<Link to={`/blog/${prev.slug}`} className="left">
							{" "}
							<FaAngleDoubleRight className="left-icon" />
							{prev.title}
						</Link>
					)}
					<span className="line">|</span>
					{next && (
						<Link to={`/blog/${next.slug}`} className="right">
							{next.title} <FaAngleDoubleRight className="right_icon" />
						</Link>
					)}
				</div>
			</PostWrapper>
		</Layout>
	);
};

export const query = graphql`
	query getPost($slug: String) {
		post: contentfulBlogPost(slug: { eq: $slug }) {
			createdAt
			descrption1 {
				descrption1
			}
			image {
				fluid {
					...GatsbyContentfulFluid
				}
			}
			title
			blogContent {
				json
			}
		}
	}
`;

export default Blog;
