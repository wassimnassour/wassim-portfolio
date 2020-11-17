import React from "react";
import { graphql } from "gatsby";
import { BlogSectionWrapper } from "./allPosts.style";
import { Layout, BigTitle, Pagination, Post } from "../../components/index";
const AllPosts = ({ data, pageContext }) => {
  const {
    allMarkdownRemark: { nodes: posts },
  } = data;
  return (
    <Layout>
      <BigTitle>Blog</BigTitle>
      <BlogSectionWrapper>
        {posts.map(post => (
          <Post
            key={post.id}
            link={post.frontmatter.slug}
            image={post.frontmatter.image.childImageSharp.fluid}
            title={post.frontmatter.title}
            description={post.excerpt}
            categories={post.frontmatter.category}
          />
        ))}

        <Pagination pageContext={pageContext} />
      </BlogSectionWrapper>
    </Layout>
  );
};

export const query = graphql`
  query($limit: Int, $skip: Int) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {}
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        excerpt(pruneLength: 200)
        frontmatter {
          category
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          title
        }
      }
    }
  }
`;

export default AllPosts;
