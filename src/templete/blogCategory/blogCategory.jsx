import React from "react";
import { graphql } from "gatsby";
import { Post, Layout, Pagination } from "../../components/index";
import { BlogSectionWrapper } from "../allPosts/allPosts.style";
import { CategoryTitle } from "./blogCategory.style";
const BlogCategory = ({ pageContext, data }) => {
	const { allMarkdownRemark } = data;
	console.log(pageContext);
	return (
		<Layout>
			<BlogSectionWrapper>
				<CategoryTitle>posts related to "{pageContext.category}"</CategoryTitle>
				{allMarkdownRemark.edges.map(({ node }) => {
					return (
						<Post
							key={node.id}
							image={node.frontmatter.image.childImageSharp.fluid}
							title={node.frontmatter.title}
							description={node.excerpt}
							categories={node.frontmatter.category}
							link={node.frontmatter.slug}
							date={node.frontmatter.date}
							author={node.frontmatter.author}
						/>
					);
				})}
				<Pagination pageContext={pageContext} />
			</BlogSectionWrapper>
		</Layout>
	);
};

export default BlogCategory;

export const query = graphql`
	query blogPostsListByCategory($category: String, $skip: Int, $limit: Int) {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { category: { in: [$category] } } }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 150)

					frontmatter {
						title
						slug
						category
						date
						author
						category
						image {
							childImageSharp {
								fluid {
									src
								}
							}
						}
					}
				}
			}
		}
	}
`;
